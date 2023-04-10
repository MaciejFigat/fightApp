import { PayloadAction, createSlice } from '@reduxjs/toolkit'
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

      const { EventId } = action.payload
      const existingPrevEvent = state.eventsPreviouslyChosen.find(
        prevEvent => prevEvent.EventId === EventId
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
