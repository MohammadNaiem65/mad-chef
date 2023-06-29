import React, { useEffect, useRef } from "react";
import ReviewSlide from "../ReviewSlide/ReviewSlide";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/swiper-bundle.css";
import "./Review.css";

Swiper.use([Navigation, Pagination, Autoplay]);

const Review = () => {
	const swiperRef = useRef(null);

	useEffect(() => {
		setTimeout(() => {
			new Swiper(swiperRef.current, {
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

				// Navigation arrows
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
			});
		}, 0);
	}, []);

	return (
		<div className='w-3/5 h-96 mx-auto mt-14'>
			<div
				className='swiper-container relative overflow-hidden'
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

				<div className='swiper-pagination'></div>

				{/* <div className='swiper-button-next'><div> 
				<div className='swiper-button-prev text-2xl'></div> */}
				<div onClick={() => Swiper.navigation.prevEl()}>
					<FaArrowLeft className='w-14 h-14 p-3 text-2xl text-Primary bg-Primary/20 hover:bg-Primary/50  absolute top-1/2 left-5 transform -translate-y-1/2 rounded-full cursor-pointer z-10' />
				</div>
				<div onClick={() => Swiper.navigation.next()}>
					<FaArrowRight className='w-14 h-14 p-3 text-2xl text-Primary bg-Primary/20 hover:bg-Primary/50  absolute top-1/2 right-5 transform -translate-y-1/2 rounded-full cursor-pointer z-10' />
				</div>
			</div>
		</div>
	);
};

export default Review;
