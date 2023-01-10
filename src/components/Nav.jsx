import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="Nav">
      <Link to="/">Home</Link>
      <span> | </span>
      <Link to="/reviews">Reviews</Link>
      <span> | </span>
      <Link to="/users">Users</Link>
    </div>
  );
};
