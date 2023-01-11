import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Comments } from "./Comments";
import { getSingleReview, patchReviewVotes } from "../api";

export const SingleReview = ({ isLoading, setIsLoading }) => {
  const [singleReview, setSingleReview] = useState({});
  const [reviewVoteCount, setReviewVoteCount] = useState(0);
  const [err, setErr] = useState(null);

  const { review_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getSingleReview(review_id).then((review) => {
      setSingleReview(review);
      setIsLoading(false);
    });
  }, [review_id]);

  const handleReviewVotes = (newVote) => {
    setReviewVoteCount((currVotes) => currVotes + newVote);
    setErr(null);
    patchReviewVotes(review_id, newVote).catch((err) => {
      setReviewVoteCount((currVotes) => currVotes - newVote);
      setErr("Something went wrong, please try again.");
    });
  };

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
        <button
          onClick={() => {
            handleReviewVotes(+1);
          }}
        >
          👍
        </button>
        {singleReview.votes + reviewVoteCount}
        <button
          onClick={() => {
            handleReviewVotes(-1);
          }}
        >
          👎
        </button>
      </p>
      <Comments singleReview={singleReview} />
    </section>
  );
};
