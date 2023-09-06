import { useContext } from 'react';
import { AuthContext } from '../../providers/authProvider/authProvider';

const Consult = () => {
	// ! Required variables
	const { user } = useContext(AuthContext);

	return (
		<div className='min-h-[calc(100vh-26.95rem)] mt-10'>
			<form className='w-3/5 mx-auto p-10 bg-Primary/20 text-gray-500 font-Popins rounded'>
				<h1 className='text-center text-3xl font-semibold'>Consult</h1>
				{/* Email */}
				<div className='w-3/4 mx-auto mt-10 flex flex-col items-center'>
					{/* Name */}
					<div>
						<label
							htmlFor='name'
							className='text-xl block mb-1 mt-5 tracking-wide'>
							Name:
						</label>
						<input
							type='text'
							id='name'
							name='name'
							placeholder='Enter your name.'
							className='w-96 px-5 py-2 outline-Primary rounded'
							defaultValue={user?.name}
							required
						/>
					</div>

					{/* Email */}
					<div>
						<label
							htmlFor='email'
							className='text-xl block mb-1 mt-5 tracking-wide'>
							Email:
						</label>
						<input
							type='email'
							id='email'
							name='email'
							placeholder='Enter your email.'
							className='w-96 px-5 py-2 outline-Primary rounded'
							defaultValue={user?.email}
							required
						/>
					</div>

					{/* Date */}
					<div>
						<label
							htmlFor='date'
							className='text-xl block mb-1 mt-5 tracking-wide'>
							Date:
						</label>
						<input
							type='text'
							id='date'
							name='date'
							placeholder='dd-mm-yy'
							className='w-96 px-5 py-2 outline-Primary rounded'
							required
						/>
					</div>

					{/* Time */}
					<div>
						<label
							htmlFor='time'
							className='text-xl block mb-1 mt-5 tracking-wide'>
							Time:
						</label>
						<input
							type='text'
							id='time'
							name='time'
							placeholder='H : M : S'
							className='w-96 px-5 py-2 outline-Primary rounded'
							required
						/>
					</div>

					{/* Submit */}
					<button className='btn btn-primary mt-5' type="submit">Submit</button>
				</div>
			</form>
		</div>
	);
};

export default Consult;
