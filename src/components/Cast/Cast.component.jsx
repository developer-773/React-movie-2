import { NavLink, Route, Routes, useParams } from "react-router-dom";
import { PATH } from "../../constants/paths";
import { Reviews } from "../../pages/MovieInfo/Reviews";
import { Trailers } from "../../pages/MovieInfo/Trailers";
import CastList from "./CastList.component";

const Cast = ({ id}) => {
	return (
		<>
			<section className="bg-dark">
				<div className="container">
					<ul className="d-flex flex-wrap">
						<li className="movie_info_item">
							<NavLink className={({ isActive }) =>
									isActive ? "active nav-link" : "inactive nav-link"
								} to={`/movie/${id}/`}>
								Creators
							</NavLink>
						</li>
						<li className="movie_info_item" >
							<NavLink to="trailers" className={({ isActive }) =>
									isActive ? "active nav-link" : "inactive nav-link"
								}>
								Trailer
							</NavLink>
						</li>
						<li className="movie_info_item" >
							<NavLink to="reviews" className={({ isActive }) =>
									isActive ? "active nav-link" : "inactive nav-link"
								}>
								Reviews
							</NavLink>
						</li>
					</ul>
					<Routes>
						<Route index element={<CastList />} />
						<Route path="trailers" element={<Trailers />} />
						<Route path="reviews" element={<Reviews />}/>
					</Routes>
				</div>
			</section>
		</>
	);
};

export default Cast;
