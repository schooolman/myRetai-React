import React from 'react';

class Registry extends React.Component {

  render() {

    return(
      <div className="registry">
        <ul>
          <li><a href="#">Add to Registry</a></li>
          <li><a href="#">Add to List</a></li>
          <li className="last"><a href="#">Share</a></li>
        </ul>
      </div>
    )
  }
}

export default Registry;
