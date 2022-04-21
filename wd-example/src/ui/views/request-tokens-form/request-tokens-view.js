
// App
import clsx from 'clsx';
import { Page } from 'ui/app';
import { Formik, Form as FormikForm } from 'formik';
import * as yup from 'yup';

//	App
import { Button, Form, Icon, Link } from 'ui/components';

//	Styles
import styles from "./request-tokens-view.module.scss";


//
//	TokenScript / UI / Views / Request Tokens View
//

const validationSchema = yup.object().shape({
	'name': yup.string().required( '*Required' ),
	'email': yup.string().email( 'Please enter a valid email' ).required( '*Required' ),
	'company': yup.string().required( '*Required' ),
	'network': yup.string().required( '*Required' ),
	'walletAddress': yup.string().required( '*Required' ),
	'comments': yup.string().required( '*Required' ),
});

export default function RequestTokensView() {
	const meta = {
		title: 'Request Test Tokens | TokenScript',
		ogTitle: 'Request Test Tokens | TokenScript',
	};


	const _onSubmitHandler = async ( values, formikProps ) => {
		try {
			formikProps.setStatus({ success: true });
		} catch ( error ) {
			console.log( 'error', error );
			formikProps.setStatus({ error: error.message });
		}
	};

	return (
		<Page className={ styles[ 'v-request-tokens' ] } meta={ meta }>
			<section className="section">
				<div className="grid -g-cols-1">
					<div className="-g-max-7 -s:g-max-none -a-center -mxa">
						<h1>Request Test Tokens</h1>
						<p className="-mt0 -mb6">Do you need tokens to try Token Negotiator youself? Let us know.</p>
					</div>
				</div>
				<Formik
					initialValues={{
						'name': '',
						'email': '',
						'company': '',
						'network': '',
						'walletAddress': '',
						'comments': '',
					}}
					validationSchema={ validationSchema }
					onSubmit={ _onSubmitHandler }
				>
					{({ errors, touched, status = {}}) => (
						<FormikForm>
							<div className="grid -g-cols-1">
								<div className="-g-max-6 -s:g-max-none -mxa">
									<Form.Input
										label="Your Name"
										hideLabel={ true }
										placeholder="Your Name*"
										name="name"
										error={ errors.name }
										touched={ touched.name }
									/>
									<Form.Input
										label="Email"
										hideLabel={ true }
										placeholder="Email*"
										name="email"
										error={ errors.email }
										touched={ touched.email }
									/>
									<Form.Input
										label="Company"
										hideLabel={ true }
										placeholder="Company*"
										name="company"
										error={ errors.company }
										touched={ touched.company }
									/>
									<p className="-mt1">Select the preferable network you want to receive tokens on</p>
									<Form.RadioGroup className="-mb4" error={ errors.network }>
										<Form.Radio
											label="Rinkeby Network"
											name="network"
											value="rinkeby_network"
										/>
										<Form.Radio
											label="Mumbai Network"
											name="network"
											value="mumbai_network"
										/>
									</Form.RadioGroup>
									<Form.Input
										label="Wallet Address"
										hideLabel={ true }
										placeholder="Wallet Address*"
										name="walletAddress"
										useFormik={ false }
										error={ errors.walletAddress }
										touched={ touched.walletAddress }
									/>
									<Form.Textarea
										label="Comments"
										hideLabel={ true }
										placeholder="Comments… (optional)"
										name="comments"
										error={ errors.comments }
										touched={ touched.comments }
									/>
									<Button format="block" size="l" type="submit" isLoading={ false }>Request Test Tokens</Button>
								</div>
							</div>
						</FormikForm>
					)}
				</Formik>
			</section>
			<section className="section -pt0">
				<div className={ clsx( 'grid -g-cols-2', styles[ 'v-request-tokens_footer' ] ) }>
					<Link className={ clsx( 'f6 -style-text -my0', styles[ 'v-request-tokens_footer-link' ] ) } href="mailto:sayhi@smarttokenlabs.com">
						<Icon className="-mxa" type="mail" size="l" />
						<span className="-my1">sayhi@smarttokenlabs.com</span>
					</Link>
					<div className='-a-center'>
						<div className={ clsx( '-mxa', styles[ 'v-request-tokens_icon-group' ] ) }>
							<Link href="https://twitter.com/TokenScript">
								<Icon className={ clsx( styles[ 'v-request-tokens_icon' ], styles[ 'v-request-tokens_icon-twitter' ] ) } type="twitter" />
							</Link>
							<Link href="https://t.me/+xowiW4U-3nozMTk1">
								<Icon className={ clsx( styles[ 'v-request-tokens_icon' ], styles[ 'v-request-tokens_icon-telegram' ] ) } type="telegram" />
							</Link>
							<Link href="https://discord.gg/tx9a5WHYy9">
								<Icon className={ clsx( styles[ 'v-request-tokens_icon' ], styles[ 'v-request-tokens_icon-discord' ] ) } type="discord" />
							</Link>
							<Link href="https://au.linkedin.com/company/smart-token-labs">
								<Icon className={ clsx( styles[ 'v-request-tokens_icon' ], styles[ 'v-request-tokens_icon-linkedin' ] ) } type="linkedin" />
							</Link>
						</div>
						<p className="f6">Find us on</p>
					</div>
					{/*<Link className={ clsx( 'f6 -style-text -my0', styles[ 'v-request-tokens_footer-link' ] ) }  href="tel:+48662192244">
						<Icon className="-mxa" type="phone" size="l" />
						<span className="-my1">(Australia) +48 662 192 244</span>
					</Link>*/}
				</div>
			</section>
		</Page>
	);
}
