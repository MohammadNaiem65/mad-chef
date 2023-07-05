import Header from "../../components/Header/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

// This is the main layout and all the pages goes into the Base layout.
const BaseLayout = () => {
	const navigation = useNavigation()
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
			<div
				className={`w-full h-[100vh] flex items-center justify-center fixed top-0 ${navigation.state === "loading" ? "block" : "hidden"}`}>
				<div className='w-16 h-16 border-b-4 border-Primary rounded-full animate-spin'></div>
			</div>
		</>
	);
};

export default BaseLayout;
