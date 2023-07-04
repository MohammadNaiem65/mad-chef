import React, { useState } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import {
	FaChevronLeft,
	FaChevronRight,
	FaRegStar,
	FaStar,
	FaHeartCirclePlus,
	FaHeartCircleCheck,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const RecipeDetails = () => {
	const recipe = JSON.parse(sessionStorage.getItem("recipe"));
	const prevLocation = sessionStorage.getItem("prev-location");
	const { picture, name, rating, ingredients, method } = recipe;
	const [hovered, setHovered] = useState(false);

	return (
		<div className=''>
			{/* Title-Navigation */}
			<div className='text-xl flex items-center justify-between'>
				<h3 className='font-semibold font-Vollokorn'>Recipe details:</h3>
				<p className=' flex text-Primary'>
					<Link
						to={prevLocation}
						className='p-2 rounded-full cursor-pointer hover:bg-Primary/20'>
						<FaChevronLeft />
					</Link>
					<span className='p-2 cursor-pointer'>
						<FaChevronRight />
					</span>
				</p>
			</div>

			<div className='mt-3 p-6 text-gray-500 bg-Primary/20 rounded text-justify flex flex-col space-y-8'>
				<div className='flex items-center'>
					<img
						className='w-1/3 mr-5 rounded'
						src={picture}
						alt={`${name}'s picture`}
					/>
					<div>
						{/* Recipe name */}
						<h3
							className='text-2xl text-black font-Vollokorn cursor-pointer'
							onMouseOver={() => setHovered(true)}
							onMouseLeave={() => setHovered(false)}>
							{name}
						</h3>
						<div
							className={`h-1 bg-Primary rounded-full duration-300 ${
								hovered ? "w-full" : "w-1/4"
							}`}></div>
						{/* Rating */}
						<div className='mt-3 text-xl text-yellow-500 flex items-center gap-1'>
							<FaStar />
							<FaStar />
							<FaStar />
							<FaStarHalfAlt />
							<FaRegStar />
							<p className='ml-2 text-gray-400 font-semibold'>
								{rating} out of 5
							</p>
						</div>
						{/* Favorite Button */}
						<p className='btn btn-primary w-fit flex mt-2'>
							<span className='text-2xl'>
								<FaHeartCirclePlus />
							</span>
							<span className='ml-2 text-lg'>Add to Favorites</span>
						</p>
					</div>
				</div>
				<div>
					<p className="text-xl font-semibold font-Vollokorn">Ingredients:</p>
					<p className="font-Popins">{ingredients.join(", ")}</p>
				</div>
				<div>
					<p className="text-xl font-semibold font-Vollokorn">Cooking Method:</p>
					<p className="font-Popins">{method}</p>
				</div>
			</div>
		</div>
	);
};

export default RecipeDetails;
