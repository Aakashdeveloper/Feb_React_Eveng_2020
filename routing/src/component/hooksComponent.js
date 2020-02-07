import React,{useState,useEffect} from 'react';
import axios from 'axios'

var url = "fff"

function Hooks(){
    const [title]= useState('React Hooks Component')
    const [myval] = useState('React State From function')
    const [count,setCount] = useState(0)
    const [artist,setArtist] = useState()

    useEffect(() => {
        console.log(">>>>>useEffect")
        axios.get(url)
            .then((res) => {
                const myres = res.data
                setArtist(myres)
            })
    });



    return(
        <div>
            <h1>{title}</h1>
            <p>{myval}</p>
            <h2>{count}</h2>
            <button className="btn btn-info"
            onClick={() =>{setCount(count+1)}}>
                Counter
            </button>
        </div>
    )
}


export default Hooks;