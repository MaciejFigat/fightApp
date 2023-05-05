import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  AcceptedBet,
  BetData,
  BetsWithUserData,
  ConfirmedBet
} from '../../../interfaces'
import axios from 'axios'

interface BetsState {
  betsUnconfirmed: BetData[]
  betsConfirmed: ConfirmedBet[]
  betsRegistered: ConfirmedBet[]
  betsAccepted: AcceptedBet[]
  userBets: ConfirmedBet[]
  allBets: BetsWithUserData[]
  loading: boolean
  success: boolean
}

const initialState: BetsState = {
  betsUnconfirmed: [],
  betsConfirmed: [],
  betsRegistered: [],
  betsAccepted: [],
  userBets: [],
  allBets: [],
  loading: false,
  success: true
}
interface AddUnconfirmedBetPayload {
  betData: BetData
  itemIndex: number
}

export const createBet = createAsyncThunk(
  'bet/createBet',
  async (newBetInfo: ConfirmedBet, thunkAPI) => {
    try {
      const state: any = thunkAPI.getState()
      const userInfo = state.user.userInfo
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.post(
        '/api/bets/',
        {
          ...newBetInfo
        },
        config
      )
      return data
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        // Request was made and server responded with a status code
        return thunkAPI.rejectWithValue(error.response.data.message)
      } else if (error.request) {
        // no response was received
        return thunkAPI.rejectWithValue('Server is not responding')
      } else {
        return thunkAPI.rejectWithValue(
          'An error occurred while creating a new fragment'
        )
      }
    }
  }
)

export const getUserBets = createAsyncThunk(
  'bet/getUserBets',
  // x- serves one pupose only, so thunkAPI is recognized as a parameter
  async (x: any, thunkAPI) => {
    const state: any = thunkAPI.getState()
    const userInfo = state.user.userInfo

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`
      }
    }

    try {
      const { data } = await axios.get(`/api/bets/mybets`, config)
      return data
    } catch (error: any) {
      return error
    }
  }
)
export const getAllBets = createAsyncThunk(
  'bet/getAllBets',
  // x- a dummy parameter
  async (x: any, thunkAPI) => {
    try {
      const state: any = thunkAPI.getState()
      const userInfo = state.user.userInfo
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.get(`/api/bets/`, config)
      return data
    } catch (error: any) {
      return error
    }
  }
)

//  mandatory: isAccepted, acceptDateTime, acceptedBy
export const editRegisteredBet = createAsyncThunk(
  'bet/editRegisteredBet',

  async (bet: AcceptedBet, thunkAPI) => {
    try {
      const state: any = thunkAPI.getState()
      const userInfo = state.user.userInfo

      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.put(`/api/bets/${bet._id}`, bet, config)

      return data
    } catch (error: any) {
      // console.log(bet._id, 'bet._id')
      return error
    }
  }
)
export const deleteRegisteredBet = createAsyncThunk(
  'bet/deleteBet',
  async (id: string, thunkAPI) => {
    try {
      const state: any = thunkAPI.getState()
      const userInfo = state.user.userInfo

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      }
      console.log('deleteBet action:', id)
      const { data } = await axios.delete(`/api/bets/${id}`, config)

      return data
    } catch (error: any) {
      return error
    }
  }
)
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
  },
  extraReducers: builder => {
    builder.addCase(createBet.pending, (state, action) => {
      state.loading = true
      state.success = false
    })
    builder.addCase(createBet.fulfilled, (state, action) => {
      state.loading = false
      // const {id} = action.payload
      state.betsRegistered = [...state.betsRegistered, action.payload]
      state.betsConfirmed = state.betsConfirmed.filter(
        bet => bet.id !== action.payload.id
      )
      state.success = true
    })
    builder.addCase(createBet.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(getUserBets.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getUserBets.fulfilled, (state, action) => {
      state.loading = false
      state.userBets = action.payload
      state.success = true
    })
    builder.addCase(getUserBets.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(editRegisteredBet.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(editRegisteredBet.fulfilled, (state, action) => {
      state.loading = false
      state.betsAccepted = [...state.betsRegistered, action.payload]
      state.success = true
    })
    builder.addCase(editRegisteredBet.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(getAllBets.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getAllBets.fulfilled, (state, action) => {
      state.loading = false
      state.allBets = action.payload
      state.success = true
    })
    builder.addCase(getAllBets.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(deleteRegisteredBet.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(deleteRegisteredBet.fulfilled, (state, action) => {
      state.loading = false
      state.userBets = state.userBets.filter(
        bet => bet._id !== action.payload.id
      )

      state.success = true
    })
    builder.addCase(deleteRegisteredBet.rejected, (state, action) => {
      state.loading = false
    })
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
