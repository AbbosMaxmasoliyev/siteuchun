import React from 'react';
import Logotyp from '../images/Logotyp.png';
import Geolocation from '../images/geolocation.png'
import Telegram from '../images/telegram-footer.png'
import Youtube from '../images/youtube-footer.png'
import Instagram from '../images/Instagram-footer.png'
import Facebook from '../images/facebook-footer.png'
import FooterWorld from '../images/footer-world.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer_top">
            <img src={Logotyp} alt="" />
            <div className="social">
                <p>+998 88 934 55 05</p>
                <p>samytpuz@gmail.com</p>
            </div>
            <div className="adress">
                <p>Samarqand shahar,</p>
                <p>Universitet xiyoboni, 15 -uy</p>
                <p>Mo`ljal: SamDU Tarix fakulteti hovlisi, Sportzal yonida</p>
            </div>
        </div>

        <hr/>
        <div className="footer_bottom">
          <img src={Geolocation} alt="" />
          <div className="social">
            <div className="links">
              <a href="#"><img src={Youtube} alt="" /></a>
              <a href="#"><img src={Telegram} alt="" /></a>
              <a href="#"><img src={Instagram} alt="" /></a>
              <a href="#"><img src={Facebook} alt="" /></a>
            </div>
            <div className="info">
              <p> 2022 — Samytp. Barcha huquqlar himoyalangan</p>
            </div>
          </div>
          <img src={FooterWorld} alt="" />
        </div>
    </div>
  )
}

export default Footer