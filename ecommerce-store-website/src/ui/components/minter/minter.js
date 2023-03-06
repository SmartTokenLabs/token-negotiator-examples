// Dependencies
import { useState, useEffect, useContext } from "react";
import clsx from 'clsx';

// App
import { safeMint } from "base/utils/interact.js";
import { Card, Button, Headline, Image, PopUp } from 'ui/components';
import { TokenContext } from "src/providers/TokenContextProvider";
import { chainMap } from 'base/utils/network';
import nftDataStore from 'base/nft-data-store';

// Styles
import styles from './minter.module.scss';


//
//	Brand Connector Demo / UI / Components / Minter
//

export default function Minter({ className }) {


	const { wallet: walletInstance, walletStatus, chainId, tokens: selectedTokens, switchChain } = useContext(TokenContext);

	const [submissionStatus, setSubmissionStatus] = useState('');
	const [mintedNFTs, setMintedNFTs ] = useState([]);
	const [changeOfNetworkRequired, setChangeOfNetworkRequired] = useState(false);
	const [popUpMsg, setPopUpMsg] = useState('')
	const [chain, setChain] = useState();
	const nftCollections = nftDataStore;

	const [mintButonState, setMintButonState] = useState(nftDataStore.map(()=>false));

	useEffect( () => {
		if ( submissionStatus && !walletStatus ) setSubmissionStatus( walletStatus );
	}, [ walletStatus ] );

	useEffect(() => {
		setChain(chainMap[chainId] ? chainMap[chainId] : 'unsupported chain: ' + chainId);
	}, [chainId]);

	const onClosePopUpEvent = () => {
		setChangeOfNetworkRequired(false);
	}

	const onMintPressed = async ( event, nft, collectionItem ) => {
		if ( walletStatus ) {
			setSubmissionStatus( walletStatus );
			return;
		}

		let curChain = chain;

		if( !nft.contracts[chain] ) {
			try {
				// Try automatically switching to Goerli
				await switchChain(5);

				if ((await walletInstance.provider.getNetwork()).chainId !== 5)
					throw new Error("Chain switch failed");

				curChain = "Goerli";

			} catch (e) {
				console.log("!nft.contracts[ chain ]", chainId);
				console.log("!nft.contracts[ chain ]", curChain, chainId);

				chainId
					? setPopUpMsg(`Please change your wallet's network to either Goerli or Mumbai.`)
					: setPopUpMsg(`Please connect your wallet to continue.`)

				setChangeOfNetworkRequired(true);
				return;
			}
		}

		setChangeOfNetworkRequired(false);

		// connectedWallet.provider.getNetwork

		const { status, success } = await safeMint({
			connectedWallet: walletInstance,
			walletAddress: walletInstance.address,
			sendTo: walletInstance.address,
			abi: nft.contracts[curChain].abi,
			contract: nft.contracts[curChain].contract,
			chain: curChain,
			name: collectionItem.name,
			imageURI: collectionItem.ipfs,
			description: collectionItem.description,
			tokenUri: collectionItem.metaUrl
		});
		if ( success ) setMintedNFTs( [ ...mintedNFTs, collectionItem.id ] );
		if( status ) setSubmissionStatus( status );
	};

	return (
		<div className={ clsx( styles[ 'c-minter' ], className ) }>
			{ submissionStatus && (
				<div className="grid -g-cols-1">
					<p className={ clsx( styles[ 'c-minter_alert' ], '-mt0 -mb4' ) }>{ submissionStatus }</p>
				</div>
			)}
			<div className="grid -g-cols-3 -mbn6">
				{ nftCollections && nftCollections.map( ( nft, i ) => {
					const { title, description, list } = nft;
					const collectionItem = list[ 0 ];

					let current = i;

					const chain = chainId === 80001 ? '-mumbai' : '-goerli';
					const tokenIsSelected = (
						selectedTokens && selectedTokens[collectionItem.ref + chain] &&
						selectedTokens[collectionItem.ref+chain].tokens.length > 0
					);

					let isMinted = mintedNFTs.indexOf( collectionItem.id ) > -1 || tokenIsSelected;
						
					return (
						<Card Card key = {
							collectionItem.id  + i
						}
						className = "-style-outline -mb6" >
							<Image className={ styles[ 'c-minter_image' ] } src={ collectionItem.imagePath } />
							<Headline className="f5 -mt3 -mb1" type="h2">{ title }</Headline>
								<p className="f7 -mb3">{ description }</p>
							<MinterButton
								className={ clsx( styles[ 'c-minter_button' ], '-mta' , mintButonState[i] && "is_running") }
								onClick={ async event => {
									if (mintButonState[current]) return;

									if (!walletInstance){
										negotiator.ui.openOverlay();
										return;
									}

									let state = [...mintButonState];
									state[current] = true;
									setMintButonState(state);

									await onMintPressed( event, nft, collectionItem );

									state = [...mintButonState];
									state[current] = false;
									setMintButonState(state);

								} }
								isMinted={ isMinted }
								mintMessage = { isMinted ? "" : (mintButonState[current] ? "Minting Your NFT" : "Mint Demo NFT") }

							/>
						</Card>
					);
				})}
				{ walletInstance ?
				<a style={{cursor: "pointer"}} onClick={async () => { try { await switchChain(chainId !== 5 ? 5 : 80001); } catch (e) {/* no-op */}}}>
					Switch to {chainId !== 5 ? "Goerli" : "Mumbai"}
				</a> : ''}
			</div>
			<PopUp closeEvent={onClosePopUpEvent} isOpen={changeOfNetworkRequired} msg={popUpMsg} />
		</div>
	);
};

function MinterButton({ className, onClick, isMinted = false, mintMessage = "" }) {
	return (
		<Button
			onClick={ onClick }
			className={ clsx( className, isMinted ? '-style-primary-light' : '-style-outline' ) }
			icon={ isMinted && 'check' }
			iconPos="before"
		>
			{ isMinted ? ( 'NFT Minted' ) : mintMessage }
		</Button>
	);
}
