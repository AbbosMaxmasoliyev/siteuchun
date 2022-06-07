import React from 'react';

// image

import Inno from "../images/inno.png";
import koica from "../images/koica.png";
import trend from "../images/trend.png";
import beeline from "../images/beeline.png";
import samdu   from "../images/samdu.png";

const Partners = () => {
  return (
    <div className='partners'>
        <div className="title"><p>Hamkorlarimiz</p></div>

        <div className="block">
            <div className="image">
                <img src={Inno} alt="" />
            </div>
            <div className="image">
                <img src={koica} alt="" />
            </div>
            <div className="image">
                <img src={trend} alt="" />
            </div>
            <div className="image">
                <img src={beeline} alt="" />
            </div>
            <div className="image">
                <img src={samdu} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Partners