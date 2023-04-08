import React from "react";

import { selectCollection } from "../../../Redux/shop/shop.selector";

import "./Collection.scss";

import CollectionItems from "../CollectionItems/CollectionItems";

import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CollectionPage = () => {
  const { id } = useParams();
  const collection = useSelector(selectCollection(id));
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItems key={item.id} item={item}></CollectionItems>
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
