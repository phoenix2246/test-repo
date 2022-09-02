import React from 'react'
import "./intro.css"
import Me from "../../img/me1.png"

const Intro = () => {
  return (
    <div className="intro">
     <div className='intro-left'>
        <div className='intro-left-wraper'>
            <h2 className='name-text'>Hello My Name is</h2>
            <h2 className='name'>WinMyintAung</h2>
            <div className='title'>
                <div className='title-wraper'>
                    <div className='title-wraper-item'>WebDeveloper</div>
                    <div className='title-wraper-item'>UI/UX</div>
                    <div className='title-wraper-item'>Photo</div>
                    <div className='title-wraper-item'>Writer</div>
                    <div className='title-wraper-item'>Painter</div>
                    <div className='title-wraper-item'>Musician</div>
                </div>
            </div>
            <div className='des-div'>Honestly, ever since the e-commerce app, i feel 110% comfortable working on react, redux and all.. it got me thinking to start building mobiles too with react-native... i really would love to see you build react native apps too...don't know why it feels so good waiting and learning with you...</div>
            
        </div>
     </div>
     <div className='intro-right'>
        {/* <div className='right-bg'></div> */}
        <img src={Me} className='right-img'/>
     </div>

    </div>
  )
}

export default Intro
