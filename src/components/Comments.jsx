import { getReviewComments } from "../api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const Comments = () => {
  const [comments, setComments] = useState([]);
  const { review_id } = useParams();

  useEffect(() => {
    getReviewComments(review_id).then((comments) => {
      setComments(comments);
    });
  }, [review_id]);

  return (
    <section>
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => {
          return (
            <div key={comment.comment_id}>
              <p>
                {comment.author} - {comment.created_at}
              </p>
              <p>{comment.body}</p>
              <p>
                <button>👍</button> {comment.votes} <button>👎</button>
              </p>
            </div>
          );
        })}
      </ul>
    </section>
  );
};
