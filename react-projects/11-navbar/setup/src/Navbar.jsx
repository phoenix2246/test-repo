import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [show,setShow] = useState(false)
  const linkContainerRef = useRef(null)
  const linkRef = useRef(null)

  useEffect(()=>{
  const linkHeight = linkRef.current.getBoundingClientRect().height
 if(show){
  linkContainerRef.current.style.height = `${linkHeight}px`
 }else{
  linkContainerRef.current.style.height = '0px'
 }

  },[show])
  
  
  return <nav>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo}/>
        <button className="nav-toggle" onClick={()=>{setShow(!show)}}>

          <FaBars/>
        </button>
      </div> 
      <div className='links-container' ref={linkContainerRef}>
        <ul className="links" ref={linkRef}>
        {links.map((link)=>{
            const {id,url,text} = link
            return <li key={id}>
              <a href={url}>{text}</a>
            </li>
          })}
        </ul>
      </div>
      <ul className="social-icons">
        {social.map((i)=>{
          const {id,url,icon} = i
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        })}
      </ul>
    </div>
  </nav>
}

export default Navbar
