import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout/BaseLayout";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "/",
			},
		],
	},
]);
