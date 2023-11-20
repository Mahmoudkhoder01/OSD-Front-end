import classes from "./Profile.module.css";
import profile from "../../Images/profile.webp";

const Profile = () => {
  const storedUser = localStorage.getItem("user");

  const userInfo = JSON.parse(storedUser);

  return (
    <div className={classes.profile}>
      <img src={profile} alt="profile-img" className={classes.profile} />
    </div>
  );
};

export default Profile;
