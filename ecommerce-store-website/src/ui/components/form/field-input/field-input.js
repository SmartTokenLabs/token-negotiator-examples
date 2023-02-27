
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import clsx from 'clsx';

//	App
import { VisuallyHidden } from 'ui/components';

//	Styles
import styles from "./field-input.module.scss";
import fieldStyles from "../field.module.scss";


//
//	Brand Connector Demo / UI / Components / Form / Field Input
//


export default function FieldInput( props ) {
	const {
		className, name, type, placeholder, label, size,
		disabled, readOnly, hideLabel, error, value,
		useFormik, autoComplete, touched,
	} = props;

	let fieldProps = {};
	let fieldMeta = {};
	if ( useFormik ) {
		[ fieldProps, fieldMeta ] = useField( props );
	} else {
		fieldProps = {
			value,
			...props.onChange && { onChange: props.onChange },
		};
		fieldMeta = {
			error,
			touched,
		};
	}

	const sizeClass = { [ `-size-${ size }` ]: size };
	const inputClasses = clsx( 'input', sizeClass );
	const isError = fieldMeta?.error && ( useFormik ? fieldMeta?.touched : true );

	return (
		<div className={ clsx( className, fieldStyles[ 'c-field' ], styles[ 'c-field-input' ] ) }>
			<label className="label">
				{ hideLabel ? (
					<VisuallyHidden>{ label }</VisuallyHidden>
				) : (
					label && <span className="f8">{ label }</span>
				)}
				<input
					name={ name }
					className={ inputClasses }
					type={ type }
					placeholder={ placeholder }
					disabled={ disabled }
					readOnly={ readOnly }
					autoComplete={ autoComplete }
					aria-describedby={ isError && `${ name }-message` }
					aria-invalid={ !!isError }
					{ ...fieldProps }
				/>
			</label>
			{ isError && (
				<div id={ `${ name }-message` } role="alert" className={ fieldStyles[ 'c-field_message' ] }>
					{ fieldMeta.error }
				</div>
			)}
		</div>
	);
}

FieldInput.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	type: PropTypes.string,
	size: PropTypes.string,
	placeholder: PropTypes.string,
	label: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object,
	]),
	error: PropTypes.string,
	helper: PropTypes.string,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	hideLabel: PropTypes.bool,
	autoComplete: PropTypes.string,
	useFormik: PropTypes.bool,
	touhed: PropTypes.bool,
};

FieldInput.defaultProps = {
	type: 'text',
	useFormik: true,
	name: 'input',
};
