import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
// import courseReducer from "./CourseSlice";/
// import courseReducer from "./courseSlice";
import courseReducer from "./CourseSlice"

export const store = configureStore({
  reducer: {
    userData: userReducer,
    courseData: courseReducer,
  },
});
