import React, {Component} from 'react';

class ArtistDetails extends Component {
    constructor(props){
        super(props)

        this.state={
            details:''
        }
    }
    render(){
        return(
            <div>
                Details
            </div>
        )
    }

    componentDidMount(){
        console.log(this.props.match.params.id)
    }
}

export default ArtistDetails;