import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <section className="nav-bar  flex">
      <div className="logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Toolhub_community_logo.svg/200px-Toolhub_community_logo.svg.png" />
      </div>

      <ul className="nav-links flex">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/dashboard">
          <li>Dashboard</li>
        </Link>
        <Link to="/leaderboard">
          <li>Leaderboard</li>
        </Link>
      </ul>
    </section>
  );
};

export default Nav;
