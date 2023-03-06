

//
//	Brand Connector Demo / UI / Components / PopUp
//

import styles from "./toast.module.scss";
import clsx from 'clsx';

export default function Toast({ className, isOpen, msg }) {	
	return (
		<div>
			{ isOpen &&
				<div
				  className={ clsx( styles[ 'toast' ], className ) }
					style={{
					transition: 'all 0.2s',
					transitionDelay: '1s',
					opacity: '1',
					position: 'fixed',
					top: 0,
					zIndex: '1000',
					width: '100%',
					minHeight: '30px',
					background: '#ff8c90',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}>
					<div style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						maxWidth: '80%',
						color: 'black'
					}}>
						<div>
					</div>
					<div>{msg}</div>
					</div>
				</div>
			}
		</div>
	);

}
