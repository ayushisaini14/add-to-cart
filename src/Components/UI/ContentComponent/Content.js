import React from "react";

import "./Content.scss";

import { useNavigate } from "react-router-dom";

const Content = (props) => {
  const navigate = useNavigate();

  return (
    <div
      className={`${props.size} card`}
      onClick={() => {
        navigate(`/${props.linkUrl}`);
      }}
    >
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
