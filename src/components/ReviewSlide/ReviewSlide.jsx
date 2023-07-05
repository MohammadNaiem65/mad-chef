import { FaRegStar, FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";

const ReviewSlide = ({ review }) => {
	const { image, review: feedback, name, rating } = review;
	return (
		<div
			className='h-96 w-full'
			style={{
				backgroundImage: `url("${image}")`,
				backgroundRepeat: "no-repeat",
				backgroundPosition: "center top",
				backgroundSize: "cover",
			}}>
			<div className='w-full h-full flex justify-center items-end text-white bg-gradient-to-t from-black to-transparent to-80%'>
				<div className='w-3/5 text-center text-xs md:text-sm mb-5'>
					<h3 className='font-Popins'>{`"${feedback}"`}</h3>
					<p className='text-sm md:text-xl font-Vollokorn mt-1'> - {name}</p>
					<p className='w-fit text-yellow-300 md:text-lg flex items-center gap-[2px] mx-auto mt-1'>
						{Array.from({ length: 5 }, (_, i) => {
							if (rating > i + 1) {
								return <FaStar key={i} />;
							} else if (rating >= i + 0.5) {
								return <FaStarHalfAlt key={i} />;
							} else {
								return <FaRegStar key={i} />;
							}
						})}{" "}
						<span className="text-white">- {rating}</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ReviewSlide;
