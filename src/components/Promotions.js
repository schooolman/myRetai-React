import React from 'react';

class Promotions extends React.Component {

  render() {

    return(
      <div className="promotions">
        <ul className="promotions-list">
          <li>{this.props.promo[0].Description[0].shortDescription}</li>
          <li>{this.props.promo[1].Description[0].shortDescription}</li>
        </ul>
      </div>
    )
  }
}

export default Promotions;
