import React from "react";
import "../Styles/Header.css";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";

function Header() {
  return (
    // BEM <<<<<<
    <div className="header">
      <PersonIcon />
      <h2>I am a Header</h2>
      <ForumIcon />
    </div>
  );
}

export default Header;
