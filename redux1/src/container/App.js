import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../action';
import ListFile from '../component/listfile'


class App extends Component {

    componentDidMount(){
        this.props.moviesList()
    }

    render(){
        return(
            <div>
                <h1>Redux App</h1>
                <ListFile list={this.props.mydata}></ListFile>
            </div>
        )
    }
}

//Recive state from the state
function mapStateToProps(state){
    console.log(state)
    return{
        mydata:state.movies
    }
}

export default connect(mapStateToProps,actions)(App)