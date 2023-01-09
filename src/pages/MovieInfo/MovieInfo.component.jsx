import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApiRequest } from "../../api/api";
import Cast from "../../components/Cast/Cast.component";
import {
	MiniPlaceholder,
	Placeholder,
	SinglePlaceholder,
} from "../../components/Placeholder";
import { SimilarMovies } from "../../components/SimilarMovies";
import "./MovieInfo.style.css";

const MovieInfo = () => {
	const BASE_IMG_URL = import.meta.env.VITE_APP_IMAGE;

	const { id } = useParams();

	const { data, error, isLoaded, setAcvtivePage } = useApiRequest(
		`movie/${id}`
	);

	if (error !== null) {
		return <h3 className="text-center mt-5">Nothing found.</h3>;
	}

	let Placeholders =
		Array(data?.data?.results?.length).fill() && Array(20).fill();

	let SimilarPlaceholder = Placeholders.slice(0, 5);
	return (
		<div>
			{isLoaded ? (
				<>
					<section
						className="movie"
						style={{
							backgroundImage: `url(
						${BASE_IMG_URL}w500/${data.data?.backdrop_path}
					)`,
							backgroundRepeat: "no-repeat",
						}}
					>
						<div className="movie_inner">
							<div className="container">
								<div className="movie_wrapper d-flex align-items-center">
									<img
										className="movie_poster"
										src={`${BASE_IMG_URL}w500/${data.data?.poster_path}`}
										alt="s"
									/>
									<div className="movie_info ms-5 w-75 text-white">
										<h2 className="fs-1">
											{data.data?.original_title} (
											{data.data?.release_date.slice(0, 4)})
										</h2>
										<p className="mb-5 ">
											{data.data?.release_date}
											{Object.values(data?.data?.genres || {}).map((genre) => (
												<span className="px-1 ms-2" key={genre?.name}>
													{genre?.name}
												</span>
											))}
										</p>
										<p>{data.data?.overview}</p>
										<form
											method="get"
											action="//www.google.com/"
											target="_blank"
										>
											<button className="btn bg-light">Watch Online</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
					<Cast id={id} />
					<SimilarMovies param="movie" path="similar" />
				</>
			) : (
				<div className="bg-dark">
					<SinglePlaceholder />
					<div className="container">
						<ul className="d-flex flex-wrap bg-dark mt-5">
							{Placeholders?.map((item, i) => (
								<MiniPlaceholder key={i} />
							))}
						</ul>
						<ul className="d-flex justify-content-center mt-5 flex-wrap bg-dark">
							{SimilarPlaceholder?.map((item, i) => (
								<Placeholder key={i} />
							))}
						</ul>
					</div>
				</div>
			)}
		</div>
	);
};

export default MovieInfo;
