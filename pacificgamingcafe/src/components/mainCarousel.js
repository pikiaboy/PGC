import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class MainCarousel extends Component {
  render() {
    let style = {
      width: '100%',
      height: 500
    }

    return (
      <Carousel>
        <Carousel.Item>
          <img
            class="img-responsive center-block"
            style = {style}
            width={1200}
            height={900}
            alt="1200x900"
            src="https://s3-media3.fl.yelpcdn.com/bphoto/OQU2ngh5Rg-RfRB---ZJHA/o.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="img-responsive center-block"
            style = {style}
            width={1200}
            height={900}
            alt="1200x900"
            src="https://s3-media3.fl.yelpcdn.com/bphoto/ncV_1Cgey2hQloslB5gCmA/o.jpg"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="img-responsive center-block"
            style = {style}
            width={1200}
            height={900}
            alt="1200x500"
            src="https://s3-media2.fl.yelpcdn.com/bphoto/pSI792qE8nUcgrgO6oL3fw/o.jpg"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MainCarousel;
