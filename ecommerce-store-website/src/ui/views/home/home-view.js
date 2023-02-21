
// Dependencies
import clsx from 'clsx';

// App
import React, { useState, useRef, useEffect, useContext } from "react";
import { Page } from 'ui/app';
import { Headline, Link, Minter, Image, Tag, Toast } from 'ui/components';
import { Demos } from 'ui/sections';
import { chainMap } from "./../../../../src/base/utils/network";
import { TokenContext } from "src/providers/TokenContextProvider";

//	Styles
import styles from "./home-view.module.scss";

//
//	Brand Connector Demo / UI / Views / Home
//

export default function HomeView(props) {		

	const { wallet } = useContext(TokenContext);

	let showNetworkNotification = false;
	
	const normalisedNetworkId = wallet ? chainMap[wallet.chainId] : undefined;
	
	switch (normalisedNetworkId) {
		case "Goerli":
		case "Mumbai":
			showNetworkNotification = false;
			break;
		default:
			showNetworkNotification = true;
			break;
	}

	return (
		<Page className={ styles[ 'v-home' ] }>

			<Toast isOpen={ showNetworkNotification } msg={ "Please connect to Goerli or Mumbai network" } />

			<section className="section -ps">
				<div className="grid -g-cols-1">
					<div className="-g-max-8">
						<Headline className="-mb6">Try The Product Demo</Headline>
					</div>
				</div>
			</section>
			
			<section className="section -pt0">
				<div className="grid -g-cols-4 -mbn6">
					<div className={ clsx( styles[ 'v-home_steps' ], '-va-center -mb6' ) }>
						<Image className={ styles[ 'v-home_steps-image' ] } src="/images/fox.png" height={ 210 } width={ 210 } />
						<Tag size="s" className="f8 -mxa -style-muted">1</Tag>
						<Headline className="f5 -mb0" type="h2">Get Metamask</Headline>
						<p>Download and setup the <Link href="https://metamask.io/download/" external={ true }>Metamask extension</Link></p>
					</div>
					<div className={ clsx( styles[ 'v-home_steps' ], '-va-center -mb6' ) }>
						<Image className={ styles[ 'v-home_steps-image' ] } src="/images/test-tokens-bundle.png" height={ 226 } width={ 388 } />
						<Tag size="s" className="f8 -mxa -style-muted">2</Tag>
						<Headline className="f5 -mb0" type="h2">Request Test Tokens</Headline>
						<p>Connect your wallet, switch to Goerli or Mumbai testnet and request tokens from us.</p>
					</div>
					<div className={ clsx( styles[ 'v-home_steps' ], '-va-center -mb6' ) }>
						<Image className={ styles[ 'v-home_steps-image' ] } src="/images/demo-shop-bundle.png" height={ 160 } width={ 336 } />
						<Tag size="s" className="f8 -mxa -style-muted">3</Tag>
						<Headline className="f5 -mb0" type="h2">Try A Demo Shop</Headline>
						<p>Select and visit one of our example shops. Each Token will let you try a different benefit.</p>
					</div>
					<div className={ clsx( styles[ 'v-home_steps' ], '-va-center -mb6' ) }>
						<Image className={ styles[ 'v-home_steps-image' ] } src="/images/activate.png" height={ 244 } width={ 296 } />
						<Tag size="s" className="f8 -mxa -style-muted">4</Tag>
						<Headline className="f5 -mb0" type="h2">Connect & Activate</Headline>
						<p>Click the BrandConnector module in the bottom-right corner, connect & toggle any test tokens.</p>
					</div>
				</div>
			</section>

			<div className="grid -g-cols-1">
				<hr />
			</div>

			<section className="section">
				<div className="grid -g-cols-1 -mb4">
					<div className="-g-max-7">
						<Tag className="f8 -f-caps -f-medium -mt0 -style-primary-faded">Step 2</Tag>
						<Headline className="f1" type="h2">Request Test NFTs</Headline>
						<p className="-color-headline">Mint the test NFTs with Goerli or Mumbai to try it out. Each works with a different shop. With Brand Connector, you can setup any benefit you’d like.</p>
					</div>
				</div>
				<Minter />
			</section>

			<div className="grid -g-cols-1">
				<hr />
			</div>

			<Demos
				headline={
					<div className="grid -g-cols-1 -mb4">
						<div className="-g-max-7">
							<Tag className="f8 -f-caps -f-medium -mt0 -style-primary-faded">Step 3</Tag>
							<Headline className="f1" type="h2">Select A Demo Shop</Headline>
						</div>
					</div>
				}
			/>
		</Page>
	);
}
