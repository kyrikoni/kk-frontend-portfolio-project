import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://kk-backend-portfolio-project.onrender.com/",
});

export const getReviews = () => {
  return gamesApi.get("/api/reviews").then((res) => {
    return res.data.reviews;
  });
};

export const getSingleReview = (review_id) => {
  return gamesApi.get(`/api/reviews/${review_id}`).then((res) => {
    return res.data.review;
  });
};

export const getReviewComments = (review_id) => {
  return gamesApi.get(`/api/reviews/${review_id}/comments`).then((res) => {
    return res.data.comments;
  });
};
