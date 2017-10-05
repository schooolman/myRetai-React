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
          {(() => {
                 switch (this.props.pro.overallRating) {
                   case "0":
                    return <img className="rating" src="images/zero-star.png" />
                    ;
                   case "1":
                    return <img className="rating" src="images/one-star.png" />
                     ;
                   case "2":
                    return <img className="rating" src="images/two-star.png" />
                     ;
                   case "3":
                    return <img className="rating" src="images/three-star.png" />
                     ;
                   case "4":
                    return <img className="rating" src="images/four-star.png" />
                     ;
                   case "5":
                    return <img className="rating" src="images/five-star.png" />
                     ;
                   default: return <h4>Not Available</h4>;
                 }
               })()}
          <h1>{this.props.pro.overallRating}</h1>
          <h1>{this.props.pro.title}</h1>
          <p>{this.props.pro.review}</p>
          <span>{this.props.pro.screenName}</span>
          <span>{this.props.pro.datePosted}</span>
        </div>
        <div className="review-con">
          {(() => {
                 switch (this.props.con.overallRating) {
                   case "0":
                    return <img className="rating" src="images/zero-star.png" />
                    ;
                   case "1":
                    return <img className="rating" src="images/one-star.png" />
                     ;
                   case "2":
                    return <img className="rating" src="images/two-star.png" />
                     ;
                   case "3":
                    return <img className="rating" src="images/three-star.png" />
                     ;
                   case "4":
                    return <img className="rating" src="images/four-star.png" />
                     ;
                   case "5":
                    return <img className="rating" src="images/five-star.png" />
                     ;
                   default: return <h4>Not Available</h4>;
                 }
               })()}
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
