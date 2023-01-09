import { Link, useParams } from "react-router-dom";
import { PATH } from "../../constants/paths";

const BASE_IMG_URL = import.meta.env.VITE_APP_IMAGE;

const CardItem = ({
	poster_path,
	original_title,
	vote_average,
	release_date,
	id,
	path="movie"
}) => {


	const styles = {
		position: "absolute",
		bottom: "0",
		left:"0",
		right: "0",
		padding: "11px",
		color: "white",
		textAlign: "center",
		backgroundColor: "#000000a0"
	}



	return (
		<li
			className="card m-4 position-relative border-0"
			style={{ width: "170px" }}
		>
			<Link to={path + `/${id}`}>
				<img
					width="150"
					src={BASE_IMG_URL + "w500" + poster_path}
					className="card-img-top rounded"
					alt=""
				/>
			</Link>
			<div>
				<div
				style={styles}>
					<strong>{original_title}</strong>
				<p className="card-text">{release_date}</p>
				</div>
				<span className="position-absolute top-0 start-0 rounded-circle text-bg-dark p-2">
					{vote_average}
				</span>
			</div>
		</li>
	);
};

export default CardItem;
