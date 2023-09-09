import axiosCustomInstance from '../axios/axiosCustomInstance';
import notify from './notify';

export default function postUserDataToDB(email, name, setUser, navigate) {
	const newUser = {
		email,
		favorites: [],
	};
	axiosCustomInstance.post('/users/user', newUser).then((res) => {
		if (res.data.insertedId.length) {
			const user = {
				...newUser,
				name,
			};
			setUser(user);
			notify('success', 'Account created successfully!');
			navigate('/');
		} else {
			notify('error', 'Something went wrong!');
		}
	});
}
