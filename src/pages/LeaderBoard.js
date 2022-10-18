import Nav from "../components/Nav";
import User from "../components/User";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  const DUMMY_USER_DATA = [
    {
      id: "ytr65eyr",
      name: "Alvin Okafor",
      email: "alvin2k99@gmail.com",
      contributions: 102,
      image:
        "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsYWNrJTIwaGVhZHNob3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    },

    {
      id: "wfetryhg",
      name: "Clark Kent",
      email: "clark@gmail.com",
      contributions: 98,
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },

    {
      id: "w4r5tger",
      name: "Lois Lane",
      email: "lane@gmail.com",
      contributions: 68,
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
  ];

  return (
    <>
      <Nav />
      <section className="content-margin leaderboard-content">
        <h1>Leaderboard</h1>

        <div className="user flex heading">
          <div className="flex ">
            <span className="user-level">#</span>

            <div className="user-info flex">
              <h3>User</h3>
            </div>
          </div>

          <div>
            <span>Contributions</span>
          </div>
        </div>

        {DUMMY_USER_DATA.map((user, index) => (
          <User
            name={user.name}
            email={user.email}
            contributions={user.contributions}
            key={user.id}
            index={index}
            image={user.image}
          />
        ))}
      </section>
    </>
  );
};

export { LeaderBoard };
