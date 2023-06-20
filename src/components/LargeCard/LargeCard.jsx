import React from "react";
import person from "../../assets/model.jpeg";
import { FaHeart, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const LargeCard = () => {
	return (
		<div className='bg-white h-full rounded p-5 md:p-0 flex flex-col md:flex-row md:justify-evenly items-center relative overflow-hidden'>
			{/* Left side container */}
			<div className='image-container w-48 h-48 mb-5 md:mb-0 shape-bg-three overflow-hidden shadow-lg shadow-Primary z-30'>
				<img
					src={person}
					alt=''
					className='h-full w-full chef-image object-cover object-center'
				/>
			</div>

			{/* Right side container */}
			<div className='w-1/2 text-slate-500'>
				<div className='mb-3'>
					<p className='text-lg font-semibold text-black'>
						Mohammad Naiem Bin Omar
					</p>
					<p className='text-yellow-300 flex items-center gap-[2px]'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStarHalfAlt />
						<FaRegStar />
					</p>
				</div>
				<div className='font-semibold'>
					<p>Experience: 5 Years</p>
					<p>Recipes: 50</p>
					<div className='flex justify-between items-center '>
						<p className='flex items-center'>
							<FaHeart className='text-red-500' />
							<span className='ml-1'>30</span>
						</p>
						<Link className='arrows flex justify-center items-center w-12 h-6 relative z-50'>
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
