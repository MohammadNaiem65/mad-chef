import axios from 'axios';

const axiosCustomInstance = axios.create({
	baseURL: 'https://mad-chef-server.vercel.app',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export default axiosCustomInstance;
