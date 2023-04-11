import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  AvailableEventSimpleData,
  EventAllData,
  SportEventData
} from '../../interfaces'

interface EventsState {
  sportEvents: SportEventData[]
  availableEvents: AvailableEventSimpleData[]
  currentEvent: EventAllData | null
  eventsPreviouslyFetched: EventAllData[]
  loading: boolean
}

const MMA_API_KEY = process.env.REACT_APP_MMA_API_KEY

export const fetchMMAData = createAsyncThunk(
  'events/fetchMMAData',

  async () => {
    const league = 'UFC'
    const date = new Date()
    const season = date.getFullYear().toString()
    const response = await fetch(
      `https://api.sportsdata.io/v3/mma/scores/json/Schedule/${league}/${season}?key=${MMA_API_KEY}`
    )
    const data = await response.json()

    return data
  }
)

export const fetchEvent = createAsyncThunk(
  'events/fetchEvent',
  async (eventId: number) => {
    const response = await fetch(
      `https://api.sportsdata.io/v3/mma/scores/json/Event/${eventId}?key=${MMA_API_KEY}`
    )
    const event = await response.json()

    return event
  }
)

const initialState: EventsState = {
  sportEvents: [],
  currentEvent: null,
  availableEvents: [],
  eventsPreviouslyFetched: [],
  loading: false
}

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    editSportEvents (state, action: PayloadAction<SportEventData[]>) {
      state.sportEvents = action.payload
    },
    editAvailableEvents (
      state,
      action: PayloadAction<AvailableEventSimpleData[]>
    ) {
      state.availableEvents = action.payload
    },
    editCurrentEvent (state, action: PayloadAction<EventAllData>) {
      state.currentEvent = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMMAData.pending, state => {
        state.loading = true
      })
      .addCase(
        fetchMMAData.fulfilled,
        (state, action: PayloadAction<AvailableEventSimpleData[]>) => {
          state.loading = false
          state.availableEvents = action.payload
        }
      )
      .addCase(fetchMMAData.rejected, state => {
        state.loading = false
      })
      .addCase(fetchEvent.pending, state => {
        state.loading = true
      })
      .addCase(
        fetchEvent.fulfilled,
        (state, action: PayloadAction<EventAllData>) => {
          state.loading = false

          state.currentEvent = action.payload
          state.eventsPreviouslyFetched = [
            ...state.eventsPreviouslyFetched,
            action.payload
          ]
        }
      )
      .addCase(fetchEvent.rejected, state => {
        state.loading = false
      })
  }
})

export const { editSportEvents, editAvailableEvents, editCurrentEvent } =
  eventsSlice.actions

export default eventsSlice.reducer
