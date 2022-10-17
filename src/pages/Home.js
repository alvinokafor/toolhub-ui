import "./Home.css";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <section className="home content-margin">
      <Nav />

      <div className="home-content">
      <h1>Toolhub UI</h1>
      <p>
        Toolhub is a community catalog of tools used across many Wiki projects.
        Its usefulness as such is directly linked to the amount and quality of
        information it contains
      </p>
      <button>Learn More</button>
      </div>
    </section>
  );
};

export { Home };
