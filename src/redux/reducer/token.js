import {SET_TOKEN, RESET_TOKEN} from '../constant';
import {createReducer} from '@reduxjs/toolkit';

const initialState = null;

export default createReducer(initialState, {
    [SET_TOKEN]: (state, action) => action.payload,

    [RESET_TOKEN]: () => null
})