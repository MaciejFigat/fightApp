import { configureStore } from '@reduxjs/toolkit'
import preferenceReducer from '../features/preferences/preferenceSlice'
import sportsReducer from '../features/sports/sportsSlice'
import { setupListeners } from '@reduxjs/toolkit/query'


export const store = configureStore({
    reducer: {
        preference: preferenceReducer,
        sports: sportsReducer,

    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })

    },
})

setupListeners(store.dispatch)
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

