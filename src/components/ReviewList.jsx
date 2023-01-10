import { useEffect, useState } from "react";
import { getReviews } from "../api";
import { ReviewCard } from "./ReviewCard";

export const ReviewList = ({ isLoading, setIsLoading }) => {
  const [reviews, setReviews] = useState([]);

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
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </section>
  );
};
