import React,{Component} from 'react';
import './Header.css';

class Header extends Component {

    constructor(props){
        super(props)

        this.state={
            title:'React App'
        }
    }

    render(){
        return(
            <header>
                <div className="logo">{this.state.title}</div>
                <center>
                    <input/>
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
