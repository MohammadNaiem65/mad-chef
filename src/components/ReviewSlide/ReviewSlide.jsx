import React from 'react';

const ReviewSlide = ({num}) => {
    return (
			<div
				className={`h-96 w-full flex justify-center items-center ${
					num == 1 ? "bg-red-500" : num == 2 ? "bg-green-500" : "bg-blue-500"
				}`}>
				<h1>review slide {num}</h1>
			</div>
		);
};

export default ReviewSlide;