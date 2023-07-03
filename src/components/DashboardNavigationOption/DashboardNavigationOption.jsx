import { Link } from "react-router-dom";

const DashboardNavigationOption = ({ chef }) => {
	return (
		<Link
			to={`/dashboard/chefs/chef/${chef.id}`}
			className='p-3 mb-2 bg-Primary/40 font-semibold font-Vollokorn rounded flex justify-between items-center cursor-pointer hover:bg-Primary/60'>
			<p>{chef.name}</p>
			<p className='px-3 bg-Primary/60 rounded-xl'>{chef.availableRecipes}</p>
		</Link>
	);
};

export default DashboardNavigationOption;
