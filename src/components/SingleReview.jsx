import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "./Comments";
import { getSingleReview } from "../api";

export const SingleReview = ({ isLoading, setIsLoading }) => {
  const [singleReview, setSingleReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleReview(review_id).then((review) => {
      setSingleReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <section>
      <h2>{singleReview.title}</h2>
      <h3>Author - {singleReview.owner}</h3>
      <p>
        <img
          className="ReviewImages"
          src={singleReview.review_img_url}
          alt={`image of ${singleReview.title}`}
        />
      </p>
      <p>{singleReview.review_body}</p>
      <p>
        <button>👍</button> {singleReview.votes} <button>👎</button>
      </p>
      <Comments singleReview={singleReview} />
    </section>
  );
};
