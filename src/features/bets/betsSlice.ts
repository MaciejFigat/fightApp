import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BetData } from '../../interfaces'

interface BetsState {
  betsUnconfirmed: BetData[]
}

const initialState: BetsState = {
  betsUnconfirmed: [
    { id: 122, name: '1st bet', FightId: 1232378321, activated: true },
    { id: 333, name: 'BERT', FightId: 32155656721, activated: true },
    { id: 3232, name: 'BAET', FightId: 723415551, activated: true }
  ]
}

const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    addUnconfirmedBet (state, action: PayloadAction<BetData>) {
      state.betsUnconfirmed = [...state.betsUnconfirmed, action.payload]
    },
    removeUnconfirmedBet (state, action: PayloadAction<number>) {
      state.betsUnconfirmed = state.betsUnconfirmed.filter(
        bet => bet.id !== action.payload
      )
    }
  }
})

export const { addUnconfirmedBet, removeUnconfirmedBet } = betsSlice.actions

export default betsSlice.reducer
