import { useContext } from 'react';
import { AuthContext } from '../../providers/authProvider/authProvider';
import Banner from './Banner/Banner';

const UserDashboard = () => {
	// ! Required variables
	const { user } = useContext(AuthContext);
	

	console.log(user);
	return (
		<div className='min-h-[calc(100vh-26.95rem)] relative'>
			{/* Banner */}
			<Banner user={user} />

			{/* Gradient background */}
			<div className='top-20 -bottom-20 left-0 right-0 absolute -z-10 bg-gradient-to-b from-transparent via-Primary/60 to-Primary/60'></div>
		</div>
	);
};

export default UserDashboard;
