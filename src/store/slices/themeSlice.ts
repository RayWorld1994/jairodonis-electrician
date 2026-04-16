import { createSlice } from '@reduxjs/toolkit'

export type Theme = 'modern' | 'classic'

const themeSlice = createSlice({
  name: 'theme',
  initialState: { theme: 'modern' as Theme },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'modern' ? 'classic' : 'modern'
    },
  },
})

export const { toggleTheme } = themeSlice.actions
export default themeSlice.reducer
