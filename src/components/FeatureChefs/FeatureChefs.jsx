import React, { useEffect, useRef, useState } from "react";
import InvertedCard from "../InvertedCard/InvertedCard";

const FeatureChefs = () => {
	// Ref definitions
	const sectionRef = useRef(null);
	const titleRef = useRef(null);
	const upperCardsRef = useRef(null);
	const lowerCardsRef = useRef(null);
	// const btnRef = useRef(null);

	// States definitions
	const [sectionVisibility, setSectionVisibility] = useState(false);
	const [titleVisibility, setTitleVisibility] = useState(false);
	const [upperCardsVisibility, setUpperCardsVisibility] = useState(false);
	const [lowerCardsVisibility, setLowerCardsVisibility] = useState(false);
	// const [btnVisibility, setBtnVisibility] = useState(false);

	// Handling observer
	useEffect(() => {
		// Options definitions
		const featuredOptions = {
			threshold: 0,
			rootMargin: "0px 0px -150px 0px",
		};

		// const btnOptions = {
		// 	threshold: 0,
		// 	rootMargin: "0px",
		// };

		// Observer definitions
		const featuredSectionObserver = new IntersectionObserver((entries) => {
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
		}, featuredOptions);

		// const btnObserver = new IntersectionObserver((entries) => {
		// 	entries.forEach((entry) => {
		// 		if (entry.isIntersecting) {
		// 			setBtnVisibility(true);
		// 		} else setBtnVisibility(false);
		// 	});
		// }, btnOptions);

		// Setting observer
		featuredSectionObserver.observe(sectionRef.current);
		featuredSectionObserver.observe(titleRef.current);
		featuredSectionObserver.observe(upperCardsRef.current);
		featuredSectionObserver.observe(lowerCardsRef.current);
		// btnObserver.observe(btnRef.current);
	}, []);

	return (
		<div
			ref={sectionRef}
			className={`h-[100vh] mt-14 bg-[#495579] pt-10 duration-500 ${
				sectionVisibility
					? "opacity-100 translate-y-0"
					: "opacity-0 translate-y-7"
			}`}>
			<div className='w-4/5 mx-auto'>
				{/* Section title */}
				<h2
					ref={titleRef}
					className={`text-2xl text-center text-white font-semibold font-Vollokornn italic relative transform duration-500 z-50 ${
						titleVisibility
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-7"
					}`}>
					Country's
					<span className='font-semibold ml-3 relative cursor-pointer z-40 hover:text-white after:duration-200 after:contents-[""] after:h-[6px] after:w-[112%] after:bg-Accent after:absolute after:bottom-[2px] after:-left-[6px] after:-z-10 hover:after:h-[88%] '>
						Best Chefs
					</span>
					<br />
					on Mad Chef
				</h2>

				{/* Chef cards container */}
				<div className='mt-5 md:flex gap-3'>
					{/* Left side container */}
					<div className='md:w-1/2'>
						{/* Upper Cards */}
						<div
							ref={upperCardsRef}
							className={`flex gap-2 duration-500 ${
								upperCardsVisibility
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-7"
							}`}>
							<InvertedCard />
							<InvertedCard />
						</div>

						{/* Lower card */}
						<div
							ref={lowerCardsRef}
							className={`h-56 bg-blue-600 mt-2 grid place-content-center arrow-container duration-500 ${
								lowerCardsVisibility
									? "opacity-100 translate-y-0"
									: "opacity-0 translate-y-7"
							}`}></div>
					</div>

					{/* Right side container */}
					<div className='w-1/2 flex-grow bg-cyan-300 '></div>
				</div>

				{/* <button
					ref={btnRef}
					className={`btn btn-primary mt-3 mx-auto duration-500 ${
						btnVisibility
							? "opacity-100 translate-y-0"
							: "opacity-0 translate-y-7"
					}`}>
					View All
				</button> */}
			</div>
		</div>
	);
};

export default FeatureChefs;
