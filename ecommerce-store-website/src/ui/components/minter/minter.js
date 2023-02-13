// Dependencies
import { useState, useEffect, useContext } from "react";
import clsx from 'clsx';

// App
import { safeMint } from "base/utils/interact.js";
import { Card, Button, Headline, Image, PopUp } from 'ui/components';
import { TokenContext } from "src/providers/TokenContextProvider";
import { useStore } from 'base/state';
import { chainMap } from 'base/utils/network';
import nftDataStore from 'base/nft-data-store';

// Styles
import styles from './minter.module.scss';


//
//	Brand Connector Demo / UI / Components / Minter
//

export default function Minter({ className }) {


	const { wallet: walletInstance, walletStatus, chainId, tokens: selectedTokens } = useContext(TokenContext);

	const [ submissionStatus, setSubmissionStatus ] = useState( '');
	const [ mintedNFTs, setMintedNFTs ] = useState([]);
	const [changeOfNetworkRequired, setChangeOfNetworkRequired] = useState(false);

	const chain = chainMap[chainId] ? chainMap[chainId] : 'unsupported chain: ' + chainId;
	const nftCollections = nftDataStore;

	useEffect( () => {
		if ( submissionStatus && !walletStatus ) setSubmissionStatus( walletStatus );
	}, [ walletStatus ] );

	const onClosePopUpEvent = () => {
		setChangeOfNetworkRequired(false);
	}

	const onMintPressed = async ( event, nft, collectionItem ) => {
		if ( walletStatus ) {
			setSubmissionStatus( walletStatus );
			return;
		}

		if( !nft.contracts[ chain ] ) {
			console.log("!nft.contracts[ chain ]", chainId);
			console.log("!nft.contracts[ chain ]", chain, chainId);
			setChangeOfNetworkRequired(true);
		} else {
			setChangeOfNetworkRequired(false);
			const x = await walletInstance.provider.getNetwork();
			// connectedWallet.provider.getNetwork

			const { status, success } = await safeMint({
				connectedWallet: walletInstance,
				walletAddress: walletInstance.address,
				sendTo: walletInstance.address,
				abi: nft.contracts[chain].abi,
				contract: nft.contracts[chain].contract,
				chain: chain,
				name: collectionItem.name,
				imageURI: collectionItem.ipfs,
				description: collectionItem.description,
				tokenUri: collectionItem.metaUrl
			});
			if ( success ) setMintedNFTs( [ ...mintedNFTs, collectionItem.id ] );
			if( status ) setSubmissionStatus( status );
		}
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

					let tokenIsSelected = false;
					if (typeof ethereum !== "undefined") {
						const chain = ethereum.chainId === '0x13881' ? '-mumbai' : '-goerli';
						tokenIsSelected = (
							selectedTokens && selectedTokens[collectionItem.ref + chain] &&
							selectedTokens[collectionItem.ref+chain].tokens.length > 0
						);
					}
						
					return (
						<Card key={ i } className="-style-outline -mb6">
							<Image className={ styles[ 'c-minter_image' ] } src={ collectionItem.imagePath } />
							<Headline className="f5 -mt3 -mb1" type="h2">{ title }</Headline>
								<p className="f7 -mb3">{ description }</p>
							<MinterButton
								className={ clsx( styles[ 'c-minter_button' ], '-mta' ) }
								onClick={ event => onMintPressed( event, nft, collectionItem ) }
								isMinted={ mintedNFTs.indexOf( collectionItem.id ) > -1 || tokenIsSelected }
							/>
						</Card>
					);
				})}
			</div>
			<PopUp closeEvent={onClosePopUpEvent} isOpen={ changeOfNetworkRequired } />
		</div>
	);
};

function MinterButton({ className, onClick, isMinted = false }) {
	return (
		<Button
			onClick={ onClick }
			className={ clsx( className, isMinted ? '-style-primary-light' : '-style-outline' ) }
			icon={ isMinted && 'check' }
			iconPos="before"
		>
			{ isMinted ? ( 'NFT Minted' ) : ( 'Mint Demo NFT' )}
		</Button>
	);
}
