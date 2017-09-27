import React from 'react';
import Promotions from './Promotions';
import Details from './Details';
import ItemData from '../item-data.json';
import Registry from './Registry';
import Disclaimers from './Disclaimers';
import Comments from './Comments';
import Photos from './Photos';
import Storepickup from './Storepickup';


class MainItem extends React.Component {

  constructor(){
    super();

    const newData = ItemData.CatalogEntryView[0]; //Initial access to data
    const promo = newData.Promotions; // Sets the promotion data for the state
    const customerReviews = newData.CustomerReview[0]; // Creating the object for the customer reviews
    const itemPhotos = newData.Images[0];
    const purchasingData = newData.purchasingChannelCode;

    this.state = { // Setting the states that we may need to access
        item: newData,
        promos: promo,
        comments: customerReviews,
        photos: itemPhotos,
        purchasing: purchasingData

    };

    console.log(newData);


  }


  render() {

    // creating variables to pass the customer reviews
    const proComment = this.state.comments.Pro[0];
    const conComment = this.state.comments.Con[0];
    // creating variables to pass the photos to the photo component
    const mainImage = this.state.photos.PrimaryImage[0];
    const altImage = this.state.photos.AlternateImages;

    // creating the purchasing channel code variable to pass to component
    const purchase = this.state.purchasing;

    const price = this.state.item.Offers[0].OfferPrice[0].formattedPriceValue;

    console.log(this.state.item.Offers[0].OfferPrice[0].formattedPriceValue);


    return (

      <div className="main-container">

        <div className="content-right">
          <h2 className="item-price">{price}</h2>
          <Promotions promo={this.state.promos}/>
          <Storepickup purchase={purchase}/>
          <Disclaimers />
          <Registry />
          {/* <Details description={this.state.item.ItemDescription[0].features}/> */}
          <h3 className="highlights">Product Highlights</h3>

          {
            // This object key map creates the product highlights with unique keys. Need to figure out how to strip the <strong> tags out
            Object
            .keys(this.state.item.ItemDescription[0].features)
            .map(key => <Details key={key} description={this.state.item.ItemDescription[0].features[key]} />)
          }
        </div>

        <div className="content-left">
          <h1 className="item-title">{this.state.item.title}</h1>
          <Photos mainImage={mainImage} altImage={altImage}/>
          <Comments pro={proComment} con={conComment}/>
        </div>
      </div>

    )
  }
}

MainItem.contextTypes = {
  router: React.PropTypes.object
}

export default MainItem;
