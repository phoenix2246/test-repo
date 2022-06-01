import React from 'react'
const MyContext = React.createContext('Hello React');

const App = () =>{
  return(
    <Header/>
  )
}

const Header = () =>{
  return(
    <Title/>
  )
}

const Title = () =>{
  const name = React.useContext(MyContext)
  return(
      <h1>{name}</h1>
  )
}

export default App;
