import axiosCustomInstance from '../axios/axiosCustomInstance';

export default function getFavoritesFromDB(email) {
	return axiosCustomInstance
		.get(`/users/user/favorites?email=${email}`)
		.then((res) => {
			return res.data.favorites;
		});
}
