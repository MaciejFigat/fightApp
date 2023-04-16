import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { BetData, ConfirmedBet } from '../../interfaces'
// import { v4 } from 'uuid'
interface BetsState {
  betsUnconfirmed: BetData[]
  betsConfirmed: ConfirmedBet[]
}

const initialState: BetsState = {
  betsUnconfirmed: [
    // { id: v4(), name: '1st bet', FightId: 1232378321, activated: true },
    // { id: v4(), name: 'BERT', FightId: 32155656721, activated: true },
    // { id: v4(), name: 'BAET', FightId: 723415551, activated: true }
  ],
  betsConfirmed: []
}

const betsSlice = createSlice({
  name: 'bets',
  initialState,
  reducers: {
    addUnconfirmedBet (state, action: PayloadAction<BetData>) {
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
  removeConfirmedBet
} = betsSlice.actions

export default betsSlice.reducer
