import React from 'react';

class Comments extends React.Component {

  render() {

    return(
      <section className="comments">
        <div className="header">
          <div className="pro">
            <h3>Pro</h3>
            <span>most helpful 4-5 star review</span>
          </div>
          <div className="con">
            <h3>Con</h3>
            <span>most helpful 1-2 star review</span>
          </div>
        </div>
        <div className="review-pro">
          <div className={this.props.pro.overallRating} id="star"></div>
          <h1>{this.props.pro.overallRating}</h1>
          <h1>{this.props.pro.title}</h1>
          <p>{this.props.pro.review}</p>
          <span>{this.props.pro.screenName}</span>
          <span>{this.props.pro.datePosted}</span>
        </div>
        <div className="review-con">
          <div className={this.props.con.overallRating} id="star"></div>
          <h1>{this.props.con.overallRating}</h1>
          <h1>{this.props.con.title}</h1>
          <p>{this.props.con.review}</p>
          <span>{this.props.con.screenName}</span>
          <span>{this.props.con.datePosted}</span>
        </div>
      </section>
    )
  }
}

export default Comments;
