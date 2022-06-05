import React from 'react'


class Hello extends React.Component{
   state = {
       message: 'Fuck U Bitch '
   }
    changeMessage = () =>{
        this.setState ({
            message: "Dont Fuck Me Plz"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={this.changeMessage}>Change</button>
            </div>
        )
    }

}


export default Hello;