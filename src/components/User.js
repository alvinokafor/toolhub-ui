import "./User.css";

const User = ({ name, email, contributions, index, image }) => {
  return (
    <div className="user flex">
      <div className="flex user-stuff">
        <span className="user-level">{index + 1}</span>

        <div className="user-info flex">
          <div className="user-img">
            <img src={image} alt="user avatar" />
          </div>

          <div className="user-details flex">
            <span>{name}</span>
            <span>{email}</span>
          </div>
        </div>
      </div>

      <div className="contributions">
        <span>{contributions}</span>
      </div>
    </div>
  );
};

export default User;
