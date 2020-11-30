import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../constants';
import { loginOperation } from '../../redux/operations/authOperation';
import './Login.css';

const initialState = { email: '', password: '' }

const Login = () => {
    const { register } = navigation;
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    const inputHeandler = ({ target }) => {
        const { name, value } = target;
        setForm(state => ({ ...state, [name]: value }))
    }
    const submitHeandler = (e) => {
        e.preventDefault();
        dispatch(loginOperation(form))
    }
    return (
        <div>
            <h1>Login</h1>
            <form className='login-form' onSubmit={submitHeandler}>
                <input name='email' type='email' placeholder='UserEmail' onChange={inputHeandler} value={form.email} />
                <input name='password' type='password' placeholder='UserPassword' onChange={inputHeandler} value={form.password} />
                <button type='submit'>Sign UP</button>
            </form>
            <p>If you already have an account <NavLink to={register}>Sign UP</NavLink></p>
        </div>
    );
};

export default Login;