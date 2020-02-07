import React from 'react';
import { BrowserRouter,Route, Redirect} from 'react-router-dom';

import Home from './Home';
import ArtistDetails from './ArtistDetails'
import FormsComponent from './FormsComponent';

const Routing = ()=> {
    /*
    const auth={
        isadmin=localStorage.getItem('role')
        if(isadmin==="Admin"){
            this.route:'abac'
        }else{
            this.route:'Home'
        }
    }
*/
    return(
        <div>
            <BrowserRouter>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/artist/:id" component={ArtistDetails}></Route>
                <Route exact path="/form" component={FormsComponent}></Route>
            </BrowserRouter>
        </div>
    )
}

export default Routing