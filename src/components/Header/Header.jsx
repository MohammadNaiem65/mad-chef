import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import HeaderActiveLink from "../HeaderActiveLink/HeaderActiveLink";

const Header = () => {
	// State status to show navigation bar.
	const [navOptionsStatus, setNavOptionsStatus] = useState(false);

	return (
		<div className='md:container'>
			<div className='flex justify-between items-center px-12 relative'>
				<Link to='/'>
					<img src={logo} alt='Mad Chef logo' className='w-32 md:w-48' />
				</Link>
				<p className='text-xl block md:hidden absolute right-14 duration-300 cursor-pointer'>
					{navOptionsStatus ? (
						<FaTimes onClick={() => setNavOptionsStatus(!navOptionsStatus)} />
					) : (
						<FaBars onClick={() => setNavOptionsStatus(!navOptionsStatus)} />
					)}
				</p>
				<div
					className={`${
						navOptionsStatus ? "top-24 p-3 rounded" : "-top-28"
					} font-semibold font-Vollokorn text-lg md:bg-transparent absolute right-14 md:static flex flex-col md:flex-row gap-x-6  transform md:translate-y-0 duration-300 ease-out`}>
					<HeaderActiveLink to='/'>Home</HeaderActiveLink>
					<HeaderActiveLink to='/dashboard'>Dashboard</HeaderActiveLink>
					<Link to='/'>Blog</Link>
					<p>
						<Link className='link-hover'>Login</Link>/{""}
						<Link className='link-hover'>Sign In</Link>
					</p>
				</div>
			</div>
			<div className='h-[2px] bg-gray-300'></div>
		</div>
	);
};

export default Header;
