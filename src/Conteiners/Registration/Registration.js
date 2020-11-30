import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { navigation } from '../../constants';
import { registrationOperation } from '../../redux/operations/authOperation';
import './Registration.css';

const initialState = { name: '', email: '', password: '' };

const Registration = () => {
    const { login } = navigation;

    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();

    const inputHeandler = ({ target }) => {
        const { name, value } = target;

        setForm(state => ({ ...state, [name]: value }))
    }
    const submitHeandler = (e) => {
        e.preventDefault();
        dispatch(registrationOperation(form))

    }

    return (
        <div className='div'>
            <h1>Registration</h1>
            <form className='registration-form' onSubmit={submitHeandler}>
                <input name='name' type='text' placeholder='UserName' onChange={inputHeandler} value={form.name} />
                <input name='email' type='email' placeholder='UserEmail' onChange={inputHeandler} value={form.email} />
                <input name='password' type='password' placeholder='UserPassword' onChange={inputHeandler} value={form.password} />
                <button type='submit'>Sign UP</button>
            </form>
            <p>If you already have an account <NavLink to={login}>login</NavLink></p>
        </div>
    );
};

export default Registration;