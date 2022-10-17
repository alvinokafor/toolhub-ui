import Nav from "../components/Nav";
import User from "../components/User";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  return (
    <>
      <Nav />
      <section className="content-margin leaderboard-content">
        <h1>Leaderboard</h1>

        <User />
        <User />
        <User />
      </section>
    </>
  );
};

export { LeaderBoard };
