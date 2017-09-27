import React from 'react';

class Photos extends React.Component {



  render() {

    function changeHeroImage(event) {
      document.getElementById('main-image').src=event.target.src;

    }

    const alternates = this.props.altImage;

    return(
      <div className="photos">

        <div className="hero-image">
          <img id="main-image" alt="main hero" src={this.props.mainImage.image} />
        </div>
        <p>Click through photos to see more</p>
        <div className="galleryScroll">

          {/* <div className="leftArrow"></div> */}

          <ul className="item-photos">
            {alternates.map(function(index){
              return <li key={index.image}>
                <img className="alternate-images" role="presentation" src={index.image} onClick={changeHeroImage} />
              </li>;
            })}
          </ul>
          {/* <div className="rightArrow"></div> */}

        </div>
      </div>
    )
  }
}

export default Photos;
