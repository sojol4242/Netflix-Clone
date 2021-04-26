import {
  EditRounded,
  ExitToAppRounded,
  HomeRounded,
  HomeWorkRounded,
  Person,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "../Nav.css";

const DropdownMenu = () => {
  function DropdownItem(props) {
    return (
      <a href="#home" className="menu-item">
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }
  return (
    <div className="dropdown">
      <div className="menu">
        <Link to="/home">
          {" "}
          <DropdownItem leftIcon={<HomeRounded />}>Home</DropdownItem>
        </Link>
        <Link to="/profile">
          {" "}
          <DropdownItem leftIcon={<Person />}>Profile</DropdownItem>

        </Link>
        <DropdownItem leftIcon={<ExitToAppRounded />}>Log Out</DropdownItem>
      </div>
    </div>
  );
};

export default DropdownMenu;
