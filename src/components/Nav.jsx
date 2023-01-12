import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/reviews">Reviews</Link>
    </div>
  );
};
