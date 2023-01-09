import React from "react";
import CardItem from "./CardItem.component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardList = ({ data, path }) => {

	return (
		<>
		<ul className=" d-flex flex-wrap gap-3">
			{data?.results?.map((item, i) => (
				<CardItem key={i} {...item} path={path} />
				))}
		</ul>
				</>
	);
};

export default CardList;
