import { createSlice } from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isThemeLight: true
  },
  reducers: {
    ToggleTheme: (state) => {
        state.isThemeLight = !state.isThemeLight;
    }
  }
});

export const { ToggleTheme } = themeSlice.actions;

export default themeSlice.reducer;