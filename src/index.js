
import React from "react";
import ReactDOM from "react-dom";
import TestCom from './TestCom';
class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: new Date()
    }
  }
  render() {
    return (
      <div>
        {this.state.value.toString()}
        <TestCom />  
      </div>
    )
  }
}

ReactDOM.render(
  <Index/>,
  document.getElementById("index"));