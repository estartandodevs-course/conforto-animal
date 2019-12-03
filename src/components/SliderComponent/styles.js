import styled from 'styled-components';
import next from '../../assets/images/next.png';

export const SliderContainer = styled.div`
body {
  box-sizing: border-box;
  padding-top: 75px;
}

.slider-wrapper {
  
  position: relative;
  height: 70vh;
  overflow: hidden;
  background-color:#EFEFEF;
}

.previousButton, .nextButton {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
    background: url(${next}) no-repeat center center / 12px;
    border:2px solid #00FFDA;
    padding:1px;
    border-radius:17px;
		width: 32px;
		height: 32px;
		text-indent: -9999px;
		cursor: pointer;
}
.previousButton {
  left: 0;
  -webkit-transform: rotate(180deg) translateY(calc(50% + 0px));
          transform: rotate(180deg) translateY(calc(50% + 0px));
}
.previousButton:hover {
  left: -5px;
}
.nextButton {
  right: 0;
}

.nextButton:hover {
  right: -10px;
}

@media (max-height: 500px) {
  .slider-wrapper, .slide {
    height: calc(100vh - 75px);
  }    
}

@media (max-width: 640px) {
  .slider-wrapper, .slide {
    height: calc(80vh - 75px);
  }    
}

@media (max-height: 600px) {
  .slider-content .inner h1 {
    font-size: 32px;
  }    
}

@media (max-width: 640px) {
  .slider-content .inner h1 {
    font-size: 32px;
  }
}`