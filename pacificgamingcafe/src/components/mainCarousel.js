import React, { Component } from "react";
import { Carousel } from "react-bootstrap";

class MainCarousel extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            class="img-responsive center-block"
            width={1200}
            height={900}
            alt="1200x900"
            src="https://s3-media3.fl.yelpcdn.com/bphoto/OQU2ngh5Rg-RfRB---ZJHA/o.jpg"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="img-responsive center-block"
            width={1200}
            height={900}
            alt="1200x900"
            src="https://s3-media3.fl.yelpcdn.com/bphoto/ncV_1Cgey2hQloslB5gCmA/o.jpg"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            class="img-responsive center-block"
            width={1200}
            height={500}
            alt="1200x500"
            src="https://s3-media2.fl.yelpcdn.com/bphoto/pSI792qE8nUcgrgO6oL3fw/o.jpg"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default MainCarousel;