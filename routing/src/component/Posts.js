import React from 'react';
import { Link } from 'react-router-dom';

const Posts = () => {
    return(
        <div className="panel panel-danger">
            <div className="panel-heading">
                <h2>Post Page</h2>            
            </div>
            <div className="panel-body">
                <h2>JavaScript</h2>
                <Link to={`/post/JavaScript`}>Details</Link>
                <h2>NodeJs</h2>
                <Link to={`/post/NodeJs`}>Details</Link>
                <h2>Angular</h2>
                <Link to={`/post/Angular`}>Details</Link>
                <h2>AWS</h2>
                <Link to={`/post/AWS`}>Details</Link>
            </div>
        </div>
    )
}

export default Posts;