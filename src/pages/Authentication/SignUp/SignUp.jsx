import { FaApple, FaFacebook, FaPinterest } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const SignUp = () => {
	const handleSignUpWithEmail = (e) => {
		e.preventDefault();
	};

	return (
		<div className='w-1/3 mx-auto my-14 px-10 py-8 bg-Primary/60 font-Popins rounded'>
			<h2 className='text-4xl text-center font-Vollokorn'>Sign Up</h2>
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
						className='w-96 px-3 py-1 outline-primary rounded'
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
					<input
						type='password'
						id='password'
						name='password'
						placeholder='Enter your password.'
						className='w-96 px-3 py-1 outline-primary rounded'
						required
					/>
				</>
				{/* Password */}
				<>
					<label
						htmlFor='confirm-password'
						className='text-xl block mb-1 mt-5 tracking-wide'>
						Confirm Password
					</label>
					<input
						type='password'
						id='confirm-password'
						name='confirm-password'
						placeholder='Confirm your password.'
						className='w-96 px-3 py-1 outline-primary rounded'
						required
					/>
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
				<div className='w-full'>
					<p className='text-xl text-center mt-5 mb-2'>Or</p>
					<div className='text-4xl flex justify-center gap-x-5'>
						<FcGoogle className='cursor-pointer' />
						<FaFacebook className='cursor-pointer text-blue-600' />
						<FaPinterest className='cursor-pointer text-red-600' />
						<FaApple className='cursor-pointer' />
					</div>
				</div>
			</form>
		</div>
	);
};

export default SignUp;
