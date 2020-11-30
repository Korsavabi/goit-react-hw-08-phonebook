import { combineReducers } from 'redux';
import filter from './filter';
import todoList from './todoList';
import errorReducer from './error';
import loader from './loader';
import token from './token';
import user from './user';

const rootReducer = combineReducers({
    filter,
    todoList,
    errorReducer,
    loader,
    token,
    user,
})

export default rootReducer;