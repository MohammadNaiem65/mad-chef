import chef from "../../assets/person.png";
import pan from "../../assets/pan.png";
import spoon from "../../assets/spoon.png";
import knife from "../../assets/knife.png";

const Banner = () => {
	return (
		<div className='container h-96 flex justify-between mt-10 border-2 border-Secondary rounded gradient-bg overflow-hidden relative'>
			{/* Left Side blobs */}
			<div className='h-64 aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-24 -left-32 rotate-45'></div>
			<div className='h-64 aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-28 -left-32 rotate-45'></div>
			<div className='h-32 aspect-square shape-bg-two bg-Primary bg-opacity-10 absolute left-32 -top-12 rotate-45'></div>
			<div className='h-32 aspect-square shape-bg-two bg-Primary bg-opacity-10 absolute left-32 -top-10 rotate-45'></div>
			{/* Left Container */}
			<div className=' w-1/2 relative flex justify-center items-center'>
				{/* Center blobs */}
				<div className='h-64 aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-24 left-1/2 rotate-45'></div>
				<div className='h-64 aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute top-24 left-1/2 rotate-[35deg]'></div>
				<div>
					<h2>Welcome to</h2>
					<h1>Mad Chef</h1>
				</div>
			</div>
			{/* Right Container */}
			<div className='w-1/2 relative'>
				{/* Right side blobs */}
				<div className='h-32 aspect-square shape-bg-two bg-Primary bg-opacity-10 absolute left-32 -bottom-10 rotate-45'></div>
				<div className='h-20 aspect-square shape-bg-two bg-Primary bg-opacity-20 absolute -right-10 -top-3 rotate-45'></div>
				{/* Chef blob */}
				<div className='h-[22rem] aspect-square bg-Primary opacity-80 animate-blob absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'></div>
				<img
					src={chef}
					alt='banner image'
					className='w-48 absolute top-1/2 left-56 animate-float-chef'
				/>
				<img
					src={knife}
					alt='banner image'
					className='w-14 absolute top-[36%] left-[59%] transform animate-float-knife'
				/>
				<img
					src={pan}
					alt='banner image'
					className='w-16 absolute top-[60%] left-[28%] animate-float-pan'
				/>
				<img
					src={spoon}
					alt='banner image'
					className='w-44 absolute top-[60%] left-[40%] animate-float-spoon'
				/>
			</div>
		</div>
	);
};

export default Banner;
