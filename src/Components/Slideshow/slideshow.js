import React from 'react';
import {Carousel} from 'react-bootstrap';

import one from '../../images/slideshow/1.jpg';
import two from '../../images/slideshow/2.jpg';
import three from '../../images/slideshow/3.jpg';
import four from '../../images/slideshow/4.jpg';
import five from '../../images/slideshow/5.jpg';
import six from '../../images/slideshow/6.jpg';
import seven from '../../images/slideshow/7.jpg';
import eight from '../../images/slideshow/8.jpg';
import './styles.css';
const Slideshow = () => {
  return (
    <div className='container-fluid'>
    <div className='row'>
    <div className='slider col-12'>
      <Carousel>
        <Carousel.Item>
          <img className="block w-100" src={one} alt="First slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="block w-100" src={two} alt="second slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="block w-100" src={three} alt="third slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="block w-100" src={four} alt="third slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="block w-100" src={five} alt="third slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="block w-100" src={six} alt="third slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="block w-100" src={seven} alt="third slide"/>
        </Carousel.Item>
        <Carousel.Item>
        <img className="block w-100" src={eight} alt="third slide"/>
        </Carousel.Item>
      </Carousel>
      </div>
      </div>
  </div>
  )
};

export default Slideshow;
