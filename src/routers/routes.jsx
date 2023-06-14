import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout/BaseLayout";
import App from "../App";

export const routes = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "/",
				element: <App />,
			},
		],
	},
]);
