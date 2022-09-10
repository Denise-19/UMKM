import React, { useState, useEffect } from 'react';
import { withRouter, Link } from 'react-router-dom';
import SubMenu from './SubMenu';
import Swal from "sweetalert2";
import {
    useTheme,
    useMediaQuery,
    makeStyles,
} from '@material-ui/core';
import './Navbar.css';

const useStyles = makeStyles((theme) => ({
    navbarWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '82px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '0 100px',
    },
    signup: {
        paddingLeft: '150px',
        margin: '20px',
        [theme.breakpoints.down(1324)]: { //laptop 1324
            padding: '20px 15px',
            margin: '0',
        }
    },
    logo: {
        [theme.breakpoints.down(1324)]: { //laptop 1324
            marginLeft: '-80px',
        }
    },
    navLinks: {
        textDecoration: 'none',
        color: 'rgba(255, 255, 255, 1)',
        fontFamily: 'Poppins',
        fontWeight: 700,
        ' &:hover': {
            color: '#9C8430',
        }
    },
}));


const menu = [
    {
        id: 1,
        name: 'Pendanaan',
        link: null,
        subMenu: [
            {
                id: 1,
                name: 'SubMenu 1',
                link: '/'
            },
            {
                id: 2,
                name: 'SubMenu 2',
                link: '/'
            },
            {
                id: 3,
                name: 'SubMenu 3',
                link: '/'
            },
        ]
    },
    {
        id: 1,
        name: 'Tentang Coopdar',
        link: null,
        subMenu: [
            {
                id: 1,
                name: 'List Projects',
                link: '/list-projects'
            },
            {
                id: 2,
                name: 'SubMenu 2',
                link: '/'
            },
            {
                id: 3,
                name: 'SubMenu 3',
                link: '/'
            },
        ]
    },
]

const Navbar = (props) => {
    const classes = useStyles();
    const [transform, setTransform] = useState('navMenu');
    const [icon, setIcon] = useState("mobileMenuIcon");
    const [openSubMenu, setOpenSubMenu] = useState(false);
    // console.log('props', props);

    const handleLogout = async () => {
        try {
            const data = {
                token: props.token
            }
            const url = `https://coopdar.com/coopdar-backend/api/logout`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${props.token}`
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (result.status === 'success') {
                localStorage.removeItem('authToken');
                Swal.fire({
                    title: "Success",
                    text: result.message,
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                }).then(function () {
                    // Redirect the user
                    window.location.href = "/";
                });
            }
            console.log('result', result);
        } catch (error) {
            console.log(error);
        }
    }

    const transformNavMenu = () => {
        transform === 'navMenu' ? setTransform('navMenu transform') : setTransform('navMenu');

        icon === "mobileMenuIcon" ? setIcon("mobileMenuIcon toggle") : setIcon("mobileMenuIcon");

    }

    const element = (item, i) => {
        let active = "";

        if (props.location.pathname === item.link) {
            active = 'navActive';
        }
        return (
            //jika punya submenu
            <li  onClick={() => setOpenSubMenu(!openSubMenu)} className={item.subMenu?.length > 0 ? ' navSubMenu' : 'navItems '} key={i}>
                <a
                    href={item.link}
                    className={classes.navLinks}
                >
                    <div style={{ margin: 10 }}>
                        <span style={{ whiteSpace: 'nowrap' }}>{item.name}</span>
                        {item.subMenu.length > 0 ? <i className="fas fa-caret-down"></i> : null}
                    </div>
                </a>
                {item.subMenu && openSubMenu && <SubMenu submenus={item.subMenu} />}
            </li>
        )
    };

    const showItems = () => { 
        return menu?.map((item, i) => {
            return element(item, i)
        })
    };

    return (
        <nav className={`fixed-top ${classes.navbarWrapper}`}>
            <Link to='/' className={classes.logo}><img src='../assets/images/logo-gold-small.png' /></Link>
            <div style={{ display: 'flex', width: '47%', }}>
                <ul className={transform}>
                    {props.location.pathname === '/signin' || props.location.pathname === '/signup' ? (
                        <li className={classes.signup}>
                            <Link to='/signup' className={classes.navLinks}>
                                Daftar
                            </Link>
                        </li>
                    ) : (
                        showItems()
                    )}
                    <div className='authWrapper'>
                        {props.userRegistered ?
                            <div className="dropdown" >
                                <a className="signin dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                    {`${props.userRegistered.username.substring(0, 7)}...`}
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    {/* <Link to='/investorPage' className='dropdown-item'>Dashboard</Link> */}
                                    <span onClick={handleLogout} className='dropdown-item'>Logout</span>
                                </ul>
                            </div>
                            :
                            <Link to='/signin' className='m-2 signin'>Masuk</Link>
                        }
                    </div>
                </ul>
            </div>
            <div className={icon} onClick={transformNavMenu}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);