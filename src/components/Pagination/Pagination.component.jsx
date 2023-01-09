import ReactPaginate from "react-paginate";

export const Pagination = ({ totalPage, paginate }) => {
	return (
		<ReactPaginate
			className="pagination justify-content-center mt-5 pb-5 gap-4"
			pageCount={totalPage}
			previousLinkClassName="btn btn-primary"
			nextLinkClassName="btn btn-primary"
			pageClassName="page-item"
			pageLinkClassName="page-link"
			activeLinkClassName="active"
			onPageChange={paginate}
		/>
	);
}

