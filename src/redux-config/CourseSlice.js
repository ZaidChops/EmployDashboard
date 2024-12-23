import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [], 
  editingCourse: null, 
};

const CourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    addCourse: (state, action) => {
      state.courses.push(action.payload); 
    },
    setEditingCourse: (state, action) => {
      state.editingCourse = action.payload; 
    },
    updateCourse: (state, action) => {

      state.courses = state.courses.map((course) =>
        course.id === action.payload.id ? action.payload : course
      );
    },
    clearEditingCourse: (state) => {
      state.editingCourse = null; 
    },
  },
});

export const { addCourse, setEditingCourse, updateCourse, clearEditingCourse } =
  CourseSlice.actions;

export default CourseSlice.reducer;