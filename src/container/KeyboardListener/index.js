import { Component } from "react";

class KeyboardListener extends Component{
    constructor(props){
        super();
        console.log("at keyboard listner")
    }
    //adding event listener for every component re-renders
    componentDidMount(){
        document.addEventListener("keydown");
    }

    componentWillMount(){
        document.addEventListener("keydown");
    }

    render(){
    return this.props.children
    }
    
}

export default KeyboardListener;