import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { AppContext, useGlobalContext } from './context'
const Modal = () => {
  const {showModal,closeModal} = useGlobalContext()
  return <div className={`${showModal? 'modal-overlay show-modal' : 'modal-overlay'}`}>
<div className='modal-container'>
  <h3>model content</h3>
  <button className='close-modal-btn' onClick={closeModal}>
    <FaTimes/>
  </button>
</div>
  </div>
}

export default Modal
