import { createSlice } from "@reduxjs/toolkit"

const today = new Date()

const preferenceSlice = createSlice({
    name: 'settings',
    initialState: {

        width: 700,
        widthNarrow: 900,
        yHeroPosition: 0,
        sortingDate: { sortingYear: today.getFullYear(), sortingMonth: today.getMonth() + 1, sortingDay: today.getDate() },
        sortingKeywords: {
            keywordMain: '',
            keywordOne: '',
            keywordTwo: ''
        },
        sortingOption: 'data',
        resultsDetailView: false,
        fragmentsDetailView: false,
        showFragments: true,
        sortFragmentsBySource: {
            KrajowaInformacjaSkarbowa: true,
            IzbaSkarbowa: true,
            MinisterFinansów: true,

        },
        searchResultsPage: { start: 0, end: 9, pageNr: 1 },
        savedFragmentsPage: { start: 0, end: 9, pageNr: 1 },
        visitedLinksPage: { start: 0, end: 3, pageNr: 1 },
        fragmentScrolled: 1,
        highlightQuery: '',
        preferedScheme: 'secondary',
        idOpenFragment: '',


    },
    reducers: {

        editIdOpenFragment(state, action) {
            state.idOpenFragment = action.payload
        },
        showFragments(state, action) {
            state.showFragments = action.payload
        },

        changeResultsDetailView(state) {
            if (state.resultsDetailView === true) { state.resultsDetailView = false }
            else if (state.resultsDetailView === false) { state.resultsDetailView = true }

        },
        changeFragmentsDetailView(state) {
            if (state.fragmentsDetailView === true) { state.fragmentsDetailView = false }
            else if (state.fragmentsDetailView === false) { state.fragmentsDetailView = true }

        },
        preferredWidthSaved(state, action) {

            state.width = action.payload
        },
        searchResultsPageSaved(state, action) {
            state.searchResultsPage = action.payload
        },
        fragmentsPageSaved(state, action) {
            state.savedFragmentsPage = action.payload
        },
        linksPageSaved(state, action) {
            state.visitedLinksPage = action.payload
        },
        preferredNarrowWidthSaved(state, action) {
            state.widthNarrow = action.payload
        },
        sortingDateEdit(state, action) {

            state.sortingDate = action.payload
        },
        sortingKeywordsEdit(state, action) {

            state.sortingKeywords = action.payload
        },
        sortingKeywordMainEdit(state, action) {

            state.sortingKeywords.keywordMain = action.payload
        },
        sortingOptionEdit(state, action) {

            state.sortingOption = action.payload
        },
        highlightQueryEdit(state, action) {
            state.highlightQuery = action.payload
        },
        fragmentScrolledEdit(state, action) {
            state.fragmentScrolled = action.payload
        },
        preferedSchemeEdit(state, action) {
            state.preferedScheme = action.payload
        },

        sortFragmentsBySourceEditOne(state) {
            state.sortFragmentsBySource.KrajowaInformacjaSkarbowa = !state.sortFragmentsBySource.KrajowaInformacjaSkarbowa
        },
        sortFragmentsBySourceEditTwo(state) {
            state.sortFragmentsBySource.IzbaSkarbowa = !state.sortFragmentsBySource.IzbaSkarbowa
        },
        sortFragmentsBySourceEditThree(state) {
            state.sortFragmentsBySource.MinisterFinansów = !state.sortFragmentsBySource.MinisterFinansów
        },

        editYHeroPosition(state, action) {
            state.yHeroPosition = action.payload
        },
    },


})



export const { editIdOpenFragment, sortFragmentsBySourceEditOne, sortFragmentsBySourceEditTwo, sortFragmentsBySourceEditThree, showFragments, preferredWidthSaved, searchResultsPageSaved, fragmentsPageSaved, linksPageSaved, preferredNarrowWidthSaved, sortingDateEdit, sortingKeywordsEdit, sortingKeywordMainEdit, sortingOptionEdit, highlightQueryEdit, fragmentScrolledEdit, preferedSchemeEdit, changeResultsDetailView, changeFragmentsDetailView, editYHeroPosition } = preferenceSlice.actions

export default preferenceSlice.reducer