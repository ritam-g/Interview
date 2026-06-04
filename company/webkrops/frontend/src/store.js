import { configureStore } from '@reduxjs/toolkit'
import userReducer from './state/authSlice.js'
const store = configureStore({
    reducer: {
        auth: userReducer
    }
})

export default store


