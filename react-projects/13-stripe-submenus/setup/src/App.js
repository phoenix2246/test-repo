import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'
import { useGlobalContext } from './context'
function App() {
  const data = useGlobalContext()
  console.log(data)
  return (
    <>
      <Navbar></Navbar>
      <Hero/>
      <Sidebar/>
      <Submenu/>
    </>
  )
}

export default App
