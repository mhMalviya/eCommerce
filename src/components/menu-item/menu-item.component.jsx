import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`} //assigning the className variable the value of prop size
    onClick={() => history.push(`${match.url}${linkUrl}`)} //match.url contains the matched portion of the URL
    //which got us here
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`, //by this style tag, the img is being displayed
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
