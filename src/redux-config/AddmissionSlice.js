import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admissions: [],
  editingAdmission: null,
};

const admissionSlice = createSlice({
  name: "admissionData",
  initialState,
  reducers: {
    addAdmission: (state, action) => {
      state.admissions.push(action.payload);
    },
    setEditingAdmission: (state, action) => {
      state.editingAdmission = action.payload;
    },
    updateAdmission: (state, action) => {
      const index = state.admissions.findIndex((ad) => ad.id === action.payload.id);
      if (index !== -1) {
        state.admissions[index] = action.payload;
      }
    },
    clearEditingAdmission: (state) => {
      state.editingAdmission = null;
    },
  },
});

export const { addAdmission, setEditingAdmission, updateAdmission, clearEditingAdmission } =
  admissionSlice.actions;
export default admissionSlice.reducer;
