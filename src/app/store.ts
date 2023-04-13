import { configureStore } from '@reduxjs/toolkit'

import sportsReducer from '../features/sports/sportsSlice'
import eventsReducer from '../features/sportEvents/eventsSlice'
import betsReducer from '../features/bets/betsSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    sports: sportsReducer,
    events: eventsReducer,
    bets: betsReducer
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: false
    })
  }
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
