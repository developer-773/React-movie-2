import React from "react";
import { Link, useParams } from "react-router-dom";
import { PATH } from "../../constants/paths";
import "./SimilarMovies.styles.css"
 

const SimilarMovieItem = ({ poster_path, original_title, id}) => {
	const BASE_IMG_URL = import.meta.env.VITE_APP_IMAGE;

	return (
		<div
			className="movie_box m-4 position-relative border-0"
			style={{ width: "246px" }}
		>
			<Link to={`/${PATH.MOVIE}/${id}`}>
				<img
					width="150"
					src={BASE_IMG_URL + "w500" + poster_path}
					className="card-img-top rounded"
					alt={original_title}
				/>
			</Link>
			<div className="movie_txt position-absolute text-white">
				<h4>{original_title}</h4>
			</div>
		</div>
	);
};

export default SimilarMovieItem;
