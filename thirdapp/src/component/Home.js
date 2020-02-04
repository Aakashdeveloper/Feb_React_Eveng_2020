import React, {Component} from 'react';
import Banner from './Banner';
import ArtistList from './ArtistList';

const url = "http://localhost:8900/artists"
class Home extends Component {
    constructor(props){
        super(props);

        this.state={
            artist:''
        }
    }


    render(){
        return(
            <div>
                <Banner/>
                <ArtistList artistData={this.state.artist}></ArtistList>
            </div>
        )
    }

    componentDidMount(){
        fetch(url,{
            method:'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                artist:data
            })
        })
    }
}

export default Home