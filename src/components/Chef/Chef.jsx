import React from "react";
import { useLoaderData } from "react-router-dom";

const Chef = () => {
	const chef = useLoaderData();
	return (
		<div>
			<p>chef {chef.name}</p>
		</div>
	);
};

export default Chef;
