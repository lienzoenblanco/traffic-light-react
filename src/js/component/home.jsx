import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	// const addColor = ;
	return (
		<div className="container">
			<div className="post"></div>
			<div className="traffic-light">
				<div
					onClick={() => setSelectedColor("red")}
					className={
						"light red" +
						(selectedColor === "red" ? " glow" : " off")
					}></div>
				<div
					onClick={() => setSelectedColor("yellow")}
					className={
						"light yellow" +
						(selectedColor === "yellow" ? " glow" : " off")
					}></div>
				<div
					onClick={() => setSelectedColor("green")}
					className={
						"light green" +
						(selectedColor === "green" ? " glow" : " off")
					}></div>
			</div>
		</div>
	);
};

export default Home;
