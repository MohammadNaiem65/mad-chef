import { useEffect, useRef, useState } from "react";
import ReviewSlide from "../ReviewSlide/ReviewSlide";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Review.css";

Swiper.use([Navigation, Pagination, Autoplay]);

const Review = () => {
	const swiperRef = useRef(null);
	const [swiper, setSwiper] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			const mySwiper = new Swiper(swiperRef.current, {
				// Optional parameters
				loop: true,
				speed: 250,
				autoplay: {
					delay: 3000,
				},

				// If we need pagination
				pagination: {
					el: ".swiper-pagination",
					dynamicBullets: true,
				},

				modules: [Navigation, Pagination, Autoplay],
			});

			setSwiper(mySwiper);
		}, 0);
	}, []);

	return (
		<div
			className='w-3/5 h-96 mx-auto mt-14 relative overflow-hidden'
			ref={swiperRef}>
			<div className='swiper-wrapper'>
				<div className='swiper-slide'>
					<ReviewSlide num='1' />
				</div>
				<div className='swiper-slide'>
					<ReviewSlide num='2' />
				</div>
				<div className='swiper-slide'>
					<ReviewSlide num='3' />
				</div>
			</div>

			{/* Pagination */}
			<div className='swiper-pagination'></div>

			{/* Slider Control */}
			<>
				<div onClick={() => swiper && swiper.slidePrev()}>
					<FaArrowLeft className='w-14 h-14 p-3 text-2xl text-Primary bg-Primary/20 hover:bg-Primary/50  absolute top-1/2 left-5 transform -translate-y-1/2 rounded-full cursor-pointer z-10' />
				</div>
				<div onClick={() => swiper && swiper.slideNext()}>
					<FaArrowRight className='w-14 h-14 p-3 text-2xl text-Primary bg-Primary/20 hover:bg-Primary/50  absolute top-1/2 right-5 transform -translate-y-1/2 rounded-full cursor-pointer z-10' />
				</div>
			</>
		</div>
	);
};

export default Review;
