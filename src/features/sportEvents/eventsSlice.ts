import { createSlice } from "@reduxjs/toolkit"


const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        sportEvents: [],


    },
    reducers: {

        editSportEvents(state, action) {
            state.sportEvents = action.payload
        },



    },


})



export const { editSportEvents } = eventsSlice.actions

export default eventsSlice.reducer