import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Chef from "../components/Chef/Chef";
import Recipes from "../components/Recipes/Recipes";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";

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
						element: (
							<p className='p-3 font-semibold text-gray-500'>
								Click on a option to see details.
							</p>
						),
					},
					{
						path: "/dashboard/chefs/chef/:id",
						element: <Chef />,
						loader: ({ params }) =>
							fetch(`http://localhost:5000/chefs/chef/${params.id}`),
						children: [
							{
								path: "/dashboard/chefs/chef/:id",
								element: <Recipes />,
								loader: ({ params }) =>
									fetch(
										`http://localhost:5000/chefs/chef/recipes/${params.id}`
									),
							},
							{
								path: "/dashboard/chefs/chef/:id/recipe-details",
								element: <RecipeDetails />,
							},
						],
					},
				],
			},
		],
	},
]);
