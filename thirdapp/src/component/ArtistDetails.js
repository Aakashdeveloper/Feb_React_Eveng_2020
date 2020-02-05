import React, {Component} from 'react';
import axios from 'axios';
import Header from './Header';
import Albums from './Albums';

const url = "http://localhost:8900/artists"
class ArtistDetails extends Component {
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }
    render(){
        console.log(">>>",this.state.details)
        const mydata = this.state.details;
        return(
            <React.Fragment>
                <Header/>
                <div className="artist_bio">
                    <div className="artist_image">
                        <span style={{background:`url('/images/covers/${this.state.details.cover}.jpg')`}}>
                        </span>
                        <h3>{mydata.name}</h3>
                        <div className="bio_text">
                            {this.state.details.bio}
                        </div>

                    </div>
                </div>
                <Albums albumdata={mydata.albums}/>
            </React.Fragment>
        )
    }

    /*componentDidMount(){
        console.log(this.props.match.params.id)
        axios.get(`${url}/${this.props.match.params.id}`)
        .then(response => {
            this.setState({
                details:response.data
            })
        })
        .catch((err) => {
            throw err
        })
    }*/

    async componentDidMount(){
        const response = await axios.get(`${url}/${this.props.match.params.id}`)
        const mydata = response.data
        this.setState({
            details:mydata
        })
    }
}

export default ArtistDetails;