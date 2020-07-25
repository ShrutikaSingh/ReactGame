import  {Component} from "react";
import {KeyCodes} from "./keyCodes";
import PropTypes from "prop-types";

class KeyBoardListner extends Component{
  
    static propTypes = {
        onKeyDown: PropTypes.func.isRequired
    }
    componentDidMount(){
        document.addEventListener('keydown', this.handleKeyDown);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    onKeyDown = (keyCode) => {
        const {handleGo}=this.props  //getting the handleGo function from BoxComponent
        // eslint-disable-next-line default-case
        switch (keyCode) {
            case KeyCodes.ARROW_UP:
                handleGo(30, 0);
                break;
            case KeyCodes.W_UP:
                handleGo(30, 0);
                break;
            case KeyCodes.ARROW_DOWN:
                handleGo(-30, 0);
                break;
            case KeyCodes.S_DOWN:
                handleGo(-30, 0);
                break;
            case KeyCodes.ARROW_LEFT:
                handleGo(0, 30);
                break;
            case KeyCodes.A_LEFT:
                handleGo(0, 30);
                break;
            case KeyCodes.ARROW_RIGHT:
                handleGo(0, -30);
                break;
            case KeyCodes.D_RIGHT:
                handleGo(0, -30);
                break;
            case KeyCodes.DELETE:
                handleGo(0,0,"none")
      }
    };

    //function for checking the keyCodes and then executing the keyDown func
    handleKeyDown = event => {
        event.preventDefault()
        const {keyCode} = event;
        //console.log(event,"at event")
        const allowedKeyCodes = Object.values(KeyCodes)
        if(allowedKeyCodes.includes(keyCode)){
            this.onKeyDown(keyCode)
        }
        return;
    }
    render(){
        //console.log("eer",this.props.handleGo)
        return this.props.children
    }
}

export default  KeyBoardListner ;

