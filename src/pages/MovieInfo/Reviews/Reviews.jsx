import React, { useState } from "react";
import { Link } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import CommentsAddForm from "./CommentsAddForm";
import CommentsList from "./CommentsList";
import "./Reviews.styles.css";

const Reviews = () => {
	const [comment, setComment] = useState(
		secureLocalStorage.getItem("cmnt") || {data:
			[
				{
					label: "This is good movie 👍",
					like: 1,
					dislike: 0,
					id: 1,
          date: "09.01.2023 12:04"
				},
			],
    }
	);

	let maxId = 2;

	const addComment = (body) => {

		const newComment = {
      label: body,
			like: 0,
			dislike: 0,
			id: maxId++,
      date: new Date().toLocaleString().slice(0, 17),
     
		};
		setComment(({ data }) => {
      const newArr = [...data, newComment];
			return {
        data: newArr,
			};
		});
	};
  
  secureLocalStorage.setItem("cmnt", comment)


	const onToggleLiked = () => {
		comment?.data?.map((item) => {
			if (
				(item.like > 0 && !item.dislike > 0) ||
				(item.like === 0 && item.dislike === 0) ||
				(item.like === 0 && item.dislike !== 0)
			) {
				return {
					label: item.label,
					item: (item.like += 1),
					dislike: item.dislike,
					id: item.id,
          date: item.date
				};
			}
		});

		setComment(({ data }) => {
			const newArr = [...data];
			return {
				data: newArr,
			};
		});
	};

	const onToggleDisLiked = () => {
		comment?.data?.map((item) => {
			if (
				(item.like > 0 && item.dislike === 0) ||
				(item.like === 0 && item.dislike === 0)
			) {
				return {
					label: item.label,
					item: (item.like = 0),
					dislike: (item.dislike += 1),
					id: item.id,
          date: item.date
				};
			}
		});

		setComment(({ data }) => {
			const newArr = [...data];
			return {
				data: newArr,
			};
		});
	};

	return (
		<div className="comments_box">
			<p className="comments_count">{comment?.data?.length} comments</p>
			<p className="mt-5">
				You must be Sign in to post comments.{" "}
				<Link className="comments_login" to="/register">
					Sign in
				</Link>
			</p>
			<CommentsAddForm addComment={addComment} />
			<CommentsList
				onToggleLiked={onToggleLiked}
				onToggleDisLiked={onToggleDisLiked}
				comment={comment}
			/>
		</div>
	);
};

export default Reviews;
