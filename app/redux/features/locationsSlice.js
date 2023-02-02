import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  list: {},
  loading: true,
  error: null,
};

const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {
    setLocations: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    // setListLoading:(state)=>{
    //     state.loading=true
    // }
  },
});

export const {setLocations} = locationsSlice.actions;

export default locationsSlice.reducer;
