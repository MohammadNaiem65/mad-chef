import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash, FaFacebook, FaGithub } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/authProvider/authProvider';
import notify from '../../../customHooks/notify';

const Login = () => {
	// ! Required variables
	// Get location
	// const location = useLocation();
	// const from = location.state?.from?.pathname || '/';
	const {
		setUser,
		createUserWithGoogle,
		createUserWithFacebook,
		createUserWithGithub,
	} = useContext(AuthContext);
	const [passwordType, setPasswordType] = useState(true);

	// Handle user login with email and password
	const handleLoginWithEmail = (e) => {
		e.preventDefault();
		// setLoading(true);
		// const form = e.target;
		// const email = form.email.value;
		// const password = form.password.value;
		// logInUserWithEmail(email, password)
		// 	.then((data) => {
		// 		successNotification('Logged in successfully!');
		// 		setUser(data.user);
		// 		setLoggedIn(true);
		// 		setLoading(false);
		// 		fetch('https://brainiac-toys-server.vercel.app/jwt', {
		// 			method: 'POST',
		// 			headers: {
		// 				'content-type': 'application/json',
		// 			},
		// 			body: JSON.stringify({ email }),
		// 		})
		// 			.then((res) => res.json())
		// 			.then((data) => {
		// 				localStorage.setItem('access-token', data.token);
		// 				navigate(from);
		// 			});
		// 	})
		// 	.catch((err) => {
		// 		setLoading(false);
		// 		errorNotification(err.code);
		// 	});
		// form.reset();
	};

	// * Login with Google
	const handleLoginWithGoogle = () => {
		createUserWithGoogle()
			.then((userData) => {
				const newUser = {
					name: userData.user.displayName,
					email: userData.user.email,
					favorites: [],
				};
				setUser(newUser);
				notify('success', 'Signed in successfully!');
			})
			.catch((err) => {
				const e = err.code
					.split('.')[0]
					.split('/')[1]
					.replace(/-/g, ' ');

				const error = e.charAt(0).toUpperCase() + e.slice(1) + '.';

				notify('error', error);
			});
	};

	// * Login with Facebook
	const handleLoginWithFacebook = () => {
		createUserWithFacebook()
			.then((userData) => {
				const newUser = {
					name: userData.user.displayName,
					email: userData.user.email,
					favorites: [],
				};
				setUser(newUser);
				notify('success', 'Signed in successfully!');
			})
			.catch((err) => {
				const e = err.code
					.split('.')[0]
					.split('/')[1]
					.replace(/-/g, ' ');

				const error = e.charAt(0).toUpperCase() + e.slice(1) + '.';

				notify('error', error);
			});
	};

	// * Login with Github
	const handleLoginWithGithub = () => {
		createUserWithGithub()
			.then((userData) => {
				const newUser = {
					name: userData.user.displayName,
					email: userData.user.email,
					favorites: [],
				};
				setUser(newUser);
				notify('success', 'Signed in successfully!');
			})
			.catch((err) => {
				const e = err.code
					.split('.')[0]
					.split('/')[1]
					.replace(/-/g, ' ');

				const error = e.charAt(0).toUpperCase() + e.slice(1) + '.';

				notify('error', error);
			});
	};

	return (
		<div className='w-1/3 mx-auto my-20 px-10 pt-14 pb-8 bg-Primary/60 font-Popins rounded'>
			<h2 className='text-4xl text-center font-Vollokorn mb-8'>Login</h2>
			<form
				className='w-fit mx-auto px-5'
				onSubmit={handleLoginWithEmail}>
				{/* Email */}
				<>
					<label
						htmlFor='email'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Email
					</label>
					<input
						type='email'
						id='email'
						name='email'
						placeholder='Enter your email.'
						className='w-96 px-3 py-1 outline-Primary rounded'
						required
					/>
				</>

				{/* Password */}
				<>
					<label
						htmlFor='password'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Password
					</label>
					<div className='relative'>
						<input
							type={passwordType ? 'password' : 'text'}
							id='password'
							name='password'
							placeholder='Enter your password.'
							className='w-96 px-3 py-1 outline-Primary rounded'
							required
						/>
						<p
							className='absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer'
							onClick={() => setPasswordType(!passwordType)}>
							{passwordType ? <FaEyeSlash /> : <FaEye />}
						</p>
					</div>
				</>
				<p className='mt-2'>
					New to Brainiac Toys?{' '}
					<Link
						to='/sign-up'
						className='text-slate-950 hover:text-Primary underline'>
						Sign Up
					</Link>{' '}
					now.
				</p>
				<button
					className='btn btn-primary block mx-auto mt-5 cursor-pointer'
					type='submit'>
					Login
				</button>

				{/* Footer Links */}
				<div className='w-full'>
					<p className='text-xl text-center mt-5 mb-2'>Or</p>
					<div className='text-4xl flex justify-center gap-x-5'>
						<FcGoogle
							className='cursor-pointer'
							onClick={handleLoginWithGoogle}
						/>
						<FaFacebook
							className='cursor-pointer text-blue-600'
							onClick={handleLoginWithFacebook}
						/>
						<FaGithub
							className='cursor-pointer'
							onClick={handleLoginWithGithub}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Login;
