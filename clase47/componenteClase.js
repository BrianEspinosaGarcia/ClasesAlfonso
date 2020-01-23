import React, { Component } from 'react';

class MyClassComponent extends Component {
  constructor(props){
    super(props);
    this.state ={
      count: 1
    }
  }

  render(){
    return(
      <div>
        <h1>HEllo from Class Component</h1>
        <h2>Count : { this.props.count.}</h2>
      </div>
    );
  }
}

export default MyClassComponent;
