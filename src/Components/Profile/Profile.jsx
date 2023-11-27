import classes from "./Profile.module.css";
import profile from "../../Images/profile.webp";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");

  const userInfo = JSON.parse(storedUser);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login")
  };

  return (
    <div className={classes.profileContainer}>
      <div className={classes.profile}>
        <img src={profile} alt="profile-img" className={classes.profileImg} />
        <div>
          <div>{userInfo.email}</div>
          <div className={classes.logOut} onClick={handleLogOut}>
            Log Out <IoIosLogOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
