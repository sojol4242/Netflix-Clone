import { Avatar } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./App";
import DropdownMenu from "./dropdown-menu/DropdownMenu";
import "./Nav.css";
const Nav = (props) => {
  const [signedInUser, setSignedInUser] = useContext(UserContext);

  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNav);
    return window.addEventListener("scroll", transitionNav);
  }, []);

  return (
    <div className={`Nav ${show && "nav_black"}`}>
      <div className="Nav_Content">
        <Link to="/">s
          {" "}
          <img
            src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
            alt="netflix-logo"
          />
        </Link>

        <Avatar
          className="avatar"
          alt="Code"
          src={signedInUser.photoURL}
          onClick={() => {
            console.log(!open);
            setOpen(!open);
          }}
        >
       
       
        </Avatar>
        {open &&   <DropdownMenu/>}
    
      </div>
    </div>
  );
};

export default Nav;
