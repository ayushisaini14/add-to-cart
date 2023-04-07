import React from "react";

import CollectionItems from "../CollectionItems/CollectionItems";

import "./PreviewComponent.scss";

const Preview = ({ title, items }) => {
  return (
    <div className="preview-collection">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItems key={item.id} item={item}></CollectionItems>
          ))}
      </div>
    </div>
  );
};

export default Preview;
