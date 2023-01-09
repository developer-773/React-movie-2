import React from "react";
import CommentItem from "./CommentItem";

const CommentsList = ({ comment, onToggleLiked, onToggleDisLiked }) => {
	return (
		<ul className="d-flex flex-column mt-5">
			{comment?.data.map((comments, i) => (
				<CommentItem
					key={i}
					label={comments?.label}
					like={comments?.like}
					onToggleLiked={onToggleLiked}
					onToggleDisLiked={onToggleDisLiked}
					dislike={comments?.dislike}
					time={comments?.date}
				/>
			))}
		</ul>
	);
};

export default CommentsList;
