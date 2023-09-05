import { useContext } from 'react';
import { AuthContext } from '../../providers/authProvider/authProvider';

const UserDashboard = () => {
	// ! Required variables
	const { user } = useContext(AuthContext);

	console.log(user);

	return (
		<div className='min-h-[calc(100vh-26.95rem)]'>
			<h1 className='text-center'>{user.name}</h1>
			<p>email: {user.email}</p>
			<br />
			{user.favorites.map((favorite) => (
				<p key={favorite}>{favorite}</p>
			))}
		</div>
	);
};

export default UserDashboard;
