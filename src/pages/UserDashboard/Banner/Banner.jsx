import avatarImg from '../../../assets/man-avatar.png';

export default function Banner({ user, consult }) {
	// ! Required variables
	const { photo, name, email, favorites } = user;

	return (
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
						<span className='text-black/80'>
							Favorites:{' '}
							{favorites?.length === 0
								? ' 00'
								: favorites?.length < 10
								? ` 0${favorites.length}`
								: ` ${favorites.length}`}
						</span>
					</p>
					<p
						className='justify-self-start flex items-center'
						title='Consults'>
						<span className='text-black/80'>
							Consult:{' '}
							{consult === 0
								? ' 00'
								: consult < 10
								? ` 0${consult}`
								: ` ${consult}`}
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
