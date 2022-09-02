import React, { useState, useContext } from 'react'


const AppContext = React.createContext()

const AppProvider = ({children}) =>{

    const [showSideBar,setShowSideBar] = useState(false)
    const [showModal,setShowModal] = useState(false)

    const openSideBar = () => {
        setShowSideBar(true)
    }
    const closeSideBar = () => {
        setShowSideBar(false)
    }
    const openModal = () => {
        setShowModal(true)
    }
    const closeModal = () => {
        setShowModal(false)
    }

    return <AppContext.Provider value={{showModal,showSideBar,openModal,openSideBar,closeModal,closeSideBar}}>{children}</AppContext.Provider>
}
//custom hook

export const useGlobalContext = () =>{
    return useContext(AppContext)
}


export {AppContext,AppProvider}