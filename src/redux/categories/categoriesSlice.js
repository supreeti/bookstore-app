import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'under Construction',
};

const categories = createSlice({
  name: 'category',
  initialState,
  reducers: {
    toggleStatus: (state = initialState) => {
      state.status = 'Under Construction...';
    },
  },
});

export default categories.reducer;
export const { toggleStatus } = categories.actions;
