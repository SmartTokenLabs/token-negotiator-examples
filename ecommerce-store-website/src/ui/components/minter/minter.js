// Dependencies
import { useState, useEffect } from "react";
import clsx from 'clsx';

// App
import { useCurrentWallet } from 'ui/hooks';
import { safeMint } from "base/utils/interact.js";
import { Card, Button, Headline, Image, PopUp } from 'ui/components';
import { useStore } from 'base/state';
import nftDataStore from 'base/nft-data-store';
// Styles
import styles from './minter.module.scss';

//
//	Brand Connector Demo / UI / Components / Minter
//

export default function Minter({ className }) {

	const [ submissionStatus, setSubmissionStatus ] = useState( '' );
	const [ warningText, setWarningText ] = useState( "Please change your wallet's network to either Goerli or Mumbai" );
	const [ mintedNFTs, setMintedNFTs ] = useState( [] );
	const [changeOfNetworkRequired, setChangeOfNetworkRequired] = useState(false);
	const selectedTokens = useStore( s => s.selectedTokens );
	
	const onClosePopUpEvent = () => {
		
		setChangeOfNetworkRequired(false);

	}

	const onMintPressed = async ( event, nft, collectionItem ) => {

		const [ walletAddress, nftCollections, chain, status, walletProvider ] = useCurrentWallet();

		if(walletAddress && nft.contracts[ chain ]) {

			setChangeOfNetworkRequired(false);

			const { status, success } = await safeMint({
				walletAddress,
				sendTo: walletAddress,
				abi: nft.contracts[ chain ].abi,
				contract: nft.contracts[ chain ].contract,
				chain: chain,
				name: collectionItem.name,
				imageURI: collectionItem.ipfs,
				description: collectionItem.description,
				tokenUri: collectionItem.metaUrl,
				walletProvider
			});
			if ( success ) { 
				setMintedNFTs( [ ...mintedNFTs, collectionItem.id ] );
			}
			setSubmissionStatus( status );

		} else {

			if(walletAddress && !nft.contracts[ chain ] ) setChangeOfNetworkRequired(true);

			setSubmissionStatus( "Please Connect your wallet with Brand Connector to continue." );

			window.negotiator.negotiate();

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
				{ nftDataStore && nftDataStore.map( ( nft, i ) => {
					const { title, description, list } = nft;
					const collectionItem = list[ 0 ];

					let tokenIsSelected = false;
					if (typeof ethereum !== "undefined") {
						const chain = ethereum.chainId === '0x13881' ? '-mumbai' : '-goerli';
						tokenIsSelected = (
							selectedTokens && selectedTokens[collectionItem.ref+chain] &&
							selectedTokens[collectionItem.ref+chain].tokens &&
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
								// isMinted={ mintedNFTs.indexOf( collectionItem.id ) > -1 || tokenIsSelected }
								isMinted={ false }
							/>
						</Card>
					);
				})}
			</div>
			<PopUp closeEvent={onClosePopUpEvent} isOpen={ changeOfNetworkRequired } txt={warningText} />
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
