import React from 'react';

const PostDetails = (props) => {
    console.log(props.match.params.topic)
    return(
        <div className="panel panel-info">
            <div className="panel-heading">
                <h2>Details Page</h2>            
            </div>
            <div className="panel-body">
            <b>{props.match.params.topic}</b> is simply dummy text of the printing and typesetting industry. lorem ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. it has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. it was popularised in the 1960s with the release of letraset sheets containing lorem ipsum passages, and more recently with desktop publishing software like aldus pagemaker including versions of lorem ipsum
            </div>
        </div>
    )
}

export default PostDetails;