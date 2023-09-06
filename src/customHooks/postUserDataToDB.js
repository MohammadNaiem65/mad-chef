import notify from './notify';

export default function postUserDataToDB(email, name, setUser, navigate) {
	const newUser = {
		email,
		favorites: [],
	};
	fetch('http://localhost:5000/users/user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newUser),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.insertedId.length) {
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
