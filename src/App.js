import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ReviewList } from "./components/ReviewList";
import { SingleReview } from "./components/SingleReview";
import ErrorPage from "./ErrorPage";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ReviewList isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route
          path="/reviews/:review_id"
          element={
            <SingleReview isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route
          path="/reviews/categories/:category"
          element={
            <ReviewList isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
