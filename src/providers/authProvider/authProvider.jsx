import { createContext, useEffect, useState } from 'react';
import {
	FacebookAuthProvider,
	GithubAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer } from 'react-toastify';
import getFavoritesFromDB from '../../customHooks/getFavoritesFromDB';
import showError from '../../customHooks/showError';
import notify from '../../customHooks/notify';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
	// ! Required variables
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
	const facebookProvider = new FacebookAuthProvider();
	const githubProvider = new GithubAuthProvider();
	const [user, setUser] = useState(null);
	const [showLoader, setShowLoader] = useState(true);

	// ! Create user
	const createUserWithEmail = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const createUserWithGoogle = () => signInWithPopup(auth, googleProvider);

	const createUserWithFacebook = () =>
		signInWithPopup(auth, facebookProvider);

	const createUserWithGithub = () => signInWithPopup(auth, githubProvider);

	// ! Login user
	const logInUserWithEmail = (email, password) =>
		signInWithEmailAndPassword(auth, email, password);

	// ! Log out user
	const logOutUser = () => {
		setShowLoader(true)
		signOut(auth)
			.then(() => {
				setShowLoader(false);
				setUser(null);
				notify('success', 'Logged out successfully!');
			})
			.catch((error) => showError(error));
	};

	// ! Get user data
	useEffect(() => {
		setShowLoader(true);
		onAuthStateChanged(auth, (existedUser) => {
			if (existedUser) {
				getFavoritesFromDB(existedUser.email)
					.then((favorites) => {
						const userData = {
							name: existedUser.displayName,
							email: existedUser.email,
							favorites: favorites,
						};
						setUser(userData);
						setShowLoader(false);
					})
					.catch((error) => {
						showError(error);
						setShowLoader(false);
					});
			} else {
				setShowLoader(false);
			}
		});
	}, []);

	// * Module scaffolding
	const authInfo = {
		user,
		setUser,
		showLoader,
		setShowLoader,
		createUserWithEmail,
		createUserWithGoogle,
		createUserWithFacebook,
		createUserWithGithub,
		logInUserWithEmail,
		logOutUser,
	};

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
			<ToastContainer />
		</AuthContext.Provider>
	);
};

export default AuthProvider;
