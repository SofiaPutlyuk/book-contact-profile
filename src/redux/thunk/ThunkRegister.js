import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getRegisterUser = createAsyncThunk("profile/getRegisterUser", async (_, thunkApi) => {
    try {
        const response = await axios.get("https://connections-api.goit.global/users/current")
        return response.data
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})
export const postRegisterUser = createAsyncThunk("profile", async ({ name, email, password }, thunkApi) => {
    try {
        const {data} = await axios.post("https://connections-api.goit.global/users/signup",
            { name, email, password }
        )
        axios.defaults.headers.common.Authorization = `Bearer ${data.token}`
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message)
    }
})