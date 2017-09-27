import React from 'react';

class Storepickup extends React.Component {

  constructor() {
    super();
    this.buyButtons = this.buyButtons.bind(this);
  }

  buyButtons(code) {
    console.log(test);
  }

  render() {

    var quantity = 1;


      return(
        <div className="store-pickup">
          <div className="quantity-module">
            <span className="quantity">quantity:</span>
            <div className="amount">
              <span className="minus">-</span>
              <span id="number">{quantity}</span>
              <span className="plus">+</span>

              </div>
          </div>

          <div className="purchase-buttons">
          {(() => {
                 switch (this.props.purchase) {
                   case "0":
                    return <div className="buttons">
                      <button className="store">Pick up in store</button>
                      <button className="online">Add to cart</button>
                    </div>
                    ;
                   case "1": return <div className="buttons">
                     <button className="online">Add to cart</button>
                   </div>;
                   case "2":  return <div className="buttons">
                     <button className="store">Pick up in store</button>
                   </div>;
                   default:      return <h4>Not Available</h4>;
                 }
               })()}
           </div>
        </div>

      )
  }
}

export default Storepickup;
