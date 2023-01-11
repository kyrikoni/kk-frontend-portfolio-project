import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://kk-backend-portfolio-project.onrender.com/api",
});

export const getReviews = () => {
  return gamesApi.get("/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const getSingleReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getReviewComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const patchReviewVotes = (review_id, newVote) => {
  return gamesApi.patch(`/reviews/${review_id}`, {
    inc_votes: newVote,
  });
};
