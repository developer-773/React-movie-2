import { useApiRequest } from "../../api/api";
import {Search} from "../../Search/Search";
import { Pagination } from "../Pagination";
import { Placeholder } from "../Placeholder";
import CardList from "./CardList.component";

export const Main = () => {

	const { data, error, isLoaded, setAcvtivePage } = useApiRequest("movie/now_playing");

	if (error !== null) {
		return (
			<h2 style={{height: "100vh"}} className="text-center mb-0 fs-1 text-white bg-dark p-5">
				Error: {error.message}
			</h2>
		);
	}
	if (!isLoaded) {
		const Placeholders = Array(data?.data?.results?.lenght).fill() && Array(20).fill();

		return (
			<ul className="d-flex flex-wrap bg-dark pt-5">
				{Placeholders.map((item, i) => (
					<Placeholder key={i} />
				))}
			</ul>
		);
	}

	const paginate = ({ selected }) => {
		setAcvtivePage(selected + 1);
	};

	let path=undefined;

	return (
		<div className="pt-5 bg-dark">
			<h2 className="ms-3 text-white">Popular</h2>
			<CardList data={data?.data} path={path} />
			<Pagination paginate={paginate} totalPage={data?.data?.total_pages} />
		</div>
	);
};
