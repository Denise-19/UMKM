import React from 'react';
import {withRouter, Link } from 'react-router-dom';

const SubMenu = ({ submenus }) => {
    return (
        <ul className='subMenu' >
            {submenus?.map((item, i) => (
                <li key={i} className='subMenuItems'>
                    <Link to={item.link} className="subMenuLinks">{item.name}</Link>
                </li>
            ))}
        </ul>
    )
}

export default SubMenu;