import React from 'react'
import "./contact.css"
import MyRubick from "../../img/rubick1.png"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"


const Contact = () => {
  return (
    <div className='c'>
      <div className="c-bg">
        <h2 className="c-title">Let's Discuss your porject.</h2>
        <div className='c-info'>
        <img src={Phone} className="c-image"></img>0943201336</div>
        <div className='c-info'>
        <img src={Email} className="c-image"></img>winmyintaung1997@gmail.com
        </div>
        
        <div className='c-info'>
        <img src={Address} className="c-image"></img>73x74 / 33x34 / Mandalay
        </div>
        

        
      </div>
      <div className='c-wraper'>
     
     
     <img src={MyRubick} ></img>
     </div>
    </div>
  )
}

export default Contact
