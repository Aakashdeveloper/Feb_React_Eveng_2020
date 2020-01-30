import React from 'react';

const NewsList = (props) => {
    //console.log("<<<<In NewsList>>>>",props)

    const renderlist = props.newsdata.map((item) => {
        return(
            <div key={item.id}>
                <h3>{item.title}</h3>
                <div>{item.feed}</div>
            </div>
        )
    })

    return(
        <div>
           {renderlist}
        </div>
    )
}

export default NewsList;