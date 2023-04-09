import { createSlice } from '@reduxjs/toolkit'
import {
  AvailableEventSimpleData,
  EventAllData,
  SportEventData
} from '../../interfaces'

interface EventsState {
  sportEvents: SportEventData[]
  availableEvents: AvailableEventSimpleData[]
  currentEvent: EventAllData | null
  eventsPreviouslyChosen: EventAllData[]
}

const initialState: EventsState = {
  sportEvents: [],
  currentEvent: null,
  availableEvents: [],
  eventsPreviouslyChosen: []
}
const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    editSportEvents (state, action) {
      state.sportEvents = action.payload
    },
    editAvailableEvents (state, action) {
      state.availableEvents = action.payload
    },
    editCurrentEvent (state, action) {
      state.currentEvent = action.payload

      const { EventID } = action.payload
      const existingPrevEvent = state.eventsPreviouslyChosen.find(
        prevEvent => prevEvent.EventId === EventID
      )
      if (!existingPrevEvent)
        state.eventsPreviouslyChosen = [
          ...state.eventsPreviouslyChosen,
          action.payload
        ]
    }
  }
})

export const { editSportEvents, editAvailableEvents, editCurrentEvent } =
  eventsSlice.actions

export default eventsSlice.reducer
