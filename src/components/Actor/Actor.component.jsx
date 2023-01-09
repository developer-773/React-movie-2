import React from "react";
import { useParams } from "react-router-dom";
import { useApiRequest } from "../../api/api";
import { ActorMovies } from "./ActorMovies.component";

export const Actor = () => {
	const { id } = useParams();
	const { data, error, isLoaded } = useApiRequest(
		`person/${id}`
	);

	const BASE_IMG_URL = import.meta.env.VITE_APP_IMAGE;

	return (
		<>
			<section
				className="movie"
				style={{
					backgroundImage: `url(
						${BASE_IMG_URL}w500/${data.data?.profile_path}
					)`,
					backgroundRepeat: "no-repeat",
				}}
			>
				<div className="movie_inner">
					<div className="container">
						<div className="movie_wrapper d-flex align-items-center">
							<img
								className="movie_poster"
								src={`${BASE_IMG_URL}w500/${data?.data?.profile_path}`}
								alt="s"
							/>
							<div className="movie_info ms-5 w-75 text-white">
								<h2 className="fs-1">{data?.data?.name}</h2>
								<p className="mb-5 fs-3">{data?.data?.biography}</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			<ActorMovies />
		</>
	);
};
