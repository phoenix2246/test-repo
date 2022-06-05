import React from 'react'

const Fun = () => {
   const showMessage = () =>{
        console.log("Welcome")
    }
    return(
        <div>
            <button onClick={showMessage}>Change</button>
        </div>
    )
}
export default Fun;