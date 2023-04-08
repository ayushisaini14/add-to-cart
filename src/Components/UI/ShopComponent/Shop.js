import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { getShopCollection } from "../../../Redux/shop/shop.selector";

import "./Shop.scss";
import Preview from "../PreviewComponent/PreviewComponent";

const Shop = ({ collections }) => (
  <div className="shop-collection">
    {collections.map(({ id, ...restData }) => (
      <Preview key={id} {...restData}></Preview>
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: getShopCollection,
});

export default connect(mapStateToProps)(Shop);
