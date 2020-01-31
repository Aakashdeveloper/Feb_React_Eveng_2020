import React,{Component} from 'react';
import Header from './Header';
import NewsList from './NewsList';
import JSON from '../db.json';

class Home extends Component {
    
    constructor(){
        super()

        this.state={
            news:JSON,
            filtered:JSON
        }
    }


    filterNews(keyword){
        const output = this.state.news.filter((data) => {
            return (data.title.toLowerCase().indexOf(keyword.toLowerCase())>-1 || data.feed.toLowerCase().indexOf(keyword.toLowerCase())>-1)
        });

        this.setState({filtered:output})
    }

    render(){
        //console.log(JSON);
        return(
            <React.Fragment>
                <Header userText={(headerdata) => this.filterNews(headerdata)}/>
                <NewsList newsdata={this.state.filtered}/>
            </React.Fragment>
        )  
    }
}

export default Home;

