import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import { initFirebase } from '../firebase/config';

initFirebase();

const theme = {
	colors: {
		primary: '#0070f3',
	},
};

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<ThemeProvider theme={theme}>
				{/*<FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>*/}
				<Component {...pageProps} />
				{/*</FirebaseAuthProvider>*/}
			</ThemeProvider>
		);
	}
}
