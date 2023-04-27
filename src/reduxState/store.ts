import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reduxState/stateSlices/users/userSlice'
import sportsReducer from '../reduxState/stateSlices/sports/sportsSlice'
import eventsReducer from '../reduxState/stateSlices/sportEvents/eventsSlice'
import betsReducer from '../reduxState/stateSlices/bets/betsSlice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    user: userReducer,
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
