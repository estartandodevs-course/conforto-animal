import React from 'react';
import Carousel from 'nuka-carousel';

export default function SliderComponent(props) {

    return (
      <Carousel
      width={props.width}
      slideWidth={props.slideWidth}
      slidesToShow={props.ToShow}>
        {props.children}
      </Carousel>
    );
    // library:: https://reactjsexample.com/a-pure-reactjs-carousel-component/
}