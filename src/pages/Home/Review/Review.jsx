import { useEffect, useRef, useState } from "react";
import ReviewSlide from "../ReviewSlide/ReviewSlide";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "./Review.css";
import { useLoaderData } from "react-router-dom";

Swiper.use([Navigation, Pagination, Autoplay]);

const Review = () => {
	// reviews
	const reviewsData = useLoaderData();

	// Swiper states
	const swiperRef = useRef(null);
	const [swiper, setSwiper] = useState(null);

	useEffect(() => {
		setTimeout(() => {
			const mySwiper = new Swiper(swiperRef.current, {
				// Optional parameters
				slidesPerView: 1,
				spaceBetween: 2,
				loop: true,
				speed: 250,
				autoplay: {
					delay: 3000,
				},
				pagination: {
					el: ".swiper-pagination",
					dynamicBullets: true,
				},
				breakpoints: {
					// when window width is >= 426px
					426: {
						slidesPerView: 2,
					},
				},

				modules: [Navigation, Pagination, Autoplay],
			});

			setSwiper(mySwiper);
		}, 0);
	}, []);

	return (
		<div className='container'>
			<h2 className='w-fit text-2xl text-center font-semibold font-Vollokornn italic relative z-50 mx-auto'>
				What customers
				<span className='font-semibold ml-2 relative cursor-pointer z-40 hover:text-white after:duration-200 after:contents-[""] after:h-[6px] after:w-[112%] after:bg-Accent after:absolute after:bottom-[2px] after:-left-[3px] after:-z-10 hover:after:h-[88%] '>
					Think
				</span>
				<br />
				of Us
			</h2>
			{/* Swiper container */}
			<div
				className='w-full md:w-4/5 h-96 mx-auto mt-5 relative overflow-hidden swiper'
				ref={swiperRef}>
				<div className='swiper-wrapper'>
					{reviewsData?.map((review) => (
						<div className='swiper-slide' key={review.id}>
							<ReviewSlide review={review} />
						</div>
					))}
				</div>

				{/* Pagination */}
				<div className='swiper-pagination'></div>

				{/* Slider Control */}
				<>
					<div onClick={() => swiper && swiper.slidePrev()}>
						<FaArrowLeft className='w-7 h-7 md:w-14 md:h-14 p-1 md:p-3 md:text-2xl text-Primary bg-Primary/20 hover:bg-Primary/50  absolute top-1/2 left-5 transform -translate-y-1/2 rounded-full cursor-pointer z-10' />
					</div>
					<div onClick={() => swiper && swiper.slideNext()}>
						<FaArrowRight className='w-7 h-7 md:w-14  md:h-14 p-1 md:p-3 text-2xl text-Primary bg-Primary/20 hover:bg-Primary/50  absolute top-1/2 right-5 transform -translate-y-1/2 rounded-full cursor-pointer z-10' />
					</div>
				</>
			</div>
		</div>
	);
};

export default Review;
