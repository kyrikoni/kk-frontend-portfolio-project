import axios from "axios";

const gamesApi = axios.create({
  baseURL: "https://kk-backend-portfolio-project.onrender.com/",
});

export const getReviews = () => {
  return gamesApi.get("/api/reviews").then((res) => {
    return res.data.reviews;
  });
};
