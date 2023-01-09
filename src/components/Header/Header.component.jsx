import React, { useCallback, useContext, useEffect, useMemo, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useApiRequest } from "../../api/api";
import { PATH } from "../../constants/paths";
import { AuthContext } from "../../context";
import { QueryContext } from "../../context/QueryContext";
import  {Debounce}  from "../../utils";
import "./Header.style.css";

export const Header = () => {

	const {  error, isLoaded, data, setAcvtivePage, setSearch  } = useApiRequest(`search/movie`);
	const { user, setUser } = useContext(AuthContext);
	const {query, setQuery} = useContext(QueryContext)
	const inputRef=useRef()
	const navigate=useNavigate()
	let fN, lN;
	
	try {
		fN = user?.data[0]?.first_name.charAt(0)
		lN = user?.data[0]?.last_name.charAt(0)
	} catch (error) {}


	const handleFormChange = () => {
		setQuery(data?.data)
		setSearch(inputRef.current.value.toLowerCase())
		navigate(`${PATH.SEARCH}`)
	}

	const SearchFn = (Debounce(handleFormChange))


	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid">
				<NavLink className="navbar-brand text-white fs-2" to={"/"}>
					React Movie
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse " id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "active nav-link" : "inactive nav-link"
								}
								to="/top_rated"
							>
								Top Rated
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active" : "nav-link inactive"
								}
								to="/upcoming"
							>
								Upcoming
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink
								className={({ isActive }) =>
									isActive ? "nav-link active" : "nav-link inactive"
								}
								to="/popular"
							>
								Popular
							</NavLink>
						</li>
					</ul>
					<form className="d-flex me-3" role="search" >
						<input
							className="form-control me-2"
							type="search"
							placeholder="Search"
							aria-label="Search"
							ref={inputRef}
							onChange={SearchFn}
						/>
						<button className="btn btn-outline-success" type="submit">
							Search
						</button>
					</form>
					{user ? 
					<span className="text-white rounded-pill p-3 bg-secondary" style={{cursor: "pointer"}}>{fN+lN}</span>
					 : null}
				</div>
			</div>
		</nav>
	);
};
