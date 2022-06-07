import React, { Component,  } from 'react'

 
import MyComponent, {Carousel,} from '3d-react-carousel';
import '3d-react-carousel/dist/index.css';

import Carousel3 from './Carousel';
// image import
import Technopark1 from '../images/Technopark.png';
import Technopark2 from '../images/Technopark2.png';
import Background from '../images/Background.png';


 
const AboutUs = () => {
  return (
    <div className='about_us_block' >
      <div className='about_us'>
        <div className="about_block">
          <div  className='about' data-aos="fade-up-right" data-aos-offset="0" data-aos-easing="ease" data-aos-duration="1000" data-aos-delay="6000" >
              <h2>Biz haqimizda</h2>
              <p>Bizning texnopark yoshlarni ilmiy tadqiqot va  innovatsion  faoliyatga  keng jalb  etish, iqtidorli  yoshlarning intellektual salohiyatini, ilmiy-texnik, innovatsion va  startap-loyihalarni amaliyotga yo’naltiradi.</p>
            </div>
          </div>
          <div className="about_carusel">
            <div className='carousel_image'>
              <Carousel>
              <img src={Technopark1} alt="" />
              <img src={Technopark2} alt="" />
              </Carousel>
          </div>
        </div>
      </div>
      <div className='carousel3'>
        <img src={Background} alt="" />
        <Carousel3/>
      </div>
    </div>

  )
}

export default AboutUs