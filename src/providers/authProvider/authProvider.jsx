import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { ToastContainer } from 'react-toastify';

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
	// ! Required variables
	const auth = getAuth(app);
	const [user, setUser] = useState(null);

	// ! Create user with email
	const createUserWithEmail = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password);

	// * Module scaffolding
	const authInfo = { createUserWithEmail, user, setUser };

	return (
		<AuthContext.Provider value={authInfo}>
			{children}
			<ToastContainer />
		</AuthContext.Provider>
	);
};

export default AuthProvider;
