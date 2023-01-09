import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../assets/styles/globalStyle";
import { LoginForm } from "../Auth/Login";
import { RegisterForm } from "../Auth/Register";
import { Actor } from "../components/Actor/Actor.component";
import { Footer } from "../components/Footer/Footer.component";
import { Header } from "../components/Header/Header.component";
import { Main } from "../components/Main/Main";
import { PATH } from "../constants/paths";
import { AuthContext } from "../context";
import { MovieInfo } from "../pages/MovieInfo";
import Popular from "../pages/Popular/Popular.component";
import TopRated from "../pages/TopRated/TopRated.component";
import Upcoming from "../pages/Upcoming/Upcoming.component";
import { Search } from "../Search";

export const Routess = () => {

	const {user, setUser} = useContext(AuthContext)


	return (
		<BrowserRouter>
			<GlobalStyle />
			<Header />
			<Routes>
				<Route path={PATH.HOME} element={<Main />} />
				<Route path={`${PATH.MOVIE}/:id/*`} element={<MovieInfo />} />
				<Route path={PATH.TOP_RATED } element={<TopRated />} />
				<Route path={`${PATH.TOP_RATED}/:id/*`} element={<MovieInfo />} />
				<Route path={PATH.UPCOMING} element={<Upcoming />} />
				<Route path={`${PATH.UPCOMING}/:id/*`} element={<MovieInfo />} />
				<Route path={PATH.POPULAR} element={<Popular />} />
				<Route path={`${PATH.POPULAR}/:id/*`} element={<MovieInfo />} />
				<Route path={`${PATH.ACTOR}/:id/*`} element={<Actor />}/>
				<Route path={`${PATH.REGISTER}`} element={ user ? <Navigate to={`${PATH.HOME}`} replace={true} /> : <RegisterForm />} />
				<Route path={`${PATH.LOGIN}`} element={<LoginForm />}/>
				<Route path={`${PATH.SEARCH}`} element={<Search />}/>
				<Route path={`${PATH.SEARCH}/:id/*`} element={<MovieInfo />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};
