export default function getFavoritesFromDB(email) {
	fetch(`http://localhost:5000/users/user/favorites?email=${email}`)
		.then((res) => res.json())
		.then((data) => {
			if (data.favorites.length) {
				return data.favorites;
			} else {
				const newUser = {
					email: email,
					favorites: [],
				};
				fetch('http://localhost:5000/users/user', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(newUser),
				}).then(() => {});
				return [];
			}
		});
}
