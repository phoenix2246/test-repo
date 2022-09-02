import React from 'react'
import "./form.css"
import Facebook from "../../img/facebook.png"
import Instagram from "../../img/instagram.png"
import Twitter from "../../img/twitter.png"


const Form = () => {
  return (
    <div className='f'>
        <div className='f-left'>
        <div className="form">
        
        <input type='text' name='name' placeholder='Enter Your Name'></input>
        <input type='text' name='email' placeholder='Enter Your Email'></input>
        <input type='text-area' placeholder='Enter Your Comment' ></input>
        <textarea placeholder='Enter Your Message'></textarea>
        <button type='submit'>Submit</button>
        
      </div>
      </div>
      <div className='f-right'>
        <div className='f-text'>
        <h2>What is your story?</h2>
        <p>Get in touch with me, I am alwyas looking for freelance porjects to improve my skills and I am sure I can make your company more profits.</p>
        </div>
        <div className='social-icons'>
            <div className='line'></div>
            <div className='icons-div'>
                <img src={Facebook} className='icons'></img>
                <img src={Instagram} className='icons'></img>
                <img src={Twitter} className='icons'></img>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Form
