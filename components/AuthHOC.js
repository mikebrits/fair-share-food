import React, { useEffect, useState } from 'react';
import * as firebase from 'firebase';

export const requiresAuth = (Page) => ({ ...props }) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);
	const [user, setUser] = useState(null);
	useEffect(() => {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				setUser(user);
				setLoggedIn(true);
				setLoading(false);
			} else {
				setLoading(false);
			}
		});
	}, []);
	if (loading) return <>Loading...</>;
	if (loggedIn) return <Page {...props} user={user} />;
	return <h1>Please Login</h1>;
};
