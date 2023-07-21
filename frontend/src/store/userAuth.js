import {createSlice} from "@reduxjs/toolkit"

const UserAuth = createSlice({
    name:"user",
    initialState:{
        username:null,
    },
    reducers:{
        userAddDetails(state,action){
            const newItem = action.payload;
            state.username =newItem.username
            
        },
        userLogout(state,action){
            state.username="" 
        }
    }
})

export const {userAddDetails,userLogout} = UserAuth.actions
export default UserAuth