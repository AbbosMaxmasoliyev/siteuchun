import React from 'react';
import Yadro from "../images/yadro.png";
import yadro_b from "../images/circle.png";
import "../Css/style.css"

function Banner  (props)  {
  return (
    <div style={({position:"relative"})} className="banner" >
        <div className='yadro' ><img src={Yadro} alt="" width={36.66}/></div>
        <div className='yadro' ><img src={Yadro} alt="" width={"49.55"}/></div>
        <div className='yadro' style={{margin:"590px"}}><img src={Yadro} alt="" width={"49.55"} /></div>
        {props.info && <h1 className='head_title'> {props.info}</h1>}
        {props.button && <button className='neon_button'>{props.button}</button>} 
        {
          props.title&&  <div className='title'>{props.title.map((data, index)=>(
            <p key={index}>{data.info}</p>
          ))}</div>
        }
       
        <div className='yadro'><img src={Yadro} alt="" width={36.66} /></div>
        {props.image2 && <div className='right '><img src={props.image2} style={{margin:"-70px 282px"}} /></div>}
        {props.image && <div className='right logo_blue'><img src={props.image} /></div>}
    </div>
  )
}

export default Banner