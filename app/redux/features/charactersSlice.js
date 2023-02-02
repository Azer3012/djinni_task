import { createSlice } from "@reduxjs/toolkit";




const initialState={
    list:{},
    loading:true,
    error:null,

}

const charactersSlice=createSlice({
    name:"characters",
    initialState,
    reducers:{
        setCharacters:(state,action)=>{
            state.list=action.payload
            state.loading=false
        },
        // setListLoading:(state)=>{
        //     state.loading=true
        // }
    },
   
})

export const {setCharacters} =charactersSlice.actions;

export default charactersSlice.reducer;