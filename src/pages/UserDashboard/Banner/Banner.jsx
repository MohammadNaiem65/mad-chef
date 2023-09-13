import avatarImg from '../../../assets/man-avatar.png';

export default function Banner({ user, consult }) {
	// ! Required variables
	const { photo, name, email, favorites } = user;

	return (
		<div className='w-3/5 mx-auto mt-20 px-16 py-6 gradient-bg text-black/70 font-Popins flex gap-x-5 relative rounded overflow-hidden'>
			{/* Left Side blobs */}
			<div className='h-64 aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-24 -left-32 rotate-45'></div>
			<div className='h-64 aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-28 -left-32 rotate-45'></div>
			<div className='h-32 aspect-square shape-bg-two bg-Primary bg-opacity-10 absolute left-32 -top-12 rotate-45'></div>
			<div className='h-32 aspect-square shape-bg-two bg-Primary bg-opacity-10 absolute left-32 -top-10 rotate-45'></div>

			<img
				className='h-52 aspect-square rounded-full object-cover'
				src={photo ? photo : avatarImg}
				alt={`${name} picture`}
			/>

			{/* Center blobs */}
			<div className='h-64 hidden md:block aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-32 left-1/2 rotate-45'></div>
			<div className='h-64 hidden md:block aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-32 left-1/2 rotate-[35deg]'></div>
			{/* Right side blobs */}
			<div className='h-32 aspect-square shape-bg-two bg-Primary bg-opacity-60 md:bg-opacity-10 absolute right-0 md:right-80 -bottom-10 rotate-45'></div>
			<div className='h-20 aspect-square shape-bg-two bg-Primary bg-opacity-20 absolute -right-10 -top-3 rotate-45'></div>
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
						Favorites:{' '}
						{favorites?.length === 0
							? ' 00'
							: favorites?.length < 10
							? ` 0${favorites.length}`
							: ` ${favorites?.length}`}
					</p>
					<p
						className='justify-self-start flex items-center'
						title='Consults'>
						Consult:{' '}
						{consult === 0
							? ' 00'
							: consult < 10
							? ` 0${consult}`
							: ` ${consult}`}
					</p>
				</div>
			</div>
		</div>
	);
}
