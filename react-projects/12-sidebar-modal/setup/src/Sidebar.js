import React from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { useGlobalContext } from './context'

const Sidebar = () => {
  const {showSideBar,closeSideBar}=useGlobalContext()
  return (
   <aside className={`${showSideBar? 'sidebar show-sidebar':'sidebar'}`}>
    <div className='sidebar-header'>
      <img src={logo} className='logo' alt='coding adit'></img>
      <button className='close-btn' onClick={closeSideBar}>
        <FaTimes/>
      </button>
    </div>
    <ul className='links'>
      {links.map((link)=>{
        const {id,url,text,icon} = link
        return <li key={id}>
          <a href={url}>{icon}{text}</a>
        </li>
      })}
    </ul>
    <ul className='socail-icons'>
      {
        social.map((socailIcon)=>{
          const {id,url,icon} = socailIcon
          return <li key={id}>
            <a href={url}>{icon}</a>
          </li>
        })
      }

    </ul>
   </aside>
  )
}

export default Sidebar
