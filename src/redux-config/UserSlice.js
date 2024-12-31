

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allData: [],
  editUser: { data: "", isEdit: false },
};

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {

    showData: (state, action) => {
      state.allData = action.payload;
    },


    addData: (state, action) => {
      state.allData = [...state.allData, action.payload];
    },
    // action object that is dispatched to the Redux store. This object typically contains a type and a payload.

    editData: (state, action) => {
      state.editUser = { data: action.payload, isEdit: true };
    },

    updateUser: (state, action) => {
      state.allData = state.allData.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.editUser = { data: "", isEdit: false };
    },
  },
});

export const { addData, editData, updateUser, showData } = userSlice.actions;
export default userSlice.reducer;

