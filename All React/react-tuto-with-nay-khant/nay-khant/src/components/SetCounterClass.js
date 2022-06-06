import React, { Component } from 'react';

class ClassCounter extends Component {
    state = {
        name : '',
        count : 0}
        
        componentDidMount(){
            document.title = `Change`
        }
        componentDidUpdate(preProps, preState ){
            if(preState.count !== this.state.count){
                console.log("Updating...")
            document.title = `Age ${this.state.count}`
            }
        }

    render() { 
        

        return (
            <div>
                <div>
                    <h3>{`Name : ${this.state.name}`}</h3>
                </div>
                <input type='text' value={this.state.name} onChange={(e)=>this.setState({name : e.target.value})} ></input>
                <div>
                    <button onClick={()=>this.setState({count : this.state.count + 1})} >{`You Click ${this.state.count} times!`}</button>
                    
                </div>
            </div>
        );
    }
}
 
export default ClassCounter;