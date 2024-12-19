import { createSlice } from "@reduxjs/toolkit";

const initialState={
    allData: []
}

const userSlice = createSlice({
    name : "userDta",
    initialState,
    reducers:{
        addData:(state, action) =>{
            state.allData=[...state.allData, action.payload]
        }
    }
})

export const {addData} = userSlice.actions
export default userSlice.reducer