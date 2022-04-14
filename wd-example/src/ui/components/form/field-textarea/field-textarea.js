
//	Dependencies
import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import clsx from 'clsx';

//	App
import { VisuallyHidden } from 'ui/components';

//	Styles
import styles from "./field-textarea.module.scss";
import fieldStyles from "../field.module.scss";


//
//	TokenScript / UI / Components / Form / Field Textarea
//


export default function FieldTextarea( props ) {
	const {
		className, name, placeholder, label, touched,
		disabled, readOnly, hideLabel, error, value,
		useFormik, rows,
	} = props;

	let fieldProps = {};
	const isError = useFormik ? error && touched : error;
	if ( useFormik ) {
		[ fieldProps ] = useField( props );
	} else {
		fieldProps = { value };
	}

	return (
		<div className={ clsx( fieldStyles[ 'c-field' ], styles[ 'c-field-textarea' ], className, { '-is-error': isError }) }>
			<label className="label">
				{ hideLabel ? (
					<VisuallyHidden>{ label }</VisuallyHidden>
				) : (
					label && <span className="f8">{ label }</span>
				)}
				<textarea
					name={ name }
					rows={ rows }
					placeholder={ placeholder }
					disabled={ disabled }
					readOnly={ readOnly }
					aria-describedby={ isError && `${ name }-message` }
					aria-invalid={ !!isError }
					{ ...fieldProps }
				/>
			</label>
			{ isError && (
				<div id={ `${ name }-message` } role="alert"  className={ clsx( fieldStyles[ 'c-field_message' ] ) }>
					{ error }
				</div>
			)}
		</div>
	);
}

FieldTextarea.propTypes = {
	className: PropTypes.string,
	name: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	label: PropTypes.string,
	helper: PropTypes.string,
	disabled: PropTypes.bool,
	readOnly: PropTypes.bool,
	hideLabel: PropTypes.bool,
	error: PropTypes.string,
	value: PropTypes.string,
	useFormik: PropTypes.bool,
	rows: PropTypes.number,
	touhed: PropTypes.bool,
};

FieldTextarea.defaultProps = {
	useFormik: true,
	rows: 3,
	name: 'textarea',
};
