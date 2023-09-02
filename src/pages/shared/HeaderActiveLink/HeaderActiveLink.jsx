import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeaderActiveLink = ({ to, children }) => {
	const childVariant = {
		initial: {
			y: '30vh',
			transition: {
				duration: 0.5,
				ease: [0.37, 0, 0.63, 1],
			},
		},
		final: {
			y: 0,
			transition: {
				duration: 0.7,
				ease: [0, 0.55, 0.45, 1],
			},
		},
	};

	return (
		<motion.p variants={childVariant} initial='initial' animate='final' exit='initial'>
			<NavLink
				to={to}
				className={({ isActive }) =>
					`link-hover ${isActive && 'text-Primary'}`
				}>
				{children}
			</NavLink>
		</motion.p>
	);
};

export default HeaderActiveLink;
