import React from 'react'
import Banner from '../Components/Banner'
import Left_block from '../Components/Left_block'
import Right_block from '../Components/Right_block'

import Educate_back from "../images/educate_back.png"
import course_1 from "../images/course_1.png"
import pingvin from "../images/pingvin.png"

import Vector from '../images/vektor.png'

import qaychi from '../images/gallery/qaychi.png'
import video from '../images/gallery/video.png'
import play from '../images/gallery/play.png'
import kadr from '../images/gallery/kadr.png'
import ae from '../images/gallery/ae.png'
import object from "../images/object.png"
import Footer from '../Components/Footer'



const title_info = [
  {info: `Kompyuter savodxonligi`},
  {info: `Blender`},
  {info: `3Ds max & Autocad kurslari`},
  {info: `IT  dasturlash / Mobile dasturlash `},
  {info: `IT foundation`},
  {info: `Blogerlik `},
  {info: `Mexatronika`},
  {info: `Interyer dizayn`},
  {info: `Grafik Dizayn / Web dizayn`},
  {info: `Video montaj  / Moushn grafika `},
  {info: `Robototexnika kurslari  `},
  {info: `Lego Mindstorm (bolalar uchun)`},
  {info: `Aviasport bolalar uchun`},
]
const computer = [
  {info:"Kompyuter haqida boshlang’ich bilimlar."},
  {info:"Kompyuterning muhim qurilmalari  va asosiy dasturlari."},
  {info:"Office dasturlari ( Word, Excel, Power Point )"},
  {info:"Brauzerlar bilan ishlash."},
  {info:"Himoya dasturlar bilan ishlash va h.k"},
  {info:"Tartibi: Haftada 3 kun 2 soatdan"},
  {info:"Davomiyligi: 2 oydan 3 oygacha"},

]

const dizayn = [
  {info:"Texnologiyalar"},
  {info:"Adobe Photoshop"},
  {info:"Adobe Illustrator"},
  {info:"Corel draw"},
  {info:"Figma, Adobe XD ,  Skech"},
  {info:"️Tartib: Haftada 3 kun 2 soatdan"},
  {info:"️Davomiyligi: 3 oydan 6 oygacha"},
]

const roboto = [
  {info:"Texnologiyalar: "},
  {info:"Elektronika "},
  {info:"Mikroprotsessorli dasturlash (Arduino kids)"},
  {info:"Dasturlash (Algoritmlash)"},
  {info:"️Injenerlik (Loyihalash)"},
  {info:"️Tartibi: Haftada 3 kun 2 soatdan"},
  {info:"️Davomiyligi: 4 oydan 6 oygacha"},
]

const montaj=[
  {info:"Texnologiyalar: "},
  {info:"Adobe Photoshop "},
  {info:"Adobe Illustrator"},
  {info:"Adobe After Effect"},
  {info:"Adobe Preimer Pro"},
  {info:"️Tartib: Haftada 3 kun 2 soatdan"},
  {info:"️Davomiyligi: 3 oydan 6 oygacha"},
]

const web = [
  {info:'HTML(Web Frontend)'},
  {info:'CSS(Web Frontend dizayn)'},
  {info:'JavaScript (Web Frontend funksionallik'},
  {info:'Bootstrap (Web Frontend kutubxona)'},
  {info:'Python (Backend uchun dasturlash tili)'},
  {info:'Django (Backend uchun kutubxona)'},
  {info:'SQL / Posgress SQL'},
  {info:'Data Base'},
  {info:'Davomiyligi: 6 oydan 8 oygacha'},
]

const d3max = [
  {info:'Texnologiyalar:'},
  {info:'Elektronika'},
  {info:'Mikroprotsessorli dasturlash (Arduino kids)'},
  {info:'Dasturlash (Algoritmlash)'},
  {info:'️Injenerlik (Loyihalash)'},
  {info:'️Tartibi: Haftada 3 kun 2 soatdan'},
  {info:'️Davomiyligi: 4 oydan 6 oygach'},
]


const youtube = [
  {info:"Texnologiyalar: "},
  {info:"Blogerlik sirlari"},
  {info:"You Tube  bilan ishlash"},
  {info:"Video montaj(Adobe Preimer Pro)"},
  {info:"Fotolar bilan ishlash (Photoshop ) "},
  {info:"Instagram/Tik tokda  proffessional ishlash."},
  {info:"Tartibi: Haftada 3 kun 2 soatdan"},
  {info:"Davomiyligi: 3 oy"},

]

const smm = [
  {info:'Texnologiyalar: '},
  {info:'Blogerlik sirlari'},
  {info:'Video montaj'},
  {info:'Fotolar bilan ishlash (Photoshop )'},
  {info:'Instagram/Tik-tokda  proffessional ishlash.'},
  {info:'Tartibi: Haftada 3 kun 2 soatdan'},
  {info:'Davomiyligi: 3 oy'},
]


const video1 = <iframe width="617" height="411" src="https://www.youtube.com/embed/amvhcedGlfk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
const video2  = <iframe width="617" height="411" src="https://www.youtube.com/embed/6OwijWVM-ww" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
const video3 = <iframe width="617" height="411" src="https://www.youtube.com/embed/7N60oFtjBIA?start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
const video4 = <iframe width="617" height="411" src="https://www.youtube.com/embed/cSwU9TO4Ra0?start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
const video5 = <iframe width="617" height="411" src="https://www.youtube.com/embed/yuquGt_9Vrs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
const video6 = <iframe width="617" height="411" src="https://www.youtube.com/embed/inp4zk4ykv8?start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
const video7 = <iframe width="617" height="411" src="https://www.youtube.com/embed/inp4zk4ykv8?start=1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>


const Cources = () => {
  return (
    <div className='Cources'>
        <img src={Vector} alt="" className='vektor'/>
        <Banner button="Bizning zamonaviy kurslarimiz" title={title_info} image3={Educate_back}/>
        <Left_block button="KOMPYUTER SAVODXONLIGI" title={computer} image={course_1}/>
        <Right_block button="LEGO  MINDSTORM BOLALAR UCHUN" title={computer} video={video1}/>
        <Left_block button=" Grafik Dizayn / Web dizayn" title={dizayn} video={video2}/>
        <Right_block button="Robototexnika" title={roboto} video={video3}/>
        <div className='pingvin'><img src={pingvin} alt=""/></div>
        <Left_block button="Video montaj / Moushn grafika" title={montaj} video={video4}/>
        <div className="images">
          <img src={qaychi} alt="" />
          <img src={video} alt="" />
          <img src={play} alt="" />
          <img src={kadr} alt="" />
          <img src={ae} alt="" />
        </div>
        <Right_block button="Web (Frontend & Backend) dasturlash" title={web} video={video5}/>
        <Right_block button="3Ds max & Autocad " title={d3max} video={video6}/>
        <Left_block button="Blogerlik & you tube" title={youtube} video={video7}/>
        <Right_block button="SMM menejer " title={smm} image={object}/>
       <div className="mydiv">
         <div className="title">
           <p>Zamonaviy kasblar sizning eng tog`ri tanlovingiz</p>
         </div>
         <div className="block">
           <p>IT-ni noldan PRO gacha o`rganing!</p>
         </div>
       </div>
       
        <Footer/>

    </div>
  )
}

export default Cources