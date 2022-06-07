import React from 'react'

const Left_block = (props) => {
  return (
    <div className='left_block'>
       <div className="left">
        {props.button && <button className='neon_button'>{props.button}</button>} 
        {
            props.title&&  <div className='title'>{props.title.map((data, index)=>(
                <li key={index}>{data.info}</li>
            ))}</div>
            }
       </div>
       <div className="right">
       {props.image && <img src={props.image}></img>}
           {props.video&& <div>{props.video}</div>}
       </div>
    </div>
  )
}

export default Left_block



 


