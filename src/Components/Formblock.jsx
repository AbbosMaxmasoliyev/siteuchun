import React from 'react';
import Form from './Form';
import MapGoogle from './MapGoogle';



const Formblock = () => {
  return (
    <div className='form_block'>
      <div className="form_block_elements">
        <Form/>
        <MapGoogle/>
      </div>
    </div>
  )
}

export default Formblock