import React from 'react'

const Servicesblock = (props) => {
  return (
    <div className='service_block'>
        <div className='service_block_image'><img src={props.image}/></div>
        <p className='service_block_title'>{props.title}</p>
    </div>
  )
}

export default Servicesblock