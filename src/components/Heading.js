import React from "react";

function Heading() {
	const date = new Date();
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];
	const month = months[date.getMonth()];
	const year = date.getFullYear();

	return (
		<h1 className="heading-date">
			{month}, {year}
		</h1>
	);
}

export default Heading;
