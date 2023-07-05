import { FaHeart, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LargeCard = ({ chef }) => {
	const { picture, name, rating, yearsOfExperience, recipes, id } = chef || {};
	return (
		<div className='bg-white h-full rounded p-5 md:p-0 flex flex-col md:flex-row md:justify-evenly items-center relative overflow-hidden'>
			{/* Left side container */}
			<div className='image-container w-48 h-48 mb-5 md:mb-0 shape-bg-three overflow-hidden shadow-lg shadow-Primary z-30'>
				<img
					src={picture}
					alt={`picture of chef ${name}`}
					className='h-full w-full chef-image object-cover object-center'
				/>
			</div>

			{/* Right side container */}
			<div className='w-1/2 text-slate-500'>
				<div className='mb-3'>
					<p className='text-lg font-semibold text-black'>{name}</p>
					<p className='text-yellow-300 flex items-center gap-[2px]'>
						{rating &&
							Array.from({ length: 5 }, (_, i) => {
								return rating >= i + 1 ? (
									<FaStar />
								) : rating >= i + 0.5 ? (
									<FaStarHalfAlt />
								) : (
									<FaRegStar />
								);
							})}
					</p>
				</div>
				<div className='font-semibold'>
					<p>Experience: {yearsOfExperience} Years</p>
					<div className='flex justify-between items-center '>
						<p>Recipes: {recipes?.length}</p>
						<Link
							to={`http://localhost:5173/dashboard/chefs/chef/${id}`}
							className='arrows flex justify-center items-center w-12 h-6 relative z-50'>
							<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45 hover'></span>
							<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45'></span>
							<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45'></span>
						</Link>
					</div>
				</div>
			</div>

			{/* Right-Bottom blob */}
			<div className='h-36 aspect-square shape-bg-one bg-Primary bg-opacity-20 absolute -right-12 -bottom-6'></div>
		</div>
	);
};

export default LargeCard;
