import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export type Language = 'es' | 'en'

const languageSlice = createSlice({
  name: 'language',
  initialState: { lang: 'es' as Language },
  reducers: {
    setLanguage: (state, action: PayloadAction<Language>) => {
      state.lang = action.payload
    },
  },
})

export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
