import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../pages/Dashboard/Dashboard";
import Chef from "../components/Chef/Chef";
import Recipes from "../components/Recipes/Recipes";
import RecipeDetails from "../components/RecipeDetails/RecipeDetails";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const mainRoutes = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />,
				loader: () => fetch("https://mad-chef-server.vercel.app/reviews"),
			},
			{
				path: "/dashboard",
				element: <Dashboard />,
				loader: () => fetch("https://mad-chef-server.vercel.app/chefs/name"),
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
							fetch(
								`https://mad-chef-server.vercel.app/chefs/chef/${params.id}`
							),
						children: [
							{
								path: "/dashboard/chefs/chef/:id",
								element: <Recipes />,
								loader: ({ params }) =>
									fetch(
										`https://mad-chef-server.vercel.app/chefs/chef/recipes/${params.id}`
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
