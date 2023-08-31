import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className='md:h-64 mt-16 px-[5%] bg-[#495579] text-stone-300 md:flex'>
			<div className=''>
				{" "}
				{/* Left Side Container */}
				<img className='w-48' src={logo} alt='logo of mad chef' />
				<p className='md:w-2/5 ml-3 text-sm font-Popins'>
					Mad Chef is the perfect way to find and order food from countries best
					chefs. Mad Chef can help you find the perfect meal for any occasion.
				</p>
			</div>

			{/* Right side Containers */}
			<div className='mt-10 mr-16'>
				<h4 className='font-semibold font-Popins text-lg'>Useful links</h4>
				<div className='mt-3 font-Vollokorn text-lg flex flex-col'>
					<Link to='/' className='w-fit link-hover'>
						Home
					</Link>
					<Link to='/dashboard' className='w-fit link-hover'>
						Dashboard
					</Link>
					<Link to='/' className='w-fit link-hover'>
						Blog
					</Link>
					<p>
						<Link className='w-fit link-hover'>Login </Link>/{""}
						<Link className='w-fit link-hover'>Sign In</Link>
					</p>
				</div>
			</div>
			<div className='mt-10'>
				<h4 className='font-semibold font-Popins text-lg'>Quick links</h4>
				<div className='mt-3  font-Vollokorn text-lg flex flex-col'>
					<Link to='/' className='w-fit link-hover'>
						Our Blog
					</Link>
					<Link to='/' className='w-fit link-hover'>
						Top Rated Chef
					</Link>
					<Link to='/' className='w-fit link-hover'>
						Most Liked Recipes
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
