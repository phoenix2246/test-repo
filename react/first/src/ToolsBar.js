import React from "react";
import './ToolsBar.css';

class ToolsBar extends React.Component{
    render(){
      return(
        <div className="toolsbar">
          {this.props.children}
        </div>
      )
    }
  }
  export default ToolsBar