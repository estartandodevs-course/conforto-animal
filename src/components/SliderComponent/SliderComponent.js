import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';


const SliderComponent = (props) => {
  const { list = [] } = props

  return (
    <AwesomeSlider cssModule={AwsSliderStyles}>
      {
        list.map((img) => {
          return (
            <div data-src={img} />
          )
        })
      }
    </AwesomeSlider>
  )

}
export default SliderComponent