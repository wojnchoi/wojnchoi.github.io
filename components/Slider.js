import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import banner from '../styles/headers.module.css'

const slideImages = [
"https://windows10spotlight.com/wp-content/uploads/2021/01/803e74362a4a8ae509ce88d42315543b-1024x576.jpg",
"https://windows10spotlight.com/wp-content/uploads/2018/12/42b0b141e2c9c77d089ee36500742059-768x432.jpg",
"https://windows10spotlight.com/wp-content/uploads/2021/02/cd299d67cbde360875570b7d13694c02-1024x576.jpg"
];

const Slider = () => {
    return (
      <div>
        <Slide easing="ease">
          <div className={banner.eachslide}>
            <div style={{backgroundImage: `url(${slideImages[0]})`}}>
              <span style={{display:"none"}}>Slide 1</span>
            </div>
          </div>
          <div className={banner.eachslide}>
            <div style={{backgroundImage: `url(${slideImages[1]})`}}>
              <span  style={{display:"none"}}>Slide 2</span>
            </div>
          </div>
          <div className={banner.eachslide}>
            <div style={{backgroundImage: `url(${slideImages[2]})`}}>
              <span  style={{display:"none"}}>Slide 3</span>
            </div>
          </div>
        </Slide>
      </div>
    )
};

export default Slider;