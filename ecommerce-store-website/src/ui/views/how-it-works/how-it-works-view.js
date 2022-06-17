
// Dependencies
import clsx from 'clsx';

// App
import { Page } from 'ui/app';
import { Link, Image, Button } from 'ui/components';

//	Styles
import styles from "./how-it-works-view.module.scss";

import imgConnectWalletGraphic from "../../../../public/images/connect-wallet-graphic.jpg";
import imgNetworkSwitchGraphic from "../../../../public/images/network-switch-graphic.jpg";
import imgToggleTokensGraphic from "../../../../public/images/toggle-tokens-graphic.jpg";
import imgRequestTokenGraphic from "../../../../public/images/request-token-graphic.jpg";

//
//	TokenScript / UI / Views / How It Works
//


export default function HowItWorksView() {
	const meta = {
		title: 'How it works | TokenScript',
		ogTitle: 'How it works | TokenScript',
	};

	return (
		<Page className={ styles[ 'v-how-it-works' ] } meta={ meta }>
			<section className="section">
				<div className="grid -g-cols-1 -a-center">
					<h2 className="-mb6">Brand Connector Product Demo</h2>
					<h3 className="-mb6">How it works?</h3>
				</div>
				<div>
					<div className={ clsx( 'grid -g-cols-2', styles[ 'v-how-it-works_step' ] ) }>
						<Image src={imgRequestTokenGraphic} />
						<div>
							<h2 className="f3">1/ Request Test Tokens</h2>
							<p>To try Token Negotiator, you need to have the Metamask extension installed and <Link href="/request-tokens">Request Rinkeby/Mumbai tokens from us.</Link></p>
						</div>
					</div>
					<div className={ clsx( 'grid -g-cols-2', styles[ 'v-how-it-works_step' ] ) }>
						<Image src={imgConnectWalletGraphic} />
						<div>
							<h2 className="f3">2/ Connect to Wallet</h2>
							<p>Click the icon in the bottom right corner. Then, connect your wallet to the Token Negotiator Demo.</p>
						</div>
					</div>
					<div className={ clsx( 'grid -g-cols-2', styles[ 'v-how-it-works_step' ] ) }>
						<Image src={imgNetworkSwitchGraphic} />
						<div>
							<h2 className="f3">3/ Switch to Rinkeby or Mumbai Network</h2>
							<p>After you receive NFT tokens from us, make sure you switch to Rinkeby Test Network or Mumbai Network in your wallet.</p>
						</div>
					</div>
					<div className={ clsx( 'grid -g-cols-2', styles[ 'v-how-it-works_step' ] ) }>
						<Image src={imgToggleTokensGraphic} />
						<div>
							<h2 className="f3">4/ Toggle on Tokens</h2>
							<p>Now, open any sample projects from the top (Fashion, Car, Music) and play with Token Negotiator. Enjoy!</p>
						</div>
					</div>
				</div>
				<div className="grid -g-cols-1">
					<div className="-g-max-6 -s:g-max-none -mxa -a-center">
						<h3 className="f1 -mt0">Request Test Tokens</h3>
						<p className="-mt0 -mb4 -px2">Do you need test tokens to try Token Negotiator youself? Get them now.</p>
						<Button className="-mxa" element="a" size="l" href="/request-tokens">Request Test Tokens</Button>
					</div>
				</div>
			</section>
		</Page>
	);
}
