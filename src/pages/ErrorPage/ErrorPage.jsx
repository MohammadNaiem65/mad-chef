import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	const { status, statusText, data } = error;
	return (
		<div className='w-full h-[100dvh] flex flex-col justify-center items-center'>
			<h1 className='text-5xl font-bold font-Popins'>
				Code: {status ? status : 404}{" "}
				<span className='text-Primary text-6xl mx-5'>|</span>{" "}
				{statusText ? statusText : "Not Found"}
			</h1>
			<p className='text-xl mt-3 font-Vollokorn'>{data}</p>
			<Link
				className='btn btn-primary mt-5'
				to='/'>
				Home
			</Link>
		</div>
	);
};

export default ErrorPage;
