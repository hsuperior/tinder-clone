import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavproteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";

import "../Styles/SwipeButtons.css";

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
      <ReplayIcon fontSize="large" />
      <CloseIcon fontSize="large" />
      <StarRateIcon fontSize="large" />
      <FavproteIcon fontSize="large" />
      <FlashOnIcon fontSize="large" />
    </div>
  );
};

export default SwipeButtons;
