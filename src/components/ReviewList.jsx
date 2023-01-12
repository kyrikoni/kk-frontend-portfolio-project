import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "../api";
import { ReviewCard } from "./ReviewCard";

export const ReviewList = ({ isLoading, setIsLoading }) => {
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);

  const { category } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getReviews(category)
      .then((reviewList) => {
        setReviews(reviewList);
        setIsLoading(false);
      })
      .catch((err) => {
        setErr("Page not found");
        setIsLoading(false);
      });
  }, [category, setIsLoading]);

  if (err) return <p>{err}</p>;

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <h2>Find a Review for all of your favourite tabletop games!</h2>
      <div className="Nav">
        <Link to="/reviews/categories/strategy">Strategy</Link>
        <span> | </span>
        <Link to="/reviews/categories/hidden-roles">Hidden Roles</Link>
        <span> | </span>
        <Link to="/reviews/categories/dexterity">Dexterity</Link>
        <span> | </span>
        <Link to="/reviews/categories/push-your-luck">Push Your Luck</Link>
        <span> | </span>
        <Link to="/reviews/categories/roll-and-write">Roll & Write</Link>
        <span> | </span>
        <Link to="/reviews/categories/deck-building">Deck Building</Link>
        <span> | </span>
        <Link to="/reviews/categories/engine-building">Engine Building</Link>
      </div>
      <ul>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </section>
  );
};
