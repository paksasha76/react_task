import {IUser} from "../../models/IUser"
import {createSlice} from "@reduxjs/toolkit"

interface UserState {
    users: IUser [];
    isLoading: boolean;
    error: string
}

const initialState: UserState = {
    users: [],
    isLoading: false, 
    error: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
       
    }
})

export default userSlice.reducer