import { useEffect, useState } from 'react';
import axiosCustomInstance from '../../../axios/axiosCustomInstance';
import Recipe from '../../shared/Recipe/Recipe';

export default function Favorites({ favorites }) {
    // ! Required variables
	const [recipes, setRecipes] = useState([]);

	useEffect(() => {
		const fetchRecipes = async () => {
			const recipePromises = favorites.map((favId) =>
				axiosCustomInstance
					.get(`/recipes/recipe/details/${favId}`)
					.then((res) => res.data)
			);

			const recipeDetails = await Promise.all(recipePromises);

			setRecipes(recipeDetails);
		};

		return () => {
			fetchRecipes();
		};
	}, [favorites]);

	return (
		<section className='w-4/5 mx-auto mt-20'>
			<h3 className='w-1/4 text-2xl font-semibold text-black/80 border-b-2 border-Primary px-2'>
				Consults:
			</h3>
			<div className='ml-10 mt-5'>
				{recipes.map((recipe) => (
					<Recipe key={recipe._id} recipe={recipe} />
				))}
			</div>
		</section>
	);
}
