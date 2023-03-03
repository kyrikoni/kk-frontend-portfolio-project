import { Link } from "react-router-dom";

export const ReviewCard = ({ review }) => {
  return (
    <div className="ReviewCard" key={review.review_id}>
      <p>Title: {review.title}</p>
      <p>Category: {review.category}</p>
      <p>Owner: {review.owner}</p>
      <p>
        Created At: {review.created_at} | Votes: {review.votes}
      </p>
      <p>
        <img
          className="ReviewImages"
          src={review.review_img_url}
          alt={review.title}
        />
      </p>

      <p>
        <Link to={`/reviews/${review.review_id}`}>
          <button>Full Review</button>
        </Link>
      </p>
    </div>
  );
};
