import React from 'react';
import About_3_image from '../images/about3_1.png'

const Activity = () => {
  return (
    <div className='activity'>
      <div className="activity_block">
            <div className="left">
                <button>Bizning faoliyatimiz</button>
                <ul>
                    <li>Zamonaviy kasb ta`limi</li>
                    <li>Ishlab chiqarish va xizmat ko`rsatish </li>
                    <li>Startup</li>
                    <li>Marketing va IT xizmatlari</li>
                    <li>Barcha turdagi reklama xizmatlari</li>
                </ul>
            </div>
            <div className="right">
                <img src={About_3_image} alt="" />
            </div>
        </div>
    </div>
  )
}


export default Activity