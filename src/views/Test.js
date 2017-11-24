import axios from 'axios';
import React, { Component } from 'react';

class Test extends Component{
	constructor(props){
        super(props);
        this.state={
                    tasks: []
                    }
                  }
    componentWillReceiveProps(nextProps){
    console.log("nextProps",nextProps);
  }
    render(){
    	console.log("props",this.props)
    	return(<div>{this.props.role}</div>)
    }
} 

export default Test