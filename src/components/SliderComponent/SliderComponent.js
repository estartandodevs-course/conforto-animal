import React from 'react';
import Carousel from 'nuka-carousel';

export default function SliderComponent(props) {

    return (
      <Carousel
      width="100%"
      slideWidth="300px"
      slidesToShow={4}>
        {props.children}
      </Carousel>
    );
    // library:: https://reactjsexample.com/a-pure-reactjs-carousel-component/
}