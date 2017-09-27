import React from 'react';

class MainItem extends React.Component {

  render() {
    return (
      <div className="content-right">
        <h2>This will be the price</h2>
      </div>
    )
  }
}

MainItem.contextTypes = {
  router: React.PropTypes.object
}

export default MainItem;
