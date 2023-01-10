export const ReviewCard = ({ review }) => {
  return (
    <div className="ReviewCard" key={review.review_id}>
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
    </div>
  );
};
