import React from 'react'
import "./about.css"
import Rubick from "../../img/rubick.png"
import Logo from "../../img/logo.png"

const About = () => {
  return (
    <div className='a'>
      <div className='a-left'>
        <div className='left-card'>
        
        
            <img src={Rubick} alt="" className="a-img" />
        
        </div>
      </div>
      <div className="a-right">
        <h1 className='right-header'>About Me</h1>
        <div className='right-para'>
            <p>Honestly, ever since the e-commerce app, i feel 110% comfortable working on react, redux and all.. it got me thinking to start building mobiles too with react-native... i really would love to see you build react native apps too...don't know why it feels so good waiting and learning with you...

            </p>
        </div>
        <div className='job'>
            <img src={Logo} className="job-img"></img>
            <div className='job-des-div'>
                <h2>VSG</h2>
                <p>Intern UI/UX designer and Front-end developer at VSG.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
