import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getReviews } from "../api";
import { ReviewCard } from "./ReviewCard";

export const ReviewList = ({ isLoading, setIsLoading }) => {
  const [reviews, setReviews] = useState([]);
  const [err, setErr] = useState(null);
  const [sort_by, setSortBy] = useState();
  const [order, setOrder] = useState();

  const { category } = useParams();

  const handleQueryChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderChange = (e) => {
    setOrder(e.target.value);
  };

  useEffect(() => {
    setIsLoading(true);
    getReviews(category, sort_by, order)
      .then((reviewList) => {
        setReviews(reviewList);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setErr("Page not found");
        setIsLoading(false);
      });
  }, [category, sort_by, order, setIsLoading]);

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
      <select onChange={handleQueryChange}>
        <option hidden>Sort By</option>
        <option value="title">Title</option>
        <option value="owner">Owner</option>
        <option value="created_at">Date Created</option>
        <option value="votes">Votes</option>
      </select>
      <select onChange={handleOrderChange}>
        <option hidden>Order By</option>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <ul>
        {reviews.map((review) => {
          return <ReviewCard key={review.review_id} review={review} />;
        })}
      </ul>
    </section>
  );
};
