import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Nav } from "./components/Nav";
import { ReviewList } from "./components/ReviewList";
import { Homepage } from "./components/Homepage";
import { SingleReview } from "./components/SingleReview";
import { useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="/reviews"
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
      </Routes>
    </div>
  );
}

export default App;
