import React from "react";
import { useParams } from "react-router-dom";
import { useApiRequest } from "../../api/api";
import SimilarMovieItem from "./SimilarMovieItem.component";
import "./SimilarMovies.styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SimilarMovies = ({ param = "", path, get }) => {
	const { id } = useParams();
	const { data, isLoaded } = useApiRequest(`${param}/${id}/${path}`);

	const settings = {
		arrows: false,
		infinite: true,
		speed: 600,
		slidesToShow: 5,
		slidesToScroll: 4,
	};

	return (
		<section className="similar bg-dark">
			<h3>Similar</h3>
			<ul className="list-unstyled">
				<Slider {...settings}>
					{data?.data?.results
						? data?.data?.results?.map((similar) => (
								<SimilarMovieItem
									id={similar.id}
									key={similar.id}
									original_title={similar?.original_title}
									poster_path={similar?.poster_path}
								/>
						  ))
						: data?.data?.cast?.map((similar) => (
								<SimilarMovieItem
									id={similar.id}
									key={similar.id}
									original_title={similar?.original_title}
									poster_path={similar?.poster_path}
								/>
						  ))}
				</Slider>
			</ul>
		</section>
	);
};

export default SimilarMovies;
