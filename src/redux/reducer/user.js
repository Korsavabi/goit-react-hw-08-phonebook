import { GET_USER } from '../constant';
import {createReducer} from '@reduxjs/toolkit';

const initialState = { name: null, email: null };

export default createReducer(initialState, {
    [GET_USER ]: (state, action) => action.payload,
    
})