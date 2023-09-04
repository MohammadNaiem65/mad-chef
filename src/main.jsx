import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { mainRoutes } from './routers/mainRoutes';
import AuthProvider from './providers/authProvider/authProvider';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<AuthProvider>
			<RouterProvider router={mainRoutes} />
		</AuthProvider>
	</React.StrictMode>
);
