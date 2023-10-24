import React, { useState } from 'react';
import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./navecompenets/images/img1.jpg"
import img2 from "./navecompenets/images/img2.jpg"
import img3 from "./navecompenets/images/img3.jpg"
const Carousels = ( ) => {
  const containerStyle = {
    width: '100%',
    height: '70vh',
  };
  return (
    <>
     <Carousel>
      <Carousel.Item>
      <img src={img1} alt=''   style={containerStyle}/>
      </Carousel.Item>
      <Carousel.Item>
      <img src= {img2} alt=''  style={containerStyle}/>
        </Carousel.Item>
      <Carousel.Item>
      <img src= {img3} alt=''  style={containerStyle}/>
      </Carousel.Item>
    </Carousel>
    </>
  );
};

export default Carousels;
