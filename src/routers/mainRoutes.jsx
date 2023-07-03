import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Chef from "../components/Chef/Chef";

export const mainRoutes = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
				loader: () => fetch("http://localhost:5000/chefs/name"),
				children: [
					{
						path: "/dashboard",
						element: <p className='p-3 font-semibold'>Nothing to see here.</p>,
					},
					{
						path: "/dashboard/chefs/chef/:id",
						element: <Chef />,
						loader: ({ params }) =>
							fetch(`http://localhost:5000/chefs/chef/${params.id}`),
					},
				],
			},
		],
	},
]);
