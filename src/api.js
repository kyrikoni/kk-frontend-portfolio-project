import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://kk-backend-portfolio-project.onrender.com/api",
});

export const getReviews = (category, sort_by, order) => {
  return gamesApi
    .get("/reviews", { params: { category, sort_by, order } })
    .then((res) => {
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

export const postReviewComment = (review_id, newComment) => {
  return gamesApi
    .post(`/reviews/${review_id}/comments`, {
      username: "tickle122",
      body: newComment,
    })
    .then((res) => {
      return res.data.comment;
    });
};

export const getCategoryReviews = () => {
  return gamesApi.get("/categories/").then((res) => {
    return res.data.categories;
  });
};

export const deleteReviewComment = (comment_id) => {
  return gamesApi.delete(`/comments/${comment_id}`);
};
