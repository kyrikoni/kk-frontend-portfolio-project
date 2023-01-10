import { useEffect, useState } from "react";
import { getReviews } from "../api";

export const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews().then((reviewList) => {
      setReviews(reviewList);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <h2>Find a Review for all of your favourite tabletop games!</h2>
      <ul>
        {reviews.map((review) => {
          return (
            <li className="ReviewCard" key={review.review_id}>
              <p>Title: {review.title}</p>
              <p>Category: {review.category}</p>
              <p>Owner: {review.owner}</p>
              <p>
                <img
                  className="ReviewImages"
                  src={review.review_img_url}
                  alt={review.title}
                />
              </p>
              <p>
                <button>Full Review</button>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
