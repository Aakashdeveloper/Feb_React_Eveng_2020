import React,{Component} from 'react';
import Header from './Header';
import NewsList from './NewsList';
import JSON from '../db.json';

class Home extends Component {
    
    constructor(){
        super()

        this.state={
            news:JSON
        }
    }
    render(){
        //console.log(JSON);
        return(
            <React.Fragment>
                <Header/>
                <NewsList newsdata={this.state.news}/>
            </React.Fragment>
        )  
    }
}

export default Home;