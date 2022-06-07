import React from 'react';

// image
import tel_icon from '../images/icon/tel.png';
import mail from '../images/icon/mail.png';

const Form = () => {
  return (
    <div className='form'>
            <div className="left">
                <p className='title'>Hamkorlik uchun</p>
                <p className='info'>Yoshlar texnoparki bilan o`z g`oyangiz reallashtiring </p>
                <p className='links'><button><img src={tel_icon} /></button><a href="tel:+998 88 934-55-05">+998 88 934-55-05</a></p>
                <p className='links'><button><img src={mail} /></button><a href="https://samytpuz@gmail.com">samytpuz@gmail.com</a></p>
            </div>
            <div className="right">
                <p className='title'>Siz bilan bog`lanishimiz uchun</p>
                <input type="text" placeholder='Ismingiz ' name='user_name' />
                <input type="text" placeholder='Telegram manzilingiz' name='telegram_link'/>
                <input type="text" placeholder='Telefon raqaminggiz'  name='tel_number'/>
                <textarea name="reg_textarea" id="" cols="30" rows="10" placeholder='Xabaringizni kiriting'></textarea>
                <button className='send_button'>Jo'natish</button>
            </div>
    </div>
  )
}

export default Form