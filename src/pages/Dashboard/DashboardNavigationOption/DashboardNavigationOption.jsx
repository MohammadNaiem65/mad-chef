import { NavLink } from 'react-router-dom';

const DashboardNavigationOption = ({ chef }) => {

	return (
		<NavLink
			to={`/dashboard/chefs/chef/${chef._id}`}
			className={({ isActive }) =>
				`p-3 mb-2 font-semibold font-Vollokorn rounded flex justify-between items-center cursor-pointer hover:bg-Primary/70 ${
					isActive ? 'bg-Primary/90' : 'bg-Primary/40'
				}`
			}>
			<p>{chef.name}</p>
			<p className='px-3 bg-Primary/60 rounded-xl'>
				{chef.availableRecipes.length}
			</p>
		</NavLink>
	);
};

export default DashboardNavigationOption;
