import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { useApiRequest } from "../../api/api";
import CardList from "../../components/Main/CardList.component";
import { Pagination } from "../../components/Pagination";
import { Placeholder } from "../../components/Placeholder";
import { PATH } from "../../constants/paths";

const TopRated = () => {

  const { data, error, isLoaded, setAcvtivePage } = useApiRequest("movie/top_rated");

  let total_pages = data?.data?.total_pages/2

	if (error !== null) {
		return <h3 className="text-center p-5 mb-0 bg-dark text-white" style={{height: "100vh"}}>Nothing found for your request.</h3>;
	}

	if (!isLoaded) {
    const Placeholders =
    Array(data?.data?.results?.length).fill() && Array(20).fill();
		return (
      
      <ul className="d-flex flex-wrap bg-dark pt-5">
					{Placeholders.map((item,i) => (
            <Placeholder key={i} />
            ))}
				</ul>
			
      );
    }
    
    const paginate = ({selected}) => {
      setAcvtivePage(selected + 1)
    }
    
    return (
      
      <div className="pt-5 bg-dark">
			<h2 className="ms-3 text-white">Top Rated</h2>
			<CardList data={data.data} path={`/${PATH.TOP_RATED}`}/>
      <Pagination paginate={paginate} totalPage={total_pages} />
     
		</div>
	);
};

export default TopRated;
