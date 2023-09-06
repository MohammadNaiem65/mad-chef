import { useContext } from 'react';
import { AuthContext } from '../../providers/authProvider/authProvider';
import avatarImg from '../../assets/man-avatar.png';

const UserDashboard = () => {
	// ! Required variables
	const { user } = useContext(AuthContext);
	const { photo, name, email, favorites, consult } = user;

	console.log(user);
	return (
		<div className='min-h-[calc(100vh-26.95rem)] relative'>
			{/* Banner */}
			<div className='w-3/5 mx-auto mt-5 px-16 py-6 bg-Primary/60 text-black/70 font-Popins flex gap-x-5 rounded'>
				<img
					className='h-52 aspect-square rounded-full object-cover'
					src={photo ? photo : avatarImg}
					alt={`${name} picture`}
				/>
				<div className='h-fit my-auto text-justify'>
					<h2 className='mb-3 text-3xl text-black/70 font-semibold'>
						{name}
					</h2>
					<p>
						<span className='text-black/80 text-lg'>Email: </span>{' '}
						{email}
					</p>
					<div className='text-lg flex items-center justify-between'>
						<p className='flex items-center'>
							<span className='text-black/80'>Favorites:</span>{' '}
							{favorites?.length === 0
								? ' 00'
								: favorites?.length < 10
								? ` 0${favorites.length}`
								: ` ${favorites.length}`}
						</p>
						<p
							className='justify-self-start flex items-center'
							title='Consults'>
							<span className='text-black/80'>Consult:</span>{' '}
							{consult?.length === 0
								? ' 00'
								: favorites?.length < 10
								? ` 0${favorites.length}`
								: ` ${favorites.length}`}
						</p>
					</div>
				</div>
			</div>

			{/* Gradient background */}
			<div className='top-20 -bottom-20 left-0 right-0 absolute -z-10 bg-gradient-to-b from-transparent via-Primary/60 to-Primary/60'></div>
		</div>
	);
};

export default UserDashboard;
