import React from "react";
import model from "../../assets/model.jpeg";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar, FaHeart } from "react-icons/fa";
import "./InvertedCard.css";

const InvertedCard = () => {
	return (
		<div className='w-1/2 h-[22.5rem] font-semibold bg-[#495579] flex flex-col justify-between rounded overflow-hidden'>
			<div className='h-60 w-full div-secret relative secret-after'>
				<img
					src={model}
					alt='image of chef'
					className='h-full w-full object-cover object-center rounded-br'
				/>
			</div>
			<div className='h-28 w-full px-2 py-2 bg-white relative leading-[1.3rem] rounded-tr'>
				<div className='w-[7.25rem] h-12 bg-white grid place-items-center border-[#495579] border-t-[10px] border-r-[10px] absolute left-0 -top-12 rounded-tr secret-before before:top-0 before:left-0 before:shadow-span-shadow-left secret-after after:top-0 after:right-0 after:shadow-span-shadow-right'>
					<p className='px-1 py-[0.375rem] bg-Primary text-yellow-300 flex items-center gap-[2px] rounded p-secret'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStarHalfAlt />
						<FaRegStar />
					</p>
				</div>

				<p className='text-lg'>Mohammad Naiem Bin Omar</p>
				<p>Experience: 5 Years</p>
				<p>Recipes: 50</p>
				<div className='flex justify-between items-center '>
					<p className='flex items-center'>
						<FaHeart className='text-red-500' />
						<span className='ml-1'>30</span>
					</p>
					<Link className='arrows flex justify-center items-center w-12 h-6'>
						<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45 hover'></span>
						<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45'></span>
						<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45'></span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default InvertedCard;
