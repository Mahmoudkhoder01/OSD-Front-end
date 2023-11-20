import { useState } from "react";
import classes from "./Nav.module.css";

// import icons
import { ImSearch } from "react-icons/im";
import { AiOutlinePlusCircle } from "react-icons/ai";

// import images
import logo from "../../Images/logo.png";
import profile from "../../Images/profile.webp";
import Profile from "../Profile/Profile";

const Nav = ({ setIsCreate, isCreate }) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <nav>
      <img src={logo} alt="logo-img" className={classes.logo} />
      <div className={classes.endNav}>
        <ImSearch size={30} className={classes.icon} />
        <AiOutlinePlusCircle
          size={30}
          className={classes.icon}
          onClick={() => setIsCreate(!isCreate)}
        />
        <div className={classes.profileWrapper}>
          <img
            src={profile}
            alt="profile-img"
            className={classes.profile}
            style={{ height: "100%" }}
            onClick={() => setIsShow(!isShow)}
          />
          {/* {isShow && <Profile />} */}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
