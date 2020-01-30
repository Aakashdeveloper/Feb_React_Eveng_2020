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
    }

    render(){
        return(
            <header>
                <div className="logo"
                onClick={()=>{console.log('clicked button')}}
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

export default Header;*/
