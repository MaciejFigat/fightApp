import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BetData, ConfirmedBet } from '../../interfaces'

interface BetsState {
  betsUnconfirmed: BetData[]
  betsConfirmed: ConfirmedBet[]
}

const initialState: BetsState = {
  betsUnconfirmed: [],
  betsConfirmed: []
}
interface AddUnconfirmedBetPayload {
  betData: BetData
  itemIndex: number
}

const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    // addUnconfirmedBet (state, action: PayloadAction<AddUnconfirmedBetPayload>) {
    //   state.betsUnconfirmed = [...state.betsUnconfirmed, action.payload.betData]
    // },
    addUnconfirmedBet (state, action: PayloadAction<AddUnconfirmedBetPayload>) {
      const { itemIndex, betData } = action.payload
      state.betsUnconfirmed = [
        ...state.betsUnconfirmed.slice(0, itemIndex), // slice from index 0 up to (but not including) itemIndex
        betData,
        ...state.betsUnconfirmed.slice(itemIndex) // slice from itemIndex to the end of the array
      ]
    },
    removeUnconfirmedBet (state, action: PayloadAction<string>) {
      state.betsUnconfirmed = state.betsUnconfirmed.filter(
        bet => bet.id !== action.payload
      )
    },
    addConfirmedBet (state, action: PayloadAction<ConfirmedBet>) {
      state.betsConfirmed = [...state.betsConfirmed, action.payload]
    },
    removeConfirmedBet (state, action: PayloadAction<string>) {
      state.betsConfirmed = state.betsConfirmed.filter(
        bet => bet.id !== action.payload
      )
    }
  }
})

export const {
  addUnconfirmedBet,
  removeUnconfirmedBet,
  addConfirmedBet,
  removeConfirmedBet
} = betsSlice.actions

export default betsSlice.reducer
