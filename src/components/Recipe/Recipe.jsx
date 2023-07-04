import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const Recipe = ({ recipe }) => {
	const { picture, name, ingredients, rating } = recipe;
	return (
		<div className='bg-Primary/20 mt-3 p-6 text-gray-500 text-sm font-Popins rounded flex items-center'>
			<img className='w-36 h-24 rounded object-cover' src={picture} alt={`${name}'s picture`} />
			<div className='ml-3'>
				<h3 className='text-black text-lg font-Vollokorn'>{name}</h3>
				<p>
					Ingredient:{" "}
					{ingredients.join(", ").length >= 50
						? ingredients.join(", ").slice(0, 50) + "..."
						: ingredients.join(", ")}
				</p>
				<div className='text-xl flex items-center gap-6'>
					<div className='text-yellow-500 mt-[2px] flex gap-1'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStarHalfAlt />
						<FaRegStar />
					</div>
					<p className="text-2xl mt-1">
						<FcLike />
					</p>
				</div>
			</div>
			<Link className='arrows ml-auto flex justify-center items-center w-12 h-6'>
				<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45 hover'></span>
				<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45'></span>
				<span className='w-3 h-3 border-t-[3px] border-r-[3px] border-Primary rounded-tr-[2px] block transform rotate-45'></span>
			</Link>
		</div>
	);
};

export default Recipe;
