import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Link to="/">
                Home Page
            </Link>
            <Link to="/form">
                Forms
            </Link>
        </header>
    )
}

export default Header;