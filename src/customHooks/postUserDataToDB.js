import notify from './notify';

export default function postUserDataToDB(userData, name, setUser) {
	fetch('http://localhost:5000/users/user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(userData),
	})
		.then((res) => res.json())
		.then((data) => {
			if (data.insertedId.length) {
				const user = {
					...userData,
					name: name,
				};
				setUser(user);
				notify('success', 'Account created successfully!');
			} else {
				notify('error', 'Something went wrong!');
			}
		});
}
