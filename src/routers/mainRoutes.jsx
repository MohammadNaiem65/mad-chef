import { createBrowserRouter } from 'react-router-dom';
import BaseLayout from '../layout/BaseLayout/BaseLayout';
import Home from '../pages/Home/Home';
import Chef from '../pages/Dashboard/Chef/Chef';
import Recipes from '../pages/Dashboard/Recipes/Recipes';
import RecipeDetails from '../pages/Dashboard/RecipeDetails/RecipeDetails';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Blog from '../pages/Blog/Blog';
import Consult from '../pages/Consult/Consult';
import SignUp from '../pages/Authentication/SignUp/SignUp';
import Login from '../pages/Authentication/Login/Login';
import UserDashboard from '../pages/UserDashboard/UserDashboard';
import Dashboard from '../pages/Dashboard/Dashboard';

export const mainRoutes = createBrowserRouter([
	{
		path: '/',
		element: <BaseLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: '/',
				element: <Home />,
				loader: () => fetch('http://localhost:5000/reviews'),
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
				loader: () => fetch('http://localhost:5000/chefs/name'),
				children: [
					{
						path: '/dashboard',
						element: (
							<p className='p-3 font-semibold text-gray-500'>
								Click on a option to see details.
							</p>
						),
					},
					{
						path: '/dashboard/chefs/chef/:id',
						element: <Chef />,
						loader: ({ params }) =>
							fetch(
								`http://localhost:5000/chefs/chef/${params.id}`
							),
						children: [
							{
								path: '/dashboard/chefs/chef/:id',
								element: <Recipes />,
								loader: ({ params }) =>
									fetch(
										`http://localhost:5000/chefs/chef/recipes/${params.id}`
									),
							},
							{
								path: '/dashboard/chefs/chef/:id/recipe-details',
								element: <RecipeDetails />,
							},
						],
					},
				],
			},
			{
				path: '/user-dashboard',
				element: <UserDashboard />,
			},
			{
				path: '/consult',
				element: <Consult />,
			},
			{
				path: '/blog',
				element: <Blog />,
			},
			{
				path: '/sign-up',
				element: <SignUp />,
			},
			{
				path: '/login',
				element: <Login />,
			},
		],
	},
]);
