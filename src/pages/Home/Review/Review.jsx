import { useLoaderData } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import ReviewSlide from '../ReviewSlide/ReviewSlide';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Review.css';

const Review = () => {
	// reviews
	const reviewsData = useLoaderData();

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
			<div className='w-full md:w-4/5 h-96 mx-auto mt-5 relative overflow-hidden rounded'>
				<Swiper
					className='swiper-wrapper'
					slidesPerView={2}
					grabCursor={true}
					loop={true}
					pagination={{
						dynamicBullets: true,
						clickable: true,
					}}
					navigation={{
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					}}
					modules={[Pagination, Navigation]}>
					<FaArrowLeft className='swiper-button-prev w-12 h-12 p-2 bg-Primary/30 text-indigo-300 rounded-full after:hidden' />
					<FaArrowRight className='swiper-button-next bg-Primary/30 text-indigo-300 w-12 h-12 p-2 rounded-full after:hidden' />

					{reviewsData?.map((review) => (
						<SwiperSlide className='swiper-slide' key={review.id}>
							<ReviewSlide review={review} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Review;
