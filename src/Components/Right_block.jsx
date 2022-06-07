import React from 'react'

const Right_block = (props) => {
  return (
    <div className='right_block'>
        <div className="left">
           {props.image && <img src={props.image}/>}
           {props.video&& <div>{props.video}</div>}
       </div>
       <div className="right">
        {props.button && <button className='neon_button'>{props.button}</button>} 
        {
            props.title&&  <div className='title'>{props.title.map((data, index)=>(
                <li key={index}>{data.info}</li>
            ))}</div>
            }
            
       </div>
       
    </div>
  )
}

export default Right_block
