import { toast } from 'react-toastify';

export default function notify(type, text) {
	toast[type](text, {
		position: 'top-center',
		autoClose: 4000,
		hideProgressBar: true,
		closeOnClick: true,
		pauseOnHover: false,
		draggable: false,
		progress: undefined,
		theme: 'light',
	});
}
