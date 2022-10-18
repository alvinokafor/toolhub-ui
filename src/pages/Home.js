import "./Home.css";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <section className="home content-margin">
      <Nav />

      <div className="home-content">
        <h1>Toolhub UI</h1>
          <form>
        <textarea rows="8" cols="50" placeholder="Enter tool here"></textarea>

        <button>Submit</button>
        </form>
      </div>
    </section>
  );
};

export { Home };
