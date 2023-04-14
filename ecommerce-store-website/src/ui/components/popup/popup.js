

//
//	Brand Connector Demo / UI / Components / PopUp
//

import { useStore } from 'base/state';

export default function PopUp({ isOpen, closeEvent, msg }) {	
	return (
		<div>
			{ isOpen &&
				<div style={{
					position: 'absolute',
					top: 0,
					zIndex: '1000',
					width: '100%',
					height: '100%',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center'			
				}}>
					<div style={{
						width: '330px',
						height: '120px',
						background: 'linear-gradient(234.79deg, #001aff 37.73%, #4f95ff 118.69%)',
						borderRadius: '10px',
						padding: '20px 20px 40px 32px',
					}}>
						<p>{msg}</p>
						<button 
							onClick={ e => closeEvent() } 
							style={{ color: 'white', width: '100%' }}
						>
							Close X
						</button>
					</div>
				</div>
			}
		</div>
	);

}
