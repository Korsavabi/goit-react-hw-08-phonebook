import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../constants';
import { logOutOperation } from '../../redux/operations/authOperation';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './Header.css';

const Header = () => {
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logOutOperation(token));
    }

    return (
        <AppBar position="static">
            <Toolbar variant="dense">
                <NavLink exact to={navigation.home} className="nav__link">Home</NavLink>
                <NavLink exact to={navigation.login} className="nav__link">Login</NavLink>
                <NavLink exact to={navigation.register} className="nav__link">Registration</NavLink>
                <button onClick={logOut}>LogOut</button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;