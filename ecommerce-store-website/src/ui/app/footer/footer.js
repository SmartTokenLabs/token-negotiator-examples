
//	Dependencies
import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form as FormikForm } from 'formik';
import clsx from 'clsx';
import * as yup from 'yup';

//	App
import { useStore } from 'base/state';
import { Logo, Link, Button, Form, Icon } from 'ui/components';

// Styles
import styles from "./footer.module.scss";


//
//	Brand Connector Demo / UI / Components / Footer
//


const subscribeSchema = yup.object().shape({
	'email': yup.string().email( 'Please enter a valid email' ).required( 'Please enter a value' ),
});

const Footer = React.memo( function Footer({ className }) {
	const api = useStore( s => s.api );
	const isNegotiatorReady = useStore( s => s.isNegotiatorReady );
	const [ isPending, setIsPending ] = useState( false );

	const _handleSubmit = useCallback( async ( values, { setStatus }) => {
		try {
			setIsPending( true );
			const res = await fetch( `/api/register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					...values,
				}),
			}).then( r => r.json() );
			if ( res.error ) throw new Error( res.message );
			setStatus({ success: true });
			api.setContextView( 'register-thanks' );
		} catch ( error ) {
			setStatus({ error: error.message });
		} finally {
			setIsPending( false );
		}
	});

	const renderSocials = ( className ) => {
		return (
			<div className={ clsx( styles[ 'a-footer_main-socials' ], className ) }>
				<Link className="-style-text" ariaLabel="Twitter" href="https://twitter.com/TokenScript" external><Icon type="twitter" /></Link>
				<Link className="-style-text" ariaLabel="Linkedin" href="https://www.linkedin.com/company/alchemynft" external><Icon type="linkedin" /></Link>
				<Link className="-style-text" ariaLabel="Github" href="https://github.com/tokenscript" external><Icon type="github" /></Link>
			</div>
		);
	}

	return (
		<footer className={ clsx( 'section', '-ps', styles[ 'a-footer' ], '-t-dark', className )}>
			<div className="grid -g-cols-1">
				<Formik
					initialValues={{
						'email': '',
					}}
					validationSchema={ subscribeSchema }
					onSubmit={ _handleSubmit }
				>
					{({ errors, touched, status = {}, setStatus }) => (
						<FormikForm>
							<div>
								<div className={ clsx( styles[ 'a-footer_subscribe' ], '-va-center' ) }>
									<h6 className={ clsx( 'f5 -f-family-rubik -f-regular -mr2', { '-o5': isPending } ) }>Subscribe to our mailing list,</h6>
									<div>
										<div className="-va-center">
											<Form.Input
												name="email"
												type="email"
												className={ clsx( '-mb0 -style-underline', styles[ 'a-footer_subscribe-form' ], { '-o5': isPending } ) }
												placeholder="your email address"
												error={ errors.email }
												touched={ touched.email }
												autoComplete="email"
											/>
											<Button ariaLabel="Submit subscribe form" type="submit" className="-style-none" icon="send" iconLoaderSize="m" isLoading={ isPending } />
										</div>

										{ status.error && (
											<div className="-mbn4">
												<div>
													<p className="f8 -color-error">{ status.error }</p>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						</FormikForm>
					)}
				</Formik>
			</div>
			<div className={ clsx( styles[ 'a-footer_main' ], 'grid -g-cols-4 -va-center' ) }>
				<Logo.Small className={ clsx( styles[ 'a-footer_main-logo' ], '-my3' ) } />
				<div className={ clsx( styles[ 'a-footer_main-address' ], 'grid -g-cols-2' ) }>
					<div>
						<address className="f6 -color-text">
							<span className="-f-bold">Australia</span><br/>
							Level 4, 383 George St <br/>
							Sydney NSW 2000 Australia
						</address>
					</div>
					<div>
						<address className="f6 -color-text">
							<span className="-f-bold">Singapore</span><br/>
							16 Raffles Quay,<br/> #33-03, Singapore 048581
						</address>
					</div>
				</div>
				<div className={ clsx( styles[ 'a-footer_main-email_container' ], '-my3' ) }>
					<div className={ clsx( styles[ 'a-footer_main-email' ] ) }>
						<Link className="f6 -f-regular -style-text" href="mailto:sayhi@smarttokenlabs.com">sayhi@smarttokenlabs.com</Link>
					</div>
					<div className="-hide-s">
						{ renderSocials() }
					</div>
				</div>
				<div className="-show-s">
					{ renderSocials() }
				</div>
			</div>
			<div className={ clsx( 'grid -g-cols-1', styles[ 'a-footer_copywrite' ] )}>
				<p className="f7">&copy; 2022 All Rights Reserved | Smart Token Labs</p>
			</div>

			{ isNegotiatorReady && (
				<div className={ clsx( styles[ 'a-footer_activation' ], '-mt3' ) }>
					<div>
						<p className="f7 -va-center -mla">Click to activate discounts <Icon className={ clsx( styles[ 'a-footer_activation_icon' ], '-ml1' ) } type="curved-up-arrow" /></p>
					</div>
				</div>
			)}
		</footer>
	);
});

Footer.propTypes = {
	className: PropTypes.string,
};

export default Footer;