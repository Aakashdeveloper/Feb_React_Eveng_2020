import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
    console.log(props)
    const list = ({artistData}) => {
        if(artistData){
            return artistData.map((item,index) => {

                const style={
                    background:`url('/images/covers/${item.cover}.jpg')`
                }

                return(
                    <Link key={item.id} to={`/artist/${item.id}`} className="artist_item"
                    style={style}>
                        <div>{item.name}</div>
                    </Link>
                )
            })
        }
    }
    return(
        <div className="artist_list">
            <h4>Browse The Artists</h4>
            {list(props)}
        </div>
    )
}

export default ArtistList