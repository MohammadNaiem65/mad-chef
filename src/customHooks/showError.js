import notify from './notify';

export default function showError(err) {
	const e = err.code.split('.')[0].split('/')[1].replace(/-/g, ' ');

	const error = e.charAt(0).toUpperCase() + e.slice(1) + '.';

	notify('error', error);
}
