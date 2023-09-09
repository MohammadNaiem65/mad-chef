import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/authProvider/authProvider';
import axiosCustomInstance from '../../axios/axiosCustomInstance';
import Consults from './Consults/Consults';
import Banner from './Banner/Banner';

const UserDashboard = () => {
	// ! Required variables
	const { user } = useContext(AuthContext);
	const [consults, setConsults] = useState([]);

	useEffect(() => {
		const unsub = () => {
			axiosCustomInstance
				.get(`/consult?email=${user.email}`)
				.then((res) => setConsults(res.data));
		};

		unsub();
	}, []);

	return (
		<div className='min-h-[calc(100vh-26.95rem)] relative'>
			{/* Banner */}
			<Banner user={user} consult={consults?.length} />

			<Consults consults={consults} />
		</div>
	);
};

export default UserDashboard;
