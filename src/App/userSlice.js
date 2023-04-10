import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllUserAsync = createAsyncThunk('getAllUserAsync', async () => {
    try {
        let accessToken = localStorage.getItem("token")
        let headers = {
            Authorization: `Bearer ${accessToken}`
        }
        return await axios.get('http://localhost:8080/userdata', { headers })
            .then((res) => {
                console.log(res.data["data"])
                return res.data["data"]
            }
            )

    } catch (error) {
        console.error(error)
    }
})


export const allUserSlice = createSlice({
    name: 'allUser',
    initialState: {
        allUsers: [],
    },
    extraReducers: {
        [getAllUserAsync.fulfilled]: (state, { payload }) => {
            state.allUsers = payload
        }
    }
})

// export const userState = (state) => state.allUsers
export default allUserSlice.reducer
