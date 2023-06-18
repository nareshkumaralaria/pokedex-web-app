// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import pokemon from './pokemon'

export const store = configureStore({
  reducer: {
    pokemon,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
