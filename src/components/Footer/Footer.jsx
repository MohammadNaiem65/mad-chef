import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
	const [loggedIN, setLoggedIn] = useState(false);
	return (
		<div className='h-64 mt-16 px-[10%] bg-[#495579] text-stone-300 grid grid-cols-6'>
			<div className='col-span-4'>
				<img className='w-32 md:w-48' src={logo} alt='logo of mad chef' />
				<p className='w-2/5 ml-3 text-sm font-Popins'>
					Mad Chef is the perfect way to find and order food from countries best
					chefs. Mad Chef can help you find the perfect meal for any occasion.
				</p>
			</div>
			<div className='mt-10 mr-5 col-span-1'>
				<h4 className='font-semibold font-Popins text-lg'>Useful links</h4>
				<div
					className={`mt-3 ${
						loggedIN ? "top-24 bg-Secondary p-3 rounded" : "-top-28"
					} font-Vollokorn text-lg md:bg-transparent absolute right-14 md:static flex flex-col transform md:translate-y-0 duration-300 ease-out`}>
					<Link className='w-fit link-hover'>Home</Link>
					<Link className='w-fit link-hover'>Favorite</Link>
					<Link className='w-fit link-hover'>Blog</Link>
					<p>
						<Link className='w-fit link-hover'>Login </Link>/{""}
						<Link className='w-fit link-hover'>Sign In</Link>
					</p>
				</div>
			</div>
			<div className='mt-10 mr-5 col-span-1'>
				<h4 className='font-semibold font-Popins text-lg'>Quick links</h4>
				<div className='mt-3  font-Vollokorn text-lg flex flex-col'>
					<Link className='w-fit link-hover'>Our Blog</Link>
					<Link className='w-fit link-hover'>Top Rated Chef</Link>
					<Link className='w-fit link-hover'>Most Liked Recipes</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
