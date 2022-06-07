import React from 'react'
import Expertise from './Expertise';
import Bobur_pic from '../images/bobur_pic.png';
import Expert_1 from '../images/expert_1.png'
import Expert_2 from '../images/expert_2.png'

const Expert = () => {
  return (
    <div className='expert'>
        <Expertise info="O`z biznesingizni avtomatlashtiring yuksaklarga parvoz etiring, biz bilan uching!" title=" Akhmadjonov Boburjon" role="Marketolog & Web dizayner " image_pic={Bobur_pic} image={Expert_1}/>
        <Expertise info="Telegramdan Websitelarga o`tish vaqti kelmadimi? Haligacha o`z mahsulot va xizmatingizni  internetga o`tkazmadingizmi?"  title="Samandar Makhmudov" role="Programmer IT specialist" image_pic={Bobur_pic} image={Expert_2}/>
    </div>
  )
}

export default Expert