import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import "./Card.scss";
import { getitemDetails } from "../../../Redux/card/card.selector";
import Content from "../ContentComponent/Content";

const Card = ({ itemDetails }) => (
  <div className="container">
    {itemDetails.map(({ title, imageUrl, id, size, linkUrl }) => (
      <Content
        key={id}
        item={title.toUpperCase()}
        imageUrl={imageUrl}
        size={size}
        linkUrl={linkUrl}
      ></Content>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  itemDetails: getitemDetails,
});

export default connect(mapStateToProps)(Card);
