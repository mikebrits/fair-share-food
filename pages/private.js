import React from 'react';
import * as firebase from 'firebase';

const Private = () => {
	return <h1>Private</h1>;
};

const requiresAuth = (Page) => ({ isLoggedIn, ...props }) => {
	if (isLoggedIn) return <Page {...props} />;
	return <h1>Please Login</h1>;
};

export const getServerSideProps = async (ctx) => {
	const isLoggedIn = await new Promise((resolve, reject) => {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				resolve(true);
			} else {
				resolve(false);
			}
		});
	});

	console.log({ isLoggedIn });

	return {
		props: {
			isLoggedIn,
		},
	};
};

export default requiresAuth(Private);

// export default ((AuthPage) => (ctx) => {
// 	return AuthPage;
// })(Private);
