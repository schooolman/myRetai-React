import React from "react";

class Details extends React.Component {

  constructor() {
    super();
    this.renderOrder = this.renderOrder.bind(this);
  }

  renderOrder(key){
    console.log(this.props.description[key]);

    var tempItem = this.props.description[key].toString();
    console.log(typeof tempItem);

    return (
      <div>
        <li key={key}>{this.props.description[key]}</li>
      </div>
    )
  }

  render() {

    // console.log(this.props);

    // Pseudo code
    // Run the props.description through a function to get rid of the strong tags before rending to the virtual dom

    return(
      <div className="details">

        <ul>
          <li>{this.props.description}</li>
          {/* {descriptionIds.map(this.renderOrder)} */}
        </ul>
      </div>
    )
  }
}

export default Details;
