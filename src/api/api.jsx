import axios from "axios";
import { useEffect, useMemo, useState } from "react";
const API_KEY = import.meta.env.VITE_APP_API_KEY;
const BASE_URL = import.meta.env.VITE_APP_API_URL;

export const useApiRequest = (path) => {
	const [data, setData] = useState([]);
	const [acvtivePage, setAcvtivePage] = useState(1);
	const [search, setSearch] = useState("")
	const [isLoaded, setIsLoaded] = useState(false);
	const [error, setError] = useState(null);


	useEffect(() => {
		const fetchData = () => {
			axios
				.get(BASE_URL + `/${path}`, {
					params: {
						api_key: API_KEY,
						page: acvtivePage,
						query: search
					},
				})
				.then((res) => {
					setIsLoaded(true);
					setData(res);
				})
				.catch((error) => {
					setError(error);
				});
		};
		fetchData();
	}, [path, acvtivePage, search]);
	return { error, isLoaded, data, setAcvtivePage, setSearch };
};

