import React from "react";
import model from "../../assets/model.jpeg";
import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const ReviewSlide = ({ num }) => {
	return (
		<div
			className={`h-96 w-full ${
				num == 1
					? "bg-red-500"
					: num == 2
					? "bg-green-500"
					: num == 3
					? "bg-blue-500"
					: "bg-yellow-500"
			}`}
			style={{
				backgroundImage: `url("${model}")`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center",
				backgroundSize: "cover",
			}}>
			<div className='w-full h-full flex justify-center items-end text-white bg-gradient-to-t from-black to-transparent to-80%'>
				<div className='w-3/5 text-center text-xs md:text-sm mb-5'>
					<h3 className="font-Popins">
						"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minus
						amet quam officia at, eaque ratione expedita ducimus!"
					</h3>
					<p className='text-sm md:text-lg mt-1'> - Mohammad Naiem</p>
					<p className='w-fit text-yellow-300 md:text-lg flex items-center gap-[2px] mx-auto mt-1'>
						<FaStar />
						<FaStar />
						<FaStar />
						<FaStarHalfAlt />
						<FaRegStar />
					</p>
				</div>
			</div>
		</div>
	);
};

export default ReviewSlide;
