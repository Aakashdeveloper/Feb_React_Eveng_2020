import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <div>
                <Link to="/">
                    <h1>Redux App</h1>
                </Link>
                &nbsp;
                <Link to="/forms">
                    <h1>Forms</h1>
                </Link>
            </div>
        </header>
    )
}

export default Header;