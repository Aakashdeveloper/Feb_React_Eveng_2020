import React from 'react';
import { BrowserRouter, Route, Link} from 'react-router-dom';

import Home from './Home';
import Profile from './Profile';
import Post from './Posts';
import PostDetails from './PostDetails';
import Hooks from './hooksComponent';
import Context from './contextHooks';
import LifeCycle from './lifecycle';

const Routing = () => {
    return(
        <BrowserRouter>
        <div>
            <header>
            <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                    <a class="navbar-brand" href="#">NareshIT</a>
                    </div>
                    <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/post">Post</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/hooks">Hooks</Link></li>
                        <li><Link to="/context">Context</Link></li>
                        <li><Link to="/lifeCycle">LifeCycle</Link></li>
                    </ul>
                    </div>
                </div>
                </nav>
            </header>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route exact path="/post/:topic" component={PostDetails}></Route>
            <Route exact path="/profile" component={Profile}></Route>
            <Route exact path="/hooks" component={Hooks}></Route>
            <Route exact path="/context" component={Context}></Route>
            <Route exact path="/lifeCycle" component={LifeCycle}></Route>
            
            
        </div>
    </BrowserRouter>
    )
}

export default Routing

