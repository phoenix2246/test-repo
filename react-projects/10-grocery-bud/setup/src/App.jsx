import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getLocalStorage = () =>{
  const list = localStorage.getItem('list')
  if(list){
    return JSON.parse(list)
  }
  else{
    return []
  }
}

function App() {
  
  const [name,setName] = useState('')
  const [edit,setEdit] = useState(false)
  const [editId,setEditId] = useState(null)
  const [alert,setAlert] = useState({show:false,type:'',msg:''})
  const [list,setList] = useState(getLocalStorage())
  
  const showAlert = (show=false,type='',msg='') =>{
    setAlert({show,type,msg})
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(!name){
      showAlert(true,'danger','please enter value')
    }
    else if(name && edit){
      setList(
        list.map((item)=>{
          if(item.id === editId){
            return {...item,title:name}
          }
          return item
        })
      )
      setName('')
      setEditId(null)
      setEdit(false)
      showAlert(true,'success','change')
    }else{
    const newItem = { id: new Date().getTime().toString(),title:name}
    setList([...list,newItem])
    setName('')
    showAlert(true,'success','Item added to the list')
    }
  }

  const removeItem = (id) =>{
    showAlert(true,'danger','Item removed')
    setList(list.filter((item)=> item.id !== id))
  }

  const clearBtn = () =>{
    showAlert(true,'danger','Empty list')
    setList([])
  }

  const editItem = (id) =>{
    const specificItem = list.find((item)=> item.id === id)
    
    setEdit(true)
    setEditId(id)
    setName(specificItem.title)

  }

  useEffect(()=>{
    localStorage.setItem('list',JSON.stringify(list))
  },[list])

  return <div className="section-center">
    <form action="" className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} list={list}/>}
      <h2>Grocery Bud</h2>
      <div className="form-control">
        <input type="text" className='grocery' placeholder='eg.Eggs' value={name} onChange={(e)=>setName(e.target.value)} />
        <button className="submit-btn" type='submit'>
          {edit?'edit':'submit'}
        </button>
      </div>
    </form>
    {list.length > 0 && (<div className="grocery-list">
      <List items={list} removeItem = {removeItem} editItem = {editItem}/>
      <button className="clear-btn" onClick={clearBtn}>Clear</button>
    </div>)}
  </div>
  
}

export default App
