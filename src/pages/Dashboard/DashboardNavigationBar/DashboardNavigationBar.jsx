import DashboardNavigationOption from '../DashboardNavigationOption/DashboardNavigationOption';

const DashboardNavigationBar = ({ chefs }) => {
	return (
		<div className='h-fit p-6 bg-Primary/20 rounded'>
			{chefs.map((chef) => (
				<DashboardNavigationOption key={chef._id} chef={chef} />
			))}
		</div>
	);
};

export default DashboardNavigationBar;
