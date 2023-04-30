import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BetData, ConfirmedBet } from '../../../interfaces'

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
    editUnconfirmedBet (state, action: PayloadAction<AddUnconfirmedBetPayload>) {
      const { itemIndex, betData } = action.payload
      state.betsUnconfirmed = [
        ...state.betsUnconfirmed.slice(0, itemIndex),
        betData,
        ...state.betsUnconfirmed.slice(itemIndex + 1) // I omit itemIndex
      ]
    },
    addUnconfirmedBet (state, action: PayloadAction<AddUnconfirmedBetPayload>) {
      const { itemIndex, betData } = action.payload
      state.betsUnconfirmed = [
        ...state.betsUnconfirmed.slice(0, itemIndex), // slice from index 0 up to (but not including) itemIndex
        betData,
        ...state.betsUnconfirmed.slice(itemIndex) // slice from itemIndex to the end of the array
      ]
    },
    addUnconfirmedBetNoIndex (state, action: PayloadAction<BetData>) {
      state.betsUnconfirmed = [...state.betsUnconfirmed, action.payload]
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
  removeConfirmedBet,
  editUnconfirmedBet,
  addUnconfirmedBetNoIndex
} = betsSlice.actions

export default betsSlice.reducer
