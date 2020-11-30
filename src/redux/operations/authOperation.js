import axios from 'axios';
import { loaderOn, loaderOff } from '../action/loader';
import { setError } from '../action/error';
import { setToken, resetToken } from '../action/token';
import { getUser } from '../action/user';
import { setItem } from '../action/todoList';

export const registrationOperation = (userData) => async (dispatch) => {
    try {
        dispatch(loaderOn());
        const result = await axios.post('https://goit-phonebook-api.herokuapp.com/users/signup', userData);
        dispatch(setToken(result.data.token));
    } catch (error) {
        dispatch(setError('Registration Error'));
    }
    finally {
        dispatch(loaderOff());
    }
}

export const loginOperation = (userData) => async (dispatch) => {
    try {
        dispatch(loaderOn());
        const result = await axios.post('https://goit-phonebook-api.herokuapp.com/users/login', userData);
        dispatch(setToken(result.data.token));
    } catch (error) {
        dispatch(setError('Login Error'));
    }
    finally {
        dispatch(loaderOff());
    }
}

export const logOutOperation = (token) => async (dispatch) => {
    try {
        dispatch(loaderOn());
        await axios({
            url: 'https://goit-phonebook-api.herokuapp.com/users/logout',
            method: 'post',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(resetToken());
        dispatch(setItem([]));
    } catch (error) {
        dispatch(setError('LogOut Error'));
    }
    finally {
        dispatch(loaderOff());
    }
}
export const userCurrentOperation = (token) => async (dispatch) => {
    try {
        dispatch(loaderOn())
        const result = await axios({
            url: 'https://goit-phonebook-api.herokuapp.com/users/current',
            method: 'get',
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        dispatch(getUser(result.data));
    } catch (error) {
        dispatch(setError('bad request'))

    }
    finally {
        dispatch(loaderOff())
    }
}