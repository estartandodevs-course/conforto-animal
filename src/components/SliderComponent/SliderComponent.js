import React from 'react';
<<<<<<< HEAD
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
=======
// import { Container } from './styles';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {SliderContainer} from './styles.js';

export default function SliderComponent(props) {
    // const content = [props.content];
    // let clone = Object.assign([{}], content);
    //     console.log(clone)

        const content = [{
            image:'https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png',
        },{
            image:'https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg',
        },{
            image:'https://ichef.bbci.co.uk/news/912/cpsprodpb/15F77/production/_109757998_gettyimages-1080411104.jpg',
        },{
            image:'https://www.petmd.com/sites/default/files/Acute-Dog-Diarrhea-47066074.jpg',
        },{
            image:'https://www.sciencemag.org/sites/default/files/styles/inline__450w__no_aspect/public/dogs_1280p_0.jpg?itok=4t_1_fSJ',
        },{
            image:'https://cdn.desapega.net/thumbs/1366x768/2c/acb9b5facc613abc65216c7ce17de63e12e2db907a7bfa8a3af7efc0da2321.jpg',
        },];

    return (
        <SliderContainer>
        <Slider autoplay='2000' 
                className="slider-wrapper">
			{content.map((data, index) => (
                <div
                key={index}
                className="slider-content"
                style={{ background: `url('${data.image}') no-repeat center center` }}
				>
				</div>
			))}
		</Slider>
	</SliderContainer>
    );
  }
        
>>>>>>> SliderComponent
