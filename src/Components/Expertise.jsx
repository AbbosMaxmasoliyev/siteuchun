import React from 'react'

const Expertise = (props) => {
  return (
    <div className='expertise' >
         <div className="block">
                <p className='info'>{props.info}</p>
                <p className='title'>{props.title}</p>
                <p className='role'>{props.role}</p>
                <img src={props.image_pic}/>
         </div>
         <img src={props.image} alt="" />
    </div>
  )
}

export default Expertise