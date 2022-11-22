
//	Dependencies
import { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';

// App
import { Image, Button, Tag } from 'ui/components';

// Styles
import styles from "./banner.module.scss";


//
//	Brand Connector Demo / UI / Components / Banner
//


export default function Banner({ className, theme, image, headline, text, overlayImage, children, onClick, selectedTokens, authTokens, imageDimensions = [ 100, 100 ], imagePosition = "50% 50%" }) {
	const [ claimed, setClaimed ] = useState( false );

	const [ imageW, imageH ] = imageDimensions;

	const handleOnClick = async () => {
		// TODO: Actually pass the tokens through component
		const issuer = authTokens[0];
		try {
			await window.negotiator.authenticate({
				issuer,
				unsignedToken: selectedTokens[ issuer ].tokens[0],
				options: {
          useRedirect: true,
        }
				//unsignedToken: {name:"some token", desc: "a really cool token"}
			});
			setClaimed( true );
		} catch (e){
			alert(e.message);
			return;
		}

		if ( onClick ) onClick();
	}

	return (
		<div className={ clsx( styles[ 'c-banner' ], className, { [ `-t-${ theme }` ]:theme } ) }>
			{ image && (
				<div className={ styles[ 'c-banner_bg' ] }>
					<Image src={ image } width={ imageW } height={ imageH } objectFit="cover" objectPosition={ imagePosition } layout="fill" />
				</div>
			)}
			<Tag className={ clsx( styles[ 'c-banner_tag' ], 'f9 -f-caps -f-medium -style-square' ) }>NFT Exclusive</Tag>
			{ children ? (
				children
			) : (
				<div className={ clsx( styles[ 'c-banner_content' ], 'grid -g-cols-2' ) }>
					<div>
						<div className="-g-max-4">
							{ headline && (
								typeof headline !== 'string' ? (
									headline
								) : (
									<h2 className="f4 -f-extra-bold">{ headline }</h2>
								)
							)}
						</div>
						<div className="-g-max-3">
							{ text && <p className="f7 -mt0 -mb1">{ text }</p> }
						</div>
						<div className={ styles[ 'c-banner_actions' ] }>
							<Button className="-mt1" onClick={ handleOnClick }>{ claimed ? 'Success!' : 'Claim Now' }</Button>
						</div>
					</div>
					<div className={ styles[ 'c-banner_overlay' ] }>
						<Image className={ styles[ 'c-banner_overlay-image' ] } src={ overlayImage } />
					</div>
				</div>
			)}
		</div>
	);
}

Banner.propTypes = {
	className: PropTypes.string,
	theme: PropTypes.string,
	image: PropTypes.string,
	headline: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.node,
	]),
	text: PropTypes.string,
	children: PropTypes.node,
	onClick: PropTypes.func,
}
