import React from 'react';
import '../assets/Animation.css'
const NavLink = ({route}) => {
    return (
        <div className='py-3'>
            <li><a className='animation1 inline-block relative' href="/">{route.name}</a></li>
        </div>
    );
};

export default NavLink;