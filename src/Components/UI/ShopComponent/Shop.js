import React from "react";

import "./Shop.scss";

import SHOP_DATA from "./ShopData";
import Preview from "../PreviewComponent/PreviewComponent";

class Shop extends React.Component {
  constructor() {
    super();
    this.state = { collections: SHOP_DATA };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-collection">
        {collections.map(({ id, ...restData }) => (
          <Preview key={id} {...restData}></Preview>
        ))}
      </div>
    );
  }
}

export default Shop;
