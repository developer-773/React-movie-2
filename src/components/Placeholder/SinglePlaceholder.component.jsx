import React from "react";

export const SinglePlaceholder = () => {
	return (
		<>
			<div className="movie_inner placeholder-glow">
				<div className="container">
					<div className="movie_wrapper d-flex align-items-center">
						<div
							className="placeholder rounded"
							style={{ width: "500px", height: "750px", color: "#bcbcbc" }}
						></div>
						<div className="movie_info ms-5 w-50">
							<h2 className="fs-1">
								<span className="placeholder col-8"></span>
							</h2>
							<p className="mb-5 ">
								<span className="me-3 placeholder col-2"></span>
								<span className="me-3 placeholder col-2"></span>
								<span className="placeholder col-2"></span>
							</p>
							<p className="placeholder col-12"></p>
							<p className="placeholder col-12"></p>
							<p className="placeholder col-7"></p>

						</div>
					</div>
				</div>
			</div>
		</>
	);
};
