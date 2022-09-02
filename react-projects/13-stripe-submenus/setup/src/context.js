import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext()

export const AppProvider = ({children}) =>{

    const [showSideBar,setShowSideBar] = useState(false)
    const [showSubMenu,setShowSubMenu] = useState(false)

    const openSideBar = () =>{
        setShowSideBar(true)
    }
    const closeSideBar = () =>{
        setShowSideBar(false)
    }
    const openSubMenu = () =>{
        setShowSubMenu(true)
    }
    const closeSubMenu = () =>{
        setShowSubMenu(false)
    }

    return <AppContext.Provider value={
        {showSideBar,showSubMenu,openSideBar,closeSideBar,openSubMenu,closeSubMenu}
    }>{children}</AppContext.Provider>
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}