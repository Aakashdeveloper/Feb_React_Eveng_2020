import React,{Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {handleLikes} from '../actions';


class LikeCounter extends Component{

    addLikes = (userclick) => {
        const newLikes = (userclick) === 'ADD'? [this.props.likes+1,this.props.dislikes]:[this.props.likes,this.props.dislikes+1]

        this.props.dispatch(handleLikes(newLikes,this.props.articleId))

    }

    render(){
        return(
            <div className="addlikes-wrapper">
                <h3>How About Article</h3>
                <div className="addlikes-container">
                    <div className="btn likes"
                    onClick={() => this.addLikes('ADD')}>
                        <div className="hits">
                            {this.props.likes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-up"></i>
                        </div>
                    </div>
                    <div className="btn dislikes"
                      onClick={() => this.addLikes('REMOVE')}>
                        <div className="hits">
                            {this.props.dislikes}
                        </div>
                        <div className="icon">
                            <i className="fa fa-thumbs-down"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


LikeCounter.protoTypes ={
    dispatch: PropTypes.func
}

export default connect()(LikeCounter)