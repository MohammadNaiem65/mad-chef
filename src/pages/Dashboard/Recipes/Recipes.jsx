import { useLoaderData } from 'react-router-dom';
import Recipe from '../../shared/Recipe/Recipe';

const Recipes = () => {
	// ! Required variables
	const recipes = useLoaderData();

	return (
		<>
			<h3 className='font-semibold font-Vollokorn text-lg'>Recipes:</h3>
			{recipes.data.map((recipe) => (
				<Recipe key={recipe._id} recipe={recipe} />
			))}
		</>
	);
};

export default Recipes;
