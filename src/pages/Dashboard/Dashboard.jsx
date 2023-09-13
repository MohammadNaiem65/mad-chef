import { Helmet } from 'react-helmet';
import DashboardNavigationBar from './DashboardNavigationBar/DashboardNavigationBar';
import { Outlet, useLoaderData } from 'react-router-dom';

const Dashboard = () => {
	// ! Required variables
	const chefs = useLoaderData();

	return (
		<div className='container min-h-fit grid grid-cols-3 gap-x-6'>
			{/* Set title */}
			<Helmet>
				<title>Dashboard || Mad Chef</title>
			</Helmet>
			<DashboardNavigationBar chefs={chefs.data} />
			<div className='col-span-2'>
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
