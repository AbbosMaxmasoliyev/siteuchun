import React from 'react';
import {Carousel} from '3d-react-carousal';


let slides = [
    <div className='border'><iframe width="690" height="415" src="https://www.youtube.com/embed/J4t8ztfqRb0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>,
    <div className='border'><iframe width="690" height="415" src="https://www.youtube.com/embed/4AYQ-b5StOI" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>,
    <div className='border'><iframe width="690" height="415" src="https://www.youtube.com/embed/8yYlecVw9oo" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>,
    <div className='border'><iframe width="690" height="415" src="https://www.youtube.com/embed/-v_7dgIW-pg" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>,
    <div className='border'><iframe width="690" height="415" src="https://www.youtube.com/embed/LTJ9s0Rf5CY" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>,   
];



const callback = function(index){
        console.log("callback",index);
    }

const Carousel3 = () => {
  return (
    <div>
        <Carousel slides={slides} autoplay={false} interval={1} onSlideChange={callback}/>
    </div>
  )
}

export default Carousel3