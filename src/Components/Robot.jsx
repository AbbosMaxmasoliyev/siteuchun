import React from 'react';

// image
import back_robot from "../images/robot_vector.png";
import white_robot from "../images/white_robot.png";
import mobile_robot from "../images/mobile_robot.png"

const Robot = () => {
  return (
    <div className='robot'>
        <div className="back"><img src={back_robot} alt="" /></div>
        <p className='robot_info'>O`z Robotingizni yasang va o`zingiz bilan olib keting!</p>
        <div className="white_robot"><img src={white_robot} alt="" /></div>
        <div className="mobile_robot"><img src={mobile_robot} alt="" /></div>
    </div>
  )
}

export default Robot