import { FaGithub, FaEyeSlash, FaEye, FaFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import validatePassword from '../../../customHooks/validatePassword';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../providers/authProvider/authProvider';
import postUserDataToDB from '../../../customHooks/postUserDataToDB';
import showError from '../../../customHooks/showError';

const SignUp = () => {
	// ! Required variables
	const [passwordType, setPasswordType] = useState(true);
	const {
		setUser,
		createUserWithEmail,
		createUserWithGoogle,
		createUserWithFacebook,
		createUserWithGithub,
	} = useContext(AuthContext);

	// * Sign up with Email
	const handleSignUpWithEmail = (e) => {
		e.preventDefault();
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		const confirmPassword = form.confirmPassword.value;

		// ! Validate password
		const result = validatePassword(password, confirmPassword);

		// ! Sign up user
		if (!result) {
			return;
		} else {
			createUserWithEmail(email, password)
				.then((userData) => {
					const newUser = {
						email: userData.user.email,
						favorites: [],
					};
					postUserDataToDB(
						newUser,
						userData.user.displayName,
						setUser
					);
				})
				.catch((err) => {
					showError(err);
				});
		}
	};

	// * Sign up with Google
	const handleSignUpWithGoogle = () => {
		createUserWithGoogle()
			.then((userData) => {
				const newUser = {
					email: userData.user.email,
					favorites: [],
				};

				postUserDataToDB(newUser, userData.user.displayName, setUser);
			})
			.catch((err) => {
				showError(err);
			});
	};

	// * Sign up with Facebook
	const handleSignUpWithFacebook = () => {
		createUserWithFacebook()
			.then((userData) => {
				const newUser = {
					email: userData.user.email,
					favorites: [],
				};
				postUserDataToDB(newUser, userData.user.displayName, setUser);
			})
			.catch((err) => {
				showError(err);
			});
	};

	// * Sign up with Github
	const handleSignUpWithGithub = () => {
		createUserWithGithub()
			.then((userData) => {
				const newUser = {
					email: userData.user.email,
					favorites: [],
				};
				postUserDataToDB(newUser, userData.user.displayName, setUser);
			})
			.catch((err) => {
				showError(err);
			});
	};

	return (
		<div className='w-1/3 mx-auto my-14 px-10 py-8 bg-Primary/60 font-Popins rounded'>
			<h2 className='text-4xl text-center font-Vollokorn mb-8'>
				Sign Up
			</h2>
			<form
				className='w-fit mx-auto px-5'
				onSubmit={handleSignUpWithEmail}>
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

				{/* Confirm password */}
				<>
					<label
						htmlFor='confirm-password'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Confirm Password
					</label>
					<div className='relative'>
						<input
							type={passwordType ? 'password' : 'text'}
							id='confirm-password'
							name='confirmPassword'
							placeholder='Confirm your password.'
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
					Already have an account?{' '}
					<Link
						to='/login'
						className='text-slate-950 hover:text-Primary underline'>
						Login
					</Link>{' '}
					here.
				</p>
				<button
					className='btn btn-primary block mx-auto mt-5 cursor-pointer'
					type='submit'>
					Sign Up
				</button>

				{/* Footer Links */}
				<div className='w-full'>
					<p className='text-xl text-center mt-5 mb-2'>Or</p>
					<div className='text-4xl flex justify-center gap-x-5'>
						<FcGoogle
							className='cursor-pointer'
							onClick={handleSignUpWithGoogle}
						/>
						<FaFacebook
							className='cursor-pointer text-blue-600'
							onClick={handleSignUpWithFacebook}
						/>
						<FaGithub
							className='cursor-pointer'
							onClick={handleSignUpWithGithub}
						/>
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
