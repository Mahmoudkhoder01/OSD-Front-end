import classes from "./Nav.module.css";

// import icons
import { ImSearch } from "react-icons/im";
import { AiOutlinePlusCircle } from "react-icons/ai";

// import images
import logo from "../../Images/logo.png";
import profile from "../../Images/profile.webp";

const Nav = ({ setIsCreate, isCreate }) => {
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
        <img
          src={profile}
          alt="profile-img"
          className={classes.profile}
          style={{ height: "100%" }}
        />
      </div>
    </nav>
  );
};

export default Nav;
