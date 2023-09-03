import { createContext, useState } from 'react';
import {
	FacebookAuthProvider,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	signInWithPopup,
} from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer } from 'react-toastify';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
	// ! Required variables
	const auth = getAuth(app);
	const googleProvider = new GoogleAuthProvider();
	const facebookProvider = new FacebookAuthProvider();
	const [user, setUser] = useState(null);

	// ! Create user
	const createUserWithEmail = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	const createUserWithGoogle = () => signInWithPopup(auth, googleProvider);

	const createUserWithFacebook = () =>
		signInWithPopup(auth, facebookProvider);

	// * Module scaffolding
	const authInfo = {
		user,
		setUser,
		createUserWithEmail,
		createUserWithGoogle,
		createUserWithFacebook,
	};

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
			<ToastContainer />
		</AuthContext.Provider>
	);
};

export default AuthProvider;
