import * as firebase from 'firebase';

export const firebaseConfig = {
	apiKey: `${process.env.NEXT_PUBLIC_WEB_API_KEY}`,
	authDomain: 'fair-share-food.firebaseapp.com',
	databaseURL: 'https://fair-share-food.firebaseio.com',
	projectId: 'fair-share-food',
	storageBucket: 'fair-share-food.appspot.com',
	messagingSenderId: '213732880280',
	appId: '1:213732880280:web:13a0bdb054793e7350c5ed',
	measurementId: 'G-E0CWJNZ5Z6',
};

export const initFirebase = () => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
};
