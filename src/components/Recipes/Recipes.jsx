import { useLoaderData } from "react-router-dom";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {
	const recipes = useLoaderData();

	return (
		<>
            <h3 className="font-semibold font-Vollokorn text-lg">Recipes:</h3>
			{recipes.map((recipe) => (
				<Recipe key={recipe.id} recipe={recipe} />
			))}
		</>
	);
};

export default Recipes;
