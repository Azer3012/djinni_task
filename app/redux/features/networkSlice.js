import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isConnected: true,
  
};

const networkSlice=createSlice({
    name:'network',
    initialState,
    reducers:{
        checkConnection:(state,action)=>{
            state.isConnected=action.payload
        }
    }
})

export const {checkConnection}=networkSlice.actions;

export default networkSlice.reducer;