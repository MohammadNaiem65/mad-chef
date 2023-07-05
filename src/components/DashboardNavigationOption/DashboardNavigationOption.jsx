import { useRef } from "react";
import { NavLink } from "react-router-dom";

const DashboardNavigationOption = ({ chef }) => {
	const linkRef = useRef(false);

	return (
		<NavLink
			to={`/dashboard/chefs/chef/${chef.id}`}
			ref={linkRef}
			className={({ isActive }) =>
				`p-3 mb-2 bg-Primary/40 font-semibold font-Vollokorn rounded flex justify-between items-center cursor-pointer hover:bg-Primary/70 ${
					isActive && "bg-Primary/70"
				}`
			}>
			<p>{chef.name}</p>
			<p className='px-3 bg-Primary/60 rounded-xl'>{chef.availableRecipes}</p>
		</NavLink>
	);
};

export default DashboardNavigationOption;
