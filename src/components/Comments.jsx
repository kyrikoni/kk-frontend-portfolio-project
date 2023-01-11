import { getReviewComments } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Comments = ({ singleReview }) => {
  const [comments, setComments] = useState([]);
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const { review_id } = useParams();

  useEffect(() => {
    setIsCommentsLoading(true);
    getReviewComments(review_id).then((comments) => {
      setComments(comments);
      setIsCommentsLoading(false);
    });
  }, [review_id]);

  if (isCommentsLoading) return <p>Loading Comments...</p>;

  return (
    <section>
      <h3>{singleReview.comment_count} Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <p>
                {comment.author} - {comment.created_at}
              </p>
              <p>{comment.body}</p>
              <p>Votes: {comment.votes}</p>
            </div>
          );
        })}
      </ul>
    </section>
  );
};
