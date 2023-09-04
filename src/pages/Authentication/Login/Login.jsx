import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash, FaFacebook, FaGithub } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/authProvider/authProvider';
import notify from '../../../customHooks/notify';
import showError from '../../../customHooks/showError';
import getFavoritesFromDB from '../../../customHooks/getFavoritesFromDB';

const Login = () => {
	// ! Required variables
	const navigate = useNavigate();
	const location = useLocation();
	const from = location.state?.from?.pathname || '/';
	const {
		setUser,
		setShowLoader,
		logInUserWithEmail,
		createUserWithGoogle,
		createUserWithFacebook,
		createUserWithGithub,
	} = useContext(AuthContext);
	const [passwordType, setPasswordType] = useState(true);

	// Handle user login with email and password
	const handleLoginWithEmail = (e) => {
		e.preventDefault();
		setShowLoader(true);
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;

		logInUserWithEmail(email, password)
			.then((userData) => {
				notify('success', 'Signed in successfully!');
				setShowLoader(false);
				const favorites = getFavoritesFromDB(userData.user.email);
				const user = {
					name: userData.user.displayName,
					email: userData.user.email,
					favorites: favorites ? favorites : [],
				};
				setUser(user);
				navigate(from);
			})
			.catch((err) => {
				showError(err);
				setShowLoader(false);
			});
		form.reset();
	};

	// * Login with Google
	const handleLoginWithGoogle = () => {
		setShowLoader(true);
		createUserWithGoogle()
			.then((userData) => {
				notify('success', 'Signed in successfully!');
				setShowLoader(false);
				const favorites = getFavoritesFromDB(userData.user.email);
				const user = {
					name: userData.user.displayName,
					email: userData.user.email,
					favorites: favorites ? favorites : [],
				};
				setUser(user);
				navigate(from);
			})
			.catch((err) => {
				showError(err);
				setShowLoader(false);
			});
	};

	// * Login with Facebook
	const handleLoginWithFacebook = () => {
		setShowLoader(true);
		createUserWithFacebook()
			.then((userData) => {
				notify('success', 'Signed in successfully!');
				setShowLoader(false);
				const favorites = getFavoritesFromDB(userData.user.email);
				const user = {
					name: userData.user.displayName,
					email: userData.user.email,
					favorites: favorites ? favorites : [],
				};
				setUser(user);
				navigate(from);
			})
			.catch((err) => {
				showError(err);
				setShowLoader(false);
			});
	};

	// * Login with Github
	const handleLoginWithGithub = () => {
		setShowLoader(true);
		createUserWithGithub()
			.then((userData) => {
				notify('success', 'Signed in successfully!');
				setShowLoader(false);
				const favorites = getFavoritesFromDB(userData.user.email);
				const user = {
					name: userData.user.displayName,
					email: userData.user.email,
					favorites: favorites ? favorites : [],
				};
				setUser(user);
				navigate(from);
			})
			.catch((err) => {
				showError(err);
				setShowLoader(false);
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
