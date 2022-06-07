import React from 'react'
import Servicesblock from './Servicesblock';
import TriD from '../images/trid.png';
import Tridprint from '../images/trid_print.png';
import Lazer from '../images/lazer.png';
import Arxitekt from '../images/arxitekt.png';
import Buxgalteriya from '../images/buxgalteriya.png';
import Reklama from '../images/reklama.png';
import Coding from '../images/coding.png';


const Services = () => {
  return (
    <div className='service'>
        <div className="title">
            <p>Ximzatlarimiz</p>
            <p className='info'>Qulay, ishonchli,  sifatli, kreativ va eng muhimi professional xizmatlar faqat siz uchun.</p>
        </div>
        <div className="block">
            <Servicesblock image={TriD} title="3D modellashtirish"/>
            <Servicesblock image={Tridprint} title="3D printer xizmati"/>
            <Servicesblock image={Lazer} title="Lazer  rezka"/>
            <Servicesblock image={Arxitekt} title="Maketlar yasash xizmati"/>
            <Servicesblock image={Buxgalteriya} title="Buxgalteriya xizmati"/>
            <Servicesblock image={Reklama} title="Barcha turdagi reklama xizmati"/>
            <Servicesblock image={Coding} title="Barcha turdagi IT xizmati"/>
        </div>
    </div>
  )
}

export default Services