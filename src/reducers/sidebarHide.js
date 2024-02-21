import { createSlice } from '@reduxjs/toolkit';

export const sidebarHideSlice = createSlice({
  name: 'sidebarHide',
  initialState: {
    isHidden: false
  },
  reducers: {
    HideSidebar: (state) => {
        state.isHidden = true;
    },
    ViewSidebar: (state) => {
      state.isHidden = false;
  }
  }
});

export const { HideSidebar, ViewSidebar } = sidebarHideSlice.actions;

export default sidebarHideSlice.reducer;