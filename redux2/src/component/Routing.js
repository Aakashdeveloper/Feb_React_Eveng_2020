import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';

import Home from '../container/Home';
import NewsDetails from '../container/NewsDetails'
import Header from './Header';
import Footer from './Footer';
import Forms from '../container/Forms';

const Routing = () => {
    return(
        <BrowserRouter>
            <div>
                <Header/>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/details/:id" component={NewsDetails}></Route>
                <Route exact path="/forms" component={Forms}></Route>
                <hr/>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing