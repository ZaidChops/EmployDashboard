import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import  trainerReducer    from "./TrainerSlice"
import admissionReducer from "./AddmissionSlice";
import courseReducer from "./CourseSlice"

export const store = configureStore({
  reducer: {
    userData: userReducer,
    courseData: courseReducer,
    trainers: trainerReducer,
    admissionData: admissionReducer,
  },
});
