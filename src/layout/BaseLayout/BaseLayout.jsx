import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

// This is the main layout and all the pages goes into the Base layout.
const BaseLayout = () => {
	const [spinnerStatus, setSpinnerStatus] = useState(false);
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<div
				className={`w-full h-[100vh] flex items-center justify-center fixed top-0 ${spinnerStatus ? "block" : "hidden"}`}>
				<div className='w-16 h-16 border-b-4 border-Primary rounded-full animate-spin'></div>
			</div>
		</>
	);
};

export default BaseLayout;
