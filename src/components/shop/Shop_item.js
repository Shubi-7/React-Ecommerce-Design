import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Shop_item() {
    return (
        <div className="container">
            <Carousel responsive={responsive}>
            <div>
                <img src= "images/a1.png" height="200px" width="250px"/>
                <h4>Rs.200000</h4>
            </div>
            <div>
            <img src= "images/a2.jpg" height="200px" width="250px"/>
            </div>
            <div>
            <img src= "images/a3.png" height="200px" width="250px"/>
            </div>
            <div>
            <img src= "images/a4.png" height="200px" width="250px"/>
            </div>
            </Carousel>
        </div>
    )
}

export default Shop_item
