import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApiRequest } from "../../api/api";
import CastItem from "./CastItem.component";

const CastList = () => {
	const { id } = useParams();
	const { data } = useApiRequest(`movie/${id}/credits`);

	return (
		<>
			<h5 className="text-secondary my-3">Cast:</h5>
			<ul className="d-flex flex-wrap movie_cast_list">
				{data?.data?.cast?.map((creator) => (
					<CastItem key={creator.id} {...creator} />
				))}
			</ul>
			<h5 className="text-secondary my-3">Crews: </h5>
			<ul className="d-flex flex-wrap movie_cast_list">
				{data?.data?.crew?.map((creator, i) => (
					<CastItem key={i} {...creator} />
				))}
			</ul>
		</>
	);
};

export default CastList;
