import { NavLink } from "react-router-dom";

const HeaderActiveLink = ({ to, children }) => {
	return (
		<NavLink
			to={to}
			className={({ isActive }) => `link-hover ${isActive && "text-Primary"}`}>
			{children}
		</NavLink>
	);
};

export default HeaderActiveLink;
