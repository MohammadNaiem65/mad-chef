import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Consult from '../Consult/Consult';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Consults({ consults }) {
	return (
		<div className='w-4/5 mx-auto mt-20'>
			<h3 className='w-1/4 text-2xl font-semibold text-black/80 border-b-2 border-Primary px-2'>
				Consult:
			</h3>
			<div className='h-[26.5rem] mt-6 px-10'>
				<Swiper
				className='h-full pt-4'
					slidesPerView={3}
					grabCursor={true}
					navigation={{
						prevEl: '.swiper-button-prev',
						nextEl: '.swiper-button-next',
					}}
					pagination={{
						dynamicBullets: true,
						clickable: true,
					}}
					modules={[Navigation, Pagination]}>
					{/* Controls */}
					<FaArrowLeft className='swiper-button-prev w-12 h-12 p-2 bg-indigo-500 text-indigo-300 opacity-50 rounded-full after:hidden' />
					<FaArrowRight className='swiper-button-next w-12 h-12 p-2 bg-indigo-500 text-indigo-300 opacity-50 rounded-full after:hidden' />

					{/* Slides */}
					{consults.map((consult) => (
						<SwiperSlide key={consult._id}>
							<Consult consult={consult} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
