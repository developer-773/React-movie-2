import React from "react";
import { Link } from "react-router-dom";
import "./CastItem.style.css";

const CastItem = ({
	name,
	character,
	profile_path,
	known_for_department,
	id,
}) => {

	const BASE_IMG_URL = import.meta.env.VITE_APP_IMAGE;
	
	return (
		<>
			{profile_path ? (
				<li className="movie_cast_item">
					<Link to={`/person/${id}/cast`}>
						<div className="d-flex align-items-center">
							<img src={`${BASE_IMG_URL}w300${profile_path}`} alt="" />
							<div className="ms-2 text-white">
								<h6 className="mb-0">{name}</h6>
								<p className="mb-0">{known_for_department}</p>
							</div>
						</div>
					</Link>
				</li>
			) : null}
		</>
	);
};

export default CastItem;
