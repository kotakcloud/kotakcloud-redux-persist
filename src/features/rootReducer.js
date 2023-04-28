import { combineReducers } from '@reduxjs/toolkit';

import todoReducer from './todoSlice';
import todo2Reducer from './todo2Slice';

export const rootReducer = combineReducers({
    todoReducer,
    todo2Reducer
})