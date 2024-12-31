// src/store/trainerSlice.js
import { createSlice } from '@reduxjs/toolkit';

const trainerSlice = createSlice({
    name: 'trainers',
    initialState: [],
    reducers: {
        addTrainer: (state, action) => {
            state.push(action.payload);
        },
        editTrainer: (state, action) => {
            const index = state.findIndex((trainer) => trainer.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        },
    },
});

export const { addTrainer, editTrainer } = trainerSlice.actions;
export default trainerSlice.reducer;
