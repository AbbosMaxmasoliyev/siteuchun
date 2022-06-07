import React from 'react'
import Banner from '../Components/Banner'
import Left_block from '../Components/Left_block'
import Right_block from '../Components/Right_block'
import Footer from '../Components/Footer'

import trid from "../images/tridservice.png"
import maket_pic from "../images/maket.png"
import lazer_mah from "../images/lazer_mah.png"
import vektor2 from "../images/vektor2.png"
import gal1 from "../images/gallery1/1.png"
import gal2 from "../images/gallery1/2.png"
import gal3 from "../images/gallery1/3.png"
import gal4 from "../images/gallery1/4.png"
import gal5 from "../images/gallery1/5.png"
import gal6 from "../images/gallery1/6.png"
import buxgalteriya from "../images/buxgalteriya2.png"
import SMM_pic from "../images/smm_pic.png"


import CarouselLine2 from '../Components/CaruselLine2'




const title_info_info = [
    {info:`3D modellashtirish`},
    {info:`3D printer xizmati `},
    {info:`Lazer rezka`},
    {info:`Gravirovkalash xizmati `},
    {info:`Maketlar yasash`},
    {info:`Buxgalteriya xizmatlari`},
    {info:`Barcha turdagi reklama xizmatlari`},
    {info:`Barcha turdagi “IT” xizmatlari `},
]

const title =[
    {info:"O`quv  yurtlari  avtomaktablar, masjid va barcha turdagi bino inshoatlarning  , oldindan tashqi qiyogfasi aks eturuvchi maketlardan yig`masi."}
]
const maket= [
    {info : "O`quv  yurtlari  avtomaktablar, masjid va barcha turdagi bino inshoatlarning  , oldindan tashqi qiyofasi aks etuvchi maketlar yig`masi."}
]
const lazer = [
    {info:"Turli material buyumlarga  chizmalar chizish, brend logosini yoki turli yozuvlar tushirish,  sovg`alarga  chiroyli dizayn berish imkoniyati mavjud."}
]
const IT =[
    {info:"— Web-sayt yasash"},
    {info:"— SEO"},
    {info:"— CRM (Biznesni avtomatlashtirish) — Mobile ilova"},
    {info:"— — Telegram bot yasash — Saytlar nazorati"},
]

const Buxgalteriya=[
    {info:"Buxgalteriya hujjatlarining yuritilishi"},
    {info:"Xodimlar bilan ishlash bo'yicha hujjatlarning yuritilishi"},
    {info:"Soliq va boshqa davlat organlariga tegishli hisobotlarning o'z vaqtida taqdim etilishi"},
    {info:"IBANK bilan ishlash"},
    {info:"Hujjatlarning saqlanishini ta'minlash"},
    {info:"1C 8.3 da hisobotlar yuritish "},
    {info:"Dasturiy ta`minot"},
    {info:"Soliq inspeksiyalari va boshqa davlat organlari bilan o'zaro munosabatlarda buyurtmachining manfaatlarini himoya qilish"},
]

const SMM = [
    {info:`Biznesingiz va kompaniya brendingiz salohiyatini, samarali reklama uslubidan foydalagan holda mijojlar oqimini oshirish`},
    {info:`-Breningizni omaga tanitish`},
    {info:`-Tashqi reklamalar`},
    {info:`-Ijtimoiy tarmoqlarda reklama( SMM)`},
    {info:`-Biznesingizni mumolarini o'rganib va unga yechim tavsiya etish`},
    {info:`-Maqsadli auditoriyaga Facebbok, Instagaramda (targeting)`},
    {info:`- Yangi mijozlar topishga ko'maklashish`},
    {info:`-PR Shaxsiy brend ustida ishlash`},
    {info:`- Video roliklar`},
]

const Services = () => {
  return (
    <div className='Service'>
       <Banner button="XIZMAT TURLARIMIZ" title={title_info_info} />
       <Left_block button="3D MODELLASHTIRISH" title={title} image={trid}/>
       <Right_block button="MAKET YASASH  XIZMATI" title={maket} image={maket_pic}/>
       <div className='carousel_line'>
           <CarouselLine2/>
      </div>
      <Left_block button="LAZER GRAVIROVKA" title={lazer} image={lazer_mah}/>
      <div className="images">
          <img src={gal1} alt="" />
          <img src={gal2} alt="" />
          <img src={gal3} alt="" />s
        </div>
        <Left_block button="BARCHA TURDAGI IT XIZMATLARI" title={IT} image={vektor2}/>
        <Right_block button="BUXGALTERIYA XIZMATI" title={Buxgalteriya} image={buxgalteriya}/>
        <div className="images top">
            <img src={gal4} alt="" style={{width:"30%"}} />
            <img src={gal5} alt="" style={{width:"30%"}} />
            <img src={gal6} alt="" style={{width:"30%"}} />
        </div>
        <Left_block button="BARCHA TURDAGI REKLAMA XIZMARLARI" title={SMM} image={SMM_pic}/>
        <Footer/>
    </div>
  )
}

export default Services