import "./Home.css";
import Nav from "../components/Nav";

const Home = () => {
  return (
    <>
      <Nav />
      <section className="home content-margin">
        <div className="home-content">
          <h1>Toolhub UI</h1>
          <div>
            <h3>Tools to be completed</h3>
            <ul className="tool-list">
              <a href="https://toolhub.wikimedia.org/tools/toolforge-croptool">
                <li>crop-tool</li>
              </a>
              <a href="https://toolhub.wikimedia.org/tools/toolforge-locator-tool">
                <li>locator-tool</li>
              </a>
              <a href="https://toolhub.wikimedia.org/tools/hay-depictor">
                <li>Depictor</li>
              </a>
              <a href="https://toolhub.wikimedia.org/tools/mm_listeria">
                <li>Listeria</li>
              </a>
            </ul>
          </div>
          <form>
            <input placeholder="Enter tool here"></input>

            <button>Submit</button>
          </form>
        </div>
      </section>
    </>
  );
};

export { Home };
