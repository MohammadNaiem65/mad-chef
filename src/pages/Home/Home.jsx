import Banner from './Banner/Banner';
import Newsletter from './Newsletter/Newsletter';
import FeatureChefs from './FeatureChefs/FeatureChefs';
import Review from './Review/Review';
import { Helmet } from 'react-helmet';

const Home = () => {
	return (
		<>
			{/* Set title */}
			<Helmet>
				<title>Home || Mad Chef</title>
			</Helmet>
			<Banner />
			<FeatureChefs />
			<Review />
			<Newsletter />
		</>
	);
};

export default Home;
