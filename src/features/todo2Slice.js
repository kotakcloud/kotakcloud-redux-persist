import { createSlice } from '@reduxjs/toolkit';
import { uuid } from '../utils';

export const todo2Slice = createSlice({
    name: 'todos2',
    initialState: [],
    reducers: {
        addTodo2: (state, action) => {
            const todo = {
                id: uuid(),
                text: action.payload,
            };

            state.push(todo);
        },
    }
});

// this is for dispatch
export const { addTodo2 } = todo2Slice.actions;

// this is for configureStore
export default todo2Slice.reducer;