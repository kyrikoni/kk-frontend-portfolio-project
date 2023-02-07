import {
  getReviewComments,
  postReviewComment,
  deleteReviewComment,
} from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState, useId, useRef } from "react";

export const Comments = ({ singleReview }) => {
  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const [newReviewComment, setNewReviewComment] = useState("");
  const [reviewCommentCount, setReviewCommentCount] = useState(0);
  const [err, setErr] = useState(null);
  const { review_id } = useParams();
  const commentId = useId();
  const postButtonRef = useRef(null);
  const deleteButtonRef = useRef(null);

  useEffect(() => {
    setIsCommentsLoading(true);
    getReviewComments(review_id).then((comments) => {
      setComments(comments);
      setIsCommentsLoading(false);
    });
  }, [review_id]);

  const handleReviewComment = (e) => {
    e.preventDefault();
    if (newReviewComment === "") {
      alert("Please enter a valid comment");
    } else {
      setErr(null);
      postButtonRef.current.disabled = true;
      postReviewComment(review_id, newReviewComment)
        .then((newComment) => {
          setReviewCommentCount(reviewCommentCount + 1);
          setComments((currComments) => {
            postButtonRef.current.disabled = null;
            return [newComment, ...currComments];
          });
          setNewReviewComment("");
        })
        .catch((err) => {
          setErr(
            "Something went wrong, please refresh the page and try again."
          );
        });
    }
  };

  const handleDeleteComment = (comment_id) => {
    setErr(null);
    deleteReviewComment(comment_id)
      .then(() => {
        setReviewCommentCount(reviewCommentCount - 1);
        setComments((currComments) => {
          deleteButtonRef.current.disabled = null;
          return currComments.filter(
            (comment) => comment.comment_id !== comment_id
          );
        });
      })
      .catch((err) => {
        setErr("Something went wrong, please refresh the page and try again.");
      });
  };

  if (isCommentsLoading) return <p>Loading Comments...</p>;

  return (
    <section>
      <form method="post" onSubmit={handleReviewComment}>
        <p>
          <label htmlFor={commentId}>Write a Comment:</label>
        </p>
        <textarea
          id={commentId}
          value={newReviewComment}
          placeholder="Write your comment here"
          rows={4}
          cols={40}
          onChange={(e) => setNewReviewComment(e.target.value)}
        />
        <p>
          <button ref={postButtonRef} type="submit">
            Submit Comment
          </button>
        </p>
      </form>
      <p>{err}</p>
      <h3>{+singleReview.comment_count + reviewCommentCount} Comments</h3>
      <ul>
        {comments.map((comment) => {
          return comment.author === "tickle122" ? (
            <div key={comment.comment_id}>
              <p>
                {comment.author} - {comment.created_at}
              </p>
              <p>{comment.body}</p>
              <p>
                <button
                  ref={deleteButtonRef}
                  onClick={() => handleDeleteComment(comment.comment_id)}
                >
                  Delete Comment
                </button>
              </p>
              <p>{err}</p>
            </div>
          ) : (
            <div key={comment.comment_id}>
              <p>
                {comment.author} - {comment.created_at}
              </p>
              <p>{comment.body}</p>
              <p>{err}</p>
            </div>
          );
        })}
      </ul>
    </section>
  );
};
