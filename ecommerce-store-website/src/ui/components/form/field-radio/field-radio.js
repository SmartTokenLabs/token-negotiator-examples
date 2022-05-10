
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import clsx from 'clsx';

// App
import { Icon, VisuallyHidden } from 'ui/components';

//	Styles
import styles from "./field-radio.module.scss";
import fieldStyles from "../field.module.scss";


//
//	TokenScript / UI / Components / Form / Field Radio
//


export function RadioGroup( props ) {
	const { className, ariaLabel, children, error, format } = props;
	const formatClass = { [`-format-${ format }`]: format };

	return (
		<div role="group" aria-label={ ariaLabel } className={ clsx( fieldStyles[ 'c-field' ], styles[ 'c-field-radio-group' ], className, formatClass ) }>

				{ children && children }

			{ error && (
				<div role="alert"  className={ clsx( fieldStyles[ 'c-field_message' ], styles[ 'c-field-radio_error' ] ) }>
					{ error }
				</div>
			)}
		</div>
	);
}

export default function FieldRadio( props ) {
	const {
		className, name, label, value, size, icon, hideLabel,
		format, imgSrc, imgStyle, imgAlt, checked, disabled,
		useFormik, onChange,
	} = props;

	let fieldProps = { name, value, onChange, checked };
	if ( useFormik ) [ fieldProps ] = useField({ name, value, type: 'radio' });

	const _hasImage = !!imgSrc;
	const _format = format ?? _hasImage ? 'image' : null;

	const checkedClass = { '-is-checked': fieldProps?.checked };
	const disabledClass = { '-is-disabled': disabled };
	const formatClass = { [`-format-${ _format }`]: _format };
	const sizeClass = { [`-size-${ size }`]: size };
	const classes = clsx( fieldStyles[ 'c-field' ], styles[ 'c-field-radio' ], className, formatClass, sizeClass, checkedClass, disabledClass );

	const rootProps = {
		..._hasImage && { role: 'img', 'aria-label': imgAlt, style: {
			'backgroundImage': `url(${ imgSrc })`,
			...imgStyle,
		}},
	};

	return (
		<div className={ classes }>
			<label>
				<div className={ styles[ 'c-field-radio_root' ] } { ...rootProps }>
					<input type="radio"
						disabled={ disabled }
						{ ...fieldProps }
					/>
					<div className={ styles[ 'c-field-radio_root-ui' ] }>
						{ icon && <Icon type={ icon } size="xs" /> }
					</div>
					{ disabled && <span className={ styles[ 'c-field-radio_root-disabled' ] } /> }
				</div>
				{ hideLabel ? (
					<VisuallyHidden>{ label }</VisuallyHidden>
				) : (
					label && <span className={ styles[ 'c-field-radio_label' ] }>{ label }</span>
				) }
			</label>
		</div>
	);
}

RadioGroup.propTypes = {
	ariaLabel: PropTypes.string,
	className: PropTypes.string,
	defaultChecked: PropTypes.string,
	children: PropTypes.node,
	onChange: PropTypes.func,
	error: PropTypes.string,
};

FieldRadio.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	label: PropTypes.node,
	disabled: PropTypes.bool,
	useFormik: PropTypes.bool,
	format: PropTypes.string,
	imgSrc: PropTypes.string,
	imgStyle: PropTypes.object,
	imgAlt: PropTypes.string,
	value: PropTypes.string.isRequired,
	selected: PropTypes.string,
	handleChange: PropTypes.func,
	hideLabel: PropTypes.bool,
	size: PropTypes.string,
};

FieldRadio.defaultProps = {
	useFormik: true,
	selected: '',
	name: 'radio',
};
