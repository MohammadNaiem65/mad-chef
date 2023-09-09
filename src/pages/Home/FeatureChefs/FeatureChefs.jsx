import { useEffect, useRef, useState } from 'react';
import InvertedCard from '../InvertedCard/InvertedCard';
import LargeCard from '../LargeCard/LargeCard';
import axiosCustomInstance from '../../../axios/axiosCustomInstance';

const FeatureChefs = () => {
	const [chefs, setChefs] = useState([]);

	useEffect(() => {
		axiosCustomInstance.get('/top-chefs').then((res) => setChefs(res.data));
	}, []);

	// Ref definitions
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const upperCardsRef = useRef(null);
	const lowerCardsRef = useRef(null);

	// States definitions
	const [sectionVisibility, setSectionVisibility] = useState(false);
	const [titleVisibility, setTitleVisibility] = useState(false);
	const [upperCardsVisibility, setUpperCardsVisibility] = useState(false);
	const [lowerCardsVisibility, setLowerCardsVisibility] = useState(false);

	// Handling observer
	useEffect(() => {
		if (window.innerWidth >= 1024) {
			// Observer definitions
			const featuredSectionObserver = new IntersectionObserver(
				(entries) => {
					entries.forEach((entry) => {
						// Checking for section
						if (entry.target === sectionRef.current) {
							if (entry.isIntersecting) {
								setSectionVisibility(true);
							} else setSectionVisibility(false);
						} else if (entry.target === titleRef.current) {
							if (entry.isIntersecting) {
								setTitleVisibility(true);
							} else setTitleVisibility(false);
						} else if (entry.target === upperCardsRef.current) {
							if (entry.isIntersecting) {
								setUpperCardsVisibility(true);
							} else setUpperCardsVisibility(false);
						} else if (entry.target === lowerCardsRef.current) {
							if (entry.isIntersecting) {
								setLowerCardsVisibility(true);
							} else setLowerCardsVisibility(false);
						}
					});
				},
				{ rootMargin: '0px 0px -150px 0px' }
			);

			// Setting observer
			featuredSectionObserver.observe(sectionRef.current);
			featuredSectionObserver.observe(titleRef.current);
			featuredSectionObserver.observe(upperCardsRef.current);
			featuredSectionObserver.observe(lowerCardsRef.current);
		} else {
			setSectionVisibility(true);
			setTitleVisibility(true);
			setUpperCardsVisibility(true);
			setLowerCardsVisibility(true);
		}

		return () => {};
	}, []);

	return (
		<div
			ref={sectionRef}
			className={`min-h-[100vh] mt-14 bg-[#495579] pt-10 pb-10 md:pb-0 duration-500 ${
				sectionVisibility
					? 'opacity-100 translate-y-0'
					: 'opacity-0 translate-y-7'
			}`}>
			<div className='w-4/5 mx-auto'>
				{/* Section title */}
				<h2
					ref={titleRef}
					className={`text-2xl text-center text-white font-semibold font-Vollokornn italic relative transform duration-500 z-50 ${
						titleVisibility
							? 'opacity-100 translate-y-0'
							: 'opacity-0 translate-y-7'
					}`}>
					America's
					<span className='font-semibold ml-3 relative cursor-pointer z-40 hover:text-white after:duration-200 after:contents-[""] after:h-[6px] after:w-[112%] after:bg-Accent after:absolute after:bottom-[2px] after:-left-[6px] after:-z-10 hover:after:h-[88%] '>
						Best Chefs
					</span>
					<br />
					are on Mad Chef
				</h2>

				{/* Chef cards container */}
				<div className='mt-5 md:flex gap-3'>
					{/* Left side container */}
					<div className='md:w-1/2 mb-5 md:mb-0'>
						{/* Upper Cards */}
						<div ref={upperCardsRef} className='md:flex gap-2'>
							{chefs.toSpliced(2, 6).map((chef) => (
								<div
									key={chef._id}
									className={`w-full md:w-1/2 h-[22.5rem] mb-5 md:mb-0 duration-500 ${
										upperCardsVisibility
											? 'opacity-100 translate-y-0'
											: 'opacity-0 translate-y-7'
									}`}>
									<InvertedCard chef={chef} />
								</div>
							))}
						</div>

						{/* Lower card */}
						<div
							ref={lowerCardsRef}
							className={`md:h-56 mt-5 md:mt-2 duration-500 ${
								lowerCardsVisibility
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-7'
							}`}>
							<LargeCard chef={chefs[2]} key={1} />
						</div>
					</div>

					{/* Right side container */}
					<div className='md:w-1/2'>
						{/* Upper Cards */}
						<div
							ref={upperCardsRef}
							className={`md:h-56 duration-500 ${
								upperCardsVisibility
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-7'
							}`}>
							<LargeCard chef={chefs[3]} key={2} />
						</div>

						{/* Lower cards */}
						<div
							ref={lowerCardsRef}
							className='mt-5 md:mt-2 md:flex gap-2'>
							{chefs.slice(-2).map((chef) => (
								<div
									key={chef._id}
									className={`md:w-1/2 h-[22.5rem] duration-500 ${
										lowerCardsVisibility
											? 'opacity-100 translate-y-0'
											: 'opacity-0 translate-y-7'
									}`}>
									<InvertedCard chef={chef} />
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeatureChefs;
