import { useContext } from 'react';
import { AuthContext } from '../../providers/authProvider/authProvider';
import { Navigate, useLocation } from 'react-router-dom';
import notify from '../../customHooks/notify';

export default function PrivateRoute({ children }) {
	const { user, showLoader } = useContext(AuthContext);
	const location = useLocation();

	if (showLoader) {
		return;
	} else if (!showLoader && user) {
		return children;
	} else if (!showLoader && !user) {
		notify('info', 'Please login to see details');
		return <Navigate to='/login' state={{ from: location }} />;
	}
}
