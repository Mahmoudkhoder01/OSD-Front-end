import { useState } from "react";
import classes from "./Nav.module.css";

// import icons
import { ImSearch } from "react-icons/im";
import { AiOutlinePlusCircle } from "react-icons/ai";

// import images
import logo from "../../Images/logo.png";
import profile from "../../Images/profile.webp";
import Profile from "../Profile/Profile";

const Nav = ({
  setIsCreate,
  isCreate,
  handleInputChange,
  searchTerm,
  setIsShow,
  isShow,
}) => {

  return (
    <nav>
      <img src={logo} alt="logo-img" className={classes.logo} />
      <div className={classes.endNav}>
        <div className={classes.searchContainer}>
          <input
            type="text"
            value={searchTerm}
            className={classes.searchInput}
            placeholder="What are you lookin for?"
            onChange={handleInputChange}
          />
          <ImSearch size={30} className={classes.icon} />
        </div>
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
        </div>
      </div>
    </nav>
  );
};

export default Nav;
