import { createSlice } from "@reduxjs/toolkit"
import { SportEventData } from "../../interfaces"

interface EventsState {
    sportEvents: SportEventData[]
}
const initialState: EventsState = {
    sportEvents: [],
}
const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {

        editSportEvents(state, action) {
            state.sportEvents = action.payload
        },



    },


})



export const { editSportEvents } = eventsSlice.actions

export default eventsSlice.reducer