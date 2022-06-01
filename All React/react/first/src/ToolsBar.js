import React from "react";
import './ToolsBar.css';

const styles = {
    toolbar: {
    marginBottom: 20,
    background: 'blue',
    border: '4px solid black',
    color: 'white',
    padding: 15
    }}

class ToolsBar extends React.Component{
    render(){
      return(
        <div style={styles.toolbar}>
          {this.props.children}
        </div>
      )
    }
  }
  export default ToolsBar