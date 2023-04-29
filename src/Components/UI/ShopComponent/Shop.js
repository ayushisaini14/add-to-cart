import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollectionForPreview } from "../../../Redux/shop/shop.selector";

import "./Shop.scss";
import Preview from "../PreviewComponent/PreviewComponent";

import ShopCollection from "./Shop.styles";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../../firebase/firebase.util";

import { updateShopCollection } from "../../../Redux/shop/shop.actions";

import WithSpinner from "../../Layout/WithSpinner/with-spinner";

const PreviewWithSpinner = WithSpinner(Preview);

class Shop extends React.Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateShopCollection } = this.props;
    const collectionRef = firestore.collection("collections");
    // this.unsubscribeFromSnapshot
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionMap = convertCollectionSnapshotToMap(snapshot);
        updateShopCollection(collectionMap);
        this.setState({ loading: false });
      }
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromSnapshot();
  }

  render() {
    const { collections } = this.props;
    const { loading } = this.state;
    return (
      <ShopCollection>
        {collections.map((collection) => {
          const { id, ...restData } = collection;
          return (
            <PreviewWithSpinner
              key={id}
              isLoading={loading}
              {...restData}
            ></PreviewWithSpinner>
          );
        })}
      </ShopCollection>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateShopCollection: (collectionMap) =>
    dispatch(updateShopCollection(collectionMap)),
});

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionForPreview,
});

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
