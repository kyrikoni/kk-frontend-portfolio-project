import { getReviewComments, postReviewComment } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState, useId, useRef } from "react";

export const Comments = ({ singleReview }) => {
  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const [newReviewComment, setNewReviewComment] = useState("");
  const [err, setErr] = useState(null);
  const { review_id } = useParams();
  const commentId = useId();
  const buttonRef = useRef(null);

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
      buttonRef.current.disabled = true;
      postReviewComment(review_id, newReviewComment)
        .then((newComment) => {
          setComments((currComments) => {
            buttonRef.current.disabled = null;
            return [newComment, ...currComments];
          });
          setNewReviewComment("");
        })
        .catch((err) => {
          setErr("Something went wrong, please try again.");
        });
    }
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
          <button ref={buttonRef} type="submit">
            Submit Comment
          </button>
        </p>
      </form>
      <p>{err}</p>
      <h3>{singleReview.comment_count} Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <p>
                {comment.author} - {comment.created_at}
              </p>
              <p>{comment.body}</p>
            </div>
          );
        })}
      </ul>
    </section>
  );
};
