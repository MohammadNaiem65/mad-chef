import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Header = () => {
	return ( 
		<div className="container px-0">
			<div className='flex justify-between items-center px-12'>
				<img src={logo} alt='Mad Chef logo' className='w-48' />
				<div className='flex gap-x-6 font-semibold text-lg'>
					<Link className='link-hover'>Home</Link>
					<Link className='link-hover'>Favorite</Link>
					<Link className='link-hover'>Blog</Link>
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
