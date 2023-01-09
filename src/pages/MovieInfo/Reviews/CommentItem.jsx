import "./CommentItem.css";
import "font-awesome/css/font-awesome.min.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context";

const CommentItem = ({
	label,
	like,
	dislike,
	onToggleLiked,
	onToggleDisLiked,
	time,
}) => {
	const { user, setUser } = useContext(AuthContext);

	let fN, lN;

	try {
		fN = user?.data[0]?.first_name.charAt(0);
		lN = user?.data[0]?.last_name.charAt(0);
	} catch (error) {}

	return (
		<>
			<li className="comment my-3">
				{user ? (
					<span className="user_avatar">{fN + lN}</span>
				) : (
					<span className="user_avatar">B</span>
				)}

				<div className="comment_box">
					{user ? (
						<h4 className="user_name">{fN + lN}</h4>
					) : (
						<h4 className="user_name">Bek</h4>
					)}
					<p className="comment_date">{time}</p>
					<p className="comment_message">{label}</p>
					<div className="comment_actions">
						<button className="comment_vote" onClick={onToggleLiked}>
							<i className="fa fa-regular fa fa-thumbs-up">
								{like > 0 ? like : ""}
							</i>
						</button>
						<button className="comment_vote" onClick={onToggleDisLiked}>
							<i className="fa fa-regular fa fa-thumbs-down">
								{dislike > 0 ? dislike : ""}
							</i>
						</button>
					</div>
				</div>
			</li>
		</>
	);
};

export default CommentItem;
