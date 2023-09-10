import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import Favorite from '../Favorite/Favorite';
import axiosCustomInstance from '../../../axios/axiosCustomInstance';

export default function Favorites({ favorites }) {
	// ! Required variables
	const [recipes, setRecipes] = useState([]);

	// ! Get favorite recipes data
	useEffect(() => {
		const unsubscribe = () => {
			favorites.forEach((favId) => {
				axiosCustomInstance
					.get(`/recipes/recipe/details/${favId}`)
					.then((res) => setRecipes((prev) => [...prev, res.data]));
			});
		};

		unsubscribe();
	}, [favorites]);

	useEffect(() => console.log(recipes), [recipes]);

	return (
		<div className='w-4/5 mx-auto mt-20'>
			<h3 className='w-1/4 text-2xl font-semibold text-black/80 border-b-2 border-Primary px-2'>
				Favorites:
			</h3>
			<div className='h-[27rem] mt-6 px-10'>
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
					{recipes.map((recipe) => (
						<SwiperSlide key={recipe._id}>
							<Favorite recipe={recipe} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
