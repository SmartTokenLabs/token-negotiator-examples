
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { animated as a } from '@react-spring/web';
import clsx from 'clsx';
import _invoke from 'lodash-es/invoke';

//	App
import { Button, Logo } from 'ui/components';

// Styles
import styles from "./context.module.scss";


//
//	Brand Connector Demo / UI / App / Context
//


const Context = React.forwardRef( ( props, ref ) => {
	const {
		children, className, style,
		theme, title, isLoading,
		isClosable = true,
		onClose,
		...restProps
	} = props;
	const themeClass = theme && `-t-${ theme.toLowerCase() }`;

	const _showClose = isClosable && onClose;

	const contextStyle = {
		...style,
		transform: _invoke( style, 'y.to', y => `translate3d(0,${ y * -0.1 }%,0)` ),
	};

	return (
		<a.div { ...restProps } className={ clsx( styles[ 'a-context' ], themeClass, className ) } tab-index="-1" ref={ ref } style={ contextStyle }>
			<header className={ clsx( styles[ 'a-context_header' ]) }>
				<div className="grid -g-cols-1 -t-light">
					<div>
						<div className={ styles[ 'a-context_header_logo-container' ]}>
							<Logo.Small className="-color-primary" />
						</div>
						{ _showClose && <Button className={ clsx( styles[ 'a-context_header_close' ], '-style-none' )} ariaLabel="Close" icon="cross" size="s" iconSize="m" onClick={ onClose } /> }
					</div>
				</div>
			</header>
			{ children && children }
		</a.div>
	);
});

Context.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	style: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	theme: PropTypes.string,
	onClose: PropTypes.func,
};

export default React.memo( Context );
