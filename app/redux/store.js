import {configureStore} from  '@reduxjs/toolkit'
import characterReducer from './features/charactersSlice'
import locationReducer from './features/locationsSlice'
export const store=configureStore({
    reducer:{
        characters:characterReducer,
        locations:locationReducer
    }
})