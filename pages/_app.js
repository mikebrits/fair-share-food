import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
// import { FirebaseAuthProvider } from '@react-firebase/auth';
import { firebaseConfig } from '../firebase/config';

// firebase.initializeApp(firebaseConfig);

const theme = {
	colors: {
		primary: '#0070f3',
	},
};

export default class MyApp extends App {
	render() {
		console.log('api key', process.env.NEXT_PUBLIC_WEB_API_KEY);
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
