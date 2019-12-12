import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';

const SliderComponent = () => (
  <AwesomeSlider cssModule={AwsSliderStyles}>
    <div data-src="/path/to/image-0.png" />
    <div data-src="/path/to/image-1.png" />
    <div data-src="/path/to/image-2.jpg" />
  </AwesomeSlider>
);
export default SliderComponent