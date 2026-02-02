import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false,
    user : null,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loggedInSuccess(state,action) {
            console.log(action)
            state.isLoggedIn = true
            state.user = action.payload
        },

        logout(state,action) {
            state.isLoggedIn = false
            state.user = null 
        }
    }
})

export const  {loggedInSuccess, logout} = authSlice.actions
export default authSlice.reducer