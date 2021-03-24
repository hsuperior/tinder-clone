import React from "react";
import "../Styles/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    // BEM <<<<<<
    <div className="header">
      <PersonIcon />
      <img
        src="https://cdn.designrush.com/uploads/inspirations/2354/crop_683_410__1513706350_604_tin.png"
        alt="tinder logo"
      />
      <ForumIcon />
    </div>
  );
}

export default Header;
