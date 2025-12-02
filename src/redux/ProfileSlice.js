import { createSlice } from "@reduxjs/toolkit";
import { getRegisterUser , postRegisterUser } from "./thunk/ThunkRegister";
const ProfileSlice = createSlice({
    name:"profile",
    initialState:{
        info:[],
        isLoading:false,
        error:null
    } ,
    extraReducers:(builder) => {
        builder
        //getRegisterUser
        .addCase(getRegisterUser.pending , (state) => {
            state.isLoading = true
        })
        .addCase(getRegisterUser.fulfilled , (state, action) => {
            state.isLoading = false
            state.info = action.payload
            console.log(state.info) 
        })
        .addCase(getRegisterUser.rejected, (state , action) => {
            state.isLoading = false
            state.error = action.payload.message
        })
        //postRegisterUser
        .addCase(postRegisterUser.fulfilled , (state , action) => {
            state.info = action.payload
            state.error = null
            console.log(state.info)
        })
    }
    
})
export default ProfileSlice.reducer;