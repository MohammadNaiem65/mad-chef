import DashboardNavigationBar from "../../components/DashboardNavigationBar/DashboardNavigationBar";
import { Outlet, useLoaderData } from "react-router-dom";

const Dashboard = () => {
	const chefs = useLoaderData();
	return (
		<div className='container min-h-fit grid grid-cols-3 gap-x-6'>
			<DashboardNavigationBar chefs={chefs} />
			<div className='col-span-2'>
				<Outlet />
			</div>
		</div>
	);
};

export default Dashboard;
