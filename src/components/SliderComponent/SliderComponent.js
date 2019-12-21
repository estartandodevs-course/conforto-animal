import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import AwsSliderStyles from 'react-awesome-slider/src/styles';


const SliderComponent = (props) => {

  return (
    <AwesomeSlider cssModule={AwsSliderStyles}>
            <div data-src={props.list} />
            <div data-src='https://images.tcdn.com.br/img/img_prod/476855/adesivo_dragao_258_1_20190114171555.jpg'/>
        
    </AwesomeSlider>
  )

}
export default SliderComponent