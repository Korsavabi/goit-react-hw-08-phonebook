import axios from 'axios';
import { loaderOn, loaderOff } from '../action/loader';
import { setError } from '../action/error';
import { setItem } from '../action/todoList';

const option = (token) => ({
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export const getTodoOperation = (token) => async (dispatch) => {
    try {
        dispatch(loaderOn())
        const result = await axios.get('https://goit-phonebook-api.herokuapp.com/contacts', option(token));
        dispatch(setItem(result.data))

    } catch (error) {
        dispatch(setError('Somethong went wrong, try later'))
    }
    finally {
        dispatch(loaderOff())
    }
}
export const postTodoOperation = (todo, token) => async (dispatch) => {
    try {
        dispatch(loaderOn())
        const result = await axios.post('https://goit-phonebook-api.herokuapp.com/contacts', todo, option(token));
        dispatch(setItem(result.data))
    } catch (error) {
        dispatch(setError('Somethong went wrong, try later'))
    }
    finally {
        dispatch(loaderOff())
    }
}
export const deleteTodoOperation = (contactId, token) => async (dispatch) => {
    try {
        dispatch(loaderOn())
        await axios.delete(`https://goit-phonebook-api.herokuapp.com/contacts/${contactId}`, option(token))

    } catch (error) {
        dispatch(setError('Somethong went wrong, try later'))
    }
    finally {
        dispatch(loaderOff())
    }
}