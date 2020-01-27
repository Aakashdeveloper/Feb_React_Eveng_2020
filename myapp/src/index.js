import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header'

const App = () => {
    return(
        <React.Fragment>
            <Header/>
            <h1>Welcome to react</h1>
            <h2>This is from Nareshit</h2>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'));