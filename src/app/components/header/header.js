import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {

        const test = '';

        return (
            <div className='header'>
                <div className="header__inner">
                    <NavLink to='/request' className="header__link"> Request </NavLink>
                    <NavLink to='/news' className="header__link"> News </NavLink>
                </div>
            </div>
        );
    }
}

export default Header;
