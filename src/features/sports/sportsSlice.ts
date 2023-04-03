import { createSlice } from "@reduxjs/toolkit"
import { SportsData } from "../../interfaces"

const mockSportsData: SportsData[] = [
    {
        name: 'BJJ',
        rules: 'gi IBJJF',
        organization: 'IBJJF WorldStar'
    },
    {
        name: 'BJJ',
        rules: 'nogi IBJJF',
        organization: 'IBJJF WorldStar'
    },
    {
        name: 'Submission grappling',
        rules: 'nogi ADCC',
        organization: 'ADCC Poland'
    },
    {
        name: 'MMA',
        rules: 'UFC',
        organization: 'UFC'
    },
    {
        name: 'Boxing',
        rules: 'WBA pro',
        organization: 'WBA WorldStar'
    }
]
interface SportsState {
    availableDisciplines: SportsData[]
    disciplineChosen: SportsData
    sortingOption: string;
}
const initialState: SportsState = {
    availableDisciplines: mockSportsData,
    disciplineChosen: {
        name: 'None',
        rules: '',
        organization: ''
    },
    sortingOption: '',
}

const sportsSlice = createSlice({
    name: 'sports',
    initialState,
    reducers: {

        editDisciplineChosen(state, action) {
            state.disciplineChosen = action.payload
        },
        editSortingOption(state, action) {
            state.sortingOption = action.payload
        },
        editAvailableDisciplines(state, action) {
            state.availableDisciplines = action.payload
        },

    },


})



export const { editDisciplineChosen, editSortingOption, editAvailableDisciplines } = sportsSlice.actions

export default sportsSlice.reducer