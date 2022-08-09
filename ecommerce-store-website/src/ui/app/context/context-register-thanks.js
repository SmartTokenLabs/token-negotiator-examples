
//	Dependencies
import React from 'react';

//	App
import { useStore } from 'base/state';
import { Button } from 'ui/components';


//
//	Brand Connector Demo / UI / Context / Register Thanks
//


function ContextRegisterThanks() {
	const api = useStore( s => s.api );

	return (
		<section>
			<div className="grid -g-cols-1">
				<div>
					<h2 className="f3">Thanks for registering you interest.</h2>
					<p className="f6 -mt0 -mb5 -color-text-light">
						Thanks! You’ll be the first to get exclusive updates about the TokenScript token from the Smart Token Labs team.
					</p>
				</div>
			</div>
			<div className="grid -g-cols-1">
				<div>
					<Button className="-style-secondary" size="m" format="block" disabled={ false } onClick={ () => api.setContextView() }>Close</Button>
				</div>
			</div>
		</section>
	);
}


ContextRegisterThanks.propTypes = {};

export default React.memo( ContextRegisterThanks );
