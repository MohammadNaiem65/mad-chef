import { useContext } from 'react';
import { AuthContext } from '../../providers/authProvider/authProvider';
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ children }) {
	const { user, showLoader } = useContext(AuthContext);
	const location = useLocation();

	if (showLoader) {
		return;
	} else if (!showLoader && user) {
		return children;
	} else {
		return <Navigate to='/login' state={{ from: location }} />;
	}
}
