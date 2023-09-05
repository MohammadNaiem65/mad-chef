export default function getFavoritesFromDB(email) {
	return fetch(`http://localhost:5000/users/user/favorites?email=${email}`)
		.then((res) => res.json())
		.then((data) => {
			return data.favorites;
		});
}
