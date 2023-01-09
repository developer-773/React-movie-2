import React, { useContext } from 'react'
import { useApiRequest } from '../api/api';
import CardList from '../components/Main/CardList.component';
import { Pagination } from '../components/Pagination';
import { Placeholder } from '../components/Placeholder';
import { PATH } from '../constants/paths';
import { QueryContext } from '../context/QueryContext';

export const Search = () => {
	const {query, setQuery} = useContext(QueryContext)
  const { data, error, isLoaded, setAcvtivePage } = useApiRequest("configuration");

    const paginate = ({selected}) => {
        setAcvtivePage(selected + 1)
      }

  return (
    <div className="pt-5 bg-dark" >
    <h2 className="ms-3 text-white">Results</h2>
    <CardList data={query} path={`/${PATH.SEARCH}`} />
    <Pagination paginate={paginate} totalPage={query?.total_pages} />
</div>
  )
}
