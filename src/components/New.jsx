import React, { useState, useRef, useEffect } from "react";

function New() {
	const [isVisible, setIsVisible] = useState(false);
	const elementRef = useRef(null);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "0px 0px -10px 0px",
			threshold: 0.5,
		};

		const observer = new IntersectionObserver((entries) => {
			const [entry] = entries;
			setIsVisible(entry.isIntersecting);
		}, options);

		if (elementRef.current) {
			observer.observe(elementRef.current);
		}

		return () => {
			if (elementRef.current) {
				observer.unobserve(elementRef.current);
			}
		};
	}, []);

	return (
		<div>
			<div style={{ height: "100vh" }}>Scroll down</div>
			<div
				ref={elementRef}
				style={{
					height: "100px",
					backgroundColor: isVisible ? "green" : "red",
				}}>
				{isVisible ? "Visible" : "Not Visible"}
			</div>
		</div>
	);
}

export default New;
