import React from "react";

import "./Content.scss";

const Content = (props) => {
  return (
    <div className={`${props.size} card`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${props.imageUrl})` }}
      />
      <div className="content">
        <h1 className="title">{props.item}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
};

export default Content;
