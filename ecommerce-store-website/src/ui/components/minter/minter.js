// Dependencies
import { useState, useEffect } from "react";
import clsx from 'clsx';

// App
import { useCurrentWallet } from 'ui/hooks';
import { safeMint } from "base/utils/interact.js";
import { Card, Button, Headline, Image, PopUp } from 'ui/components';
import { useStore } from 'base/state';

// Styles
import styles from './minter.module.scss';


//
//	Brand Connector Demo / UI / Components / Minter
//

export default function Minter({ className }) {

	const [ walletAddress, nftCollections, chain, walletStatus, walletInstance ] = useCurrentWallet();
	const [ submissionStatus, setSubmissionStatus ] = useState( '' );
	const [ mintedNFTs, setMintedNFTs ] = useState( [] );
	const [changeOfNetworkRequired, setChangeOfNetworkRequired] = useState(false);
	const selectedTokens = useStore( s => s.selectedTokens );

	useEffect( () => {
		if ( submissionStatus && !walletStatus ) setSubmissionStatus( walletStatus );
	}, [ walletStatus ] );

	const onClosePopUpEvent = () => {
		
		setChangeOfNetworkRequired(false);

	}

	const onMintPressed = async ( event, nft, collectionItem ) => {

		if ( !walletAddress && window?.negotiator ) window.negotiator.negotiate();

		if ( walletStatus ) {
			setSubmissionStatus( walletStatus );
			return;
		}

		if( !nft.contracts[ chain ] ) {

			setChangeOfNetworkRequired(true);

		} else {

			setChangeOfNetworkRequired(false);

			const x = await walletInstance.provider.getNetwork();
			// connectedWallet.provider.getNetwork

			const { status, success } = await safeMint({
				connectedWallet: walletInstance,
				walletAddress: walletAddress,
				sendTo: walletAddress,
				abi: nft.contracts[ chain ].abi,
				contract: nft.contracts[ chain ].contract,
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
							selectedTokens && selectedTokens[collectionItem.ref+chain] &&
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
								isMinted={ false }
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
