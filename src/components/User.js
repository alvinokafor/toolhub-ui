import "./User.css";
import profile from "../assets/profile.jpeg";

const User = () => {
  return (
    <div className="user flex">
      <div className="flex user-stuff">
        <span className="user-level">1</span>

        <div className="user-info flex">
          <div className="user-img">
            <img src={profile} alt="user avatar" />
          </div>

          <div className="user-details flex">
            <span>Alvin Okafor</span>
            <span>alvin2k99@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="contributions">
        <span>34</span>
      </div>
    </div>
  );
};

export default User;
