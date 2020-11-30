import {SET_TOKEN, RESET_TOKEN} from '../constant';
import { createAction } from '@reduxjs/toolkit';

export const setToken = createAction(SET_TOKEN);

export const resetToken = createAction(RESET_TOKEN);