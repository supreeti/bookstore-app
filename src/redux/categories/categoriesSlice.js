import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Category: [],
};

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkStatus: (state = initialState) => 'under construction',
  },
});

export const { checkStatus } = categorySlice.actions;
export default categorySlice.reducer;
