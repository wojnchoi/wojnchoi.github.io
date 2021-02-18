import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import styles from './Header.module.css'


const Slider = () => {
    const slideImages = [
    "https://windows10spotlight.com/wp-content/uploads/2021/01/803e74362a4a8ae509ce88d42315543b-1024x576.jpg",
    "https://windows10spotlight.com/wp-content/uploads/2018/12/42b0b141e2c9c77d089ee36500742059-768x432.jpg",
    "https://windows10spotlight.com/wp-content/uploads/2021/02/cd299d67cbde360875570b7d13694c02-1024x576.jpg",
    "https://windows10spotlight.com/wp-content/uploads/2021/01/ddbbb8678ce025c6fb5d9b3c0c03fc2b-1024x576.jpg",
    "https://windows10spotlight.com/wp-content/uploads/2021/01/6b160ca222cc8440c424758bac186b7b-1024x576.jpg"
    ];
    const properties = {
        easing: "linear",
        arrows: false,
        duration: 4000
    }
    return (
      <div>
        <Slide {...properties}>
          {slideImages.map((value, index) => {
            return (<div className={styles.eachslide}>
            <div style={{backgroundImage: `url(${slideImages[index]})`}}>
              <span style={{display:"none"}}>value</span>
            </div>
          </div>)
          })}
        </Slide>
      </div>
    )
};

export default Slider;