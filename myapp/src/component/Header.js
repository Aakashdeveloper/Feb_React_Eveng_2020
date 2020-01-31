import React,{Component} from 'react';
import './Header.css';

class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            title:'React App',
            userinput:'User Text here'
        }
    }

    inputCapture(event){
        console.log(event.target.value)
        this.setState({userinput:event.target.value?event.target.value:"User Text Here"})
        this.props.userText(event.target.value)
    }

    buttonClick(event){
        console.log('hhiiiii')
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log('hhiiiii')}}
                >{this.state.title}</div>
                <center>
                    <input onChange={this.inputCapture.bind(this)}/>
                    <p>{this.state.userinput}</p>
                </center>
                <hr/>
            </header>
        )
    }
    
}

export default Header;




/*
import React from 'react';

const Header = () => {
    return(
        <header>
            <div>Logo</div>
            <input/>
            <hr/>
        </header>
    )
}

export default Header;

var a = 1
var b = 2
function add(){
    return a+b
}

add(3,4)

*/
