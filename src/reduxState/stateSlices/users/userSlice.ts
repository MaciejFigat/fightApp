import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { UserInfo } from '../../../interfaces'
import {
  createBet,
  deleteRegisteredBet,
  editRegisteredBet
} from '../bets/betsSlice'

interface UserLogin {
  email: string
  password: string
}

export const sendUserId = createAsyncThunk(
  'user/sendUser',

  async (userLogin: UserLogin) => {
    const { email, password } = userLogin
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post(
        '/api/users/login',
        { email, password },
        config
      )

      localStorage.setItem('userInfo', JSON.stringify(data))

      return data
    } catch (error: any) {
      return error
    }
  }
)
// Thunk for resetting the password

interface UserEmail {
  email: string
}

export const sendEmailToResetPassword = createAsyncThunk(
  'user/forgotPassword',

  async (userEmail: UserEmail) => {
    const { email } = userEmail
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      const { data } = await axios.post(
        '/api/users/forgotPassword',
        { email },
        config
      )

      return data
    } catch (error: any) {
      return error
    }
  }
)
interface UserToken {
  resetPasswordToken: string | any
}
export const resetPassword = createAsyncThunk(
  'user/resetPassword',

  async (userToken: UserToken) => {
    const { resetPasswordToken } = userToken
    try {
      const { data } = await axios.post('/api/users/reset', {
        resetPasswordToken
      })
      return data
    } catch (error: any) {
      return error
    }
  }
)
// sending the confirmationCode sets status to Active

interface ActivationToken {
  confirmationCode: string | any
}
export const activateUser = createAsyncThunk(
  'user/activateUser',

  async (userToken: ActivationToken) => {
    const { confirmationCode } = userToken
    try {
      const { data } = await axios.post('/api/users/userconfirmation', {
        confirmationCode
      })
      return data
    } catch (error: any) {
      return error
    }
  }
)

interface NewUserInfo {
  name: string
  email: string
  password: string
}

// Here the thunk for registering
export const createUser = createAsyncThunk(
  'user/registerUser',

  async (newUserInfo: NewUserInfo) => {
    const { name, email, password } = newUserInfo

    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const { data } = await axios.post(
        '/api/users/',
        { name, email, password },
        config
      )
      return data
    } catch (error: any) {
      return error
    }
  }
)
// to update the profile by the user
export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (updatedUserInfo: UserInfo, thunkAPI) => {
    const { name, email, password, coinsAvailable } = updatedUserInfo

    try {
      const state: any = thunkAPI.getState()
      const userInfo = state.user.userInfo
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.put(
        '/api/users/profile',
        { name, email, password, coinsAvailable },
        config
      )
      return data
    } catch (error: any) {
      return error
    }
  }
)
// done by the Admin
export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (updatedUserInfo: UserInfo, thunkAPI) => {
    const { name, email, isAdmin, id, status } = updatedUserInfo

    try {
      const state: any = thunkAPI.getState()
      const userInfo = state.user.userInfo
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.put(
        `/api/users/${id}`,
        { name, email, isAdmin, status },
        config
      )
      return data
    } catch (error: any) {
      return error
    }
  }
)
// get user profile details by the Admin
export const getUserById = createAsyncThunk(
  'user/getUserById',

  async (id: string, thunkAPI) => {
    try {
      const state: any = thunkAPI.getState()
      const userInfo = state.user.userInfo
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.get(`/api/users/${id}`, config)
      return data
    } catch (error: any) {
      return error
    }
  }
)
// get user profile details by the user
export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',

  async (id: string, thunkAPI) => {
    try {
      const state: any = thunkAPI.getState()
      const userInfo = state.user.userInfo
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.get(`/api/users/profile`, config)
      return data
    } catch (error: any) {
      return error
    }
  }
)
export const getUsers = createAsyncThunk(
  'user/getUsers',
  // x- below is nothing, just a temporary solution so thunkAPI is recognized as a parameter
  async (x: any, thunkAPI) => {
    try {
      const state: any = thunkAPI.getState()
      const userInfo = state.user.userInfo
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.get(`/api/users/`, config)
      return data
    } catch (error: any) {
      return error
    }
  }
)
export const deleteUser = createAsyncThunk(
  'user/deleteUser',

  async (id: string, thunkAPI) => {
    try {
      const state: any = thunkAPI.getState()
      const userInfo = state.user.userInfo
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`
        }
      }

      const { data } = await axios.delete(`/api/users/${id}`, config)
      return data
    } catch (error: any) {
      return error
    }
  }
)
interface UserState {
  userInfo: UserInfo
  loading: boolean
  error: any
  allUsers: UserInfo[]
  selectedUserInfo: UserInfo
  success: boolean
}
const initialState: UserState = {
  userInfo: {},
  loading: false,
  error: {},
  allUsers: [],
  selectedUserInfo: {},
  success: false
}

const userSlice = createSlice({
  name: 'userLogin',
  initialState: initialState,
  reducers: {
    logout: state => {
      state.userInfo = {}
      state.error = {}
      localStorage.clear()
    },
    userSuccessReset (state) {
      state.success = false
    },
    setUserInfoFromLocalStorage (state, action) {
      state.userInfo = action.payload
    }
  },

  extraReducers: builder => {
    builder.addCase(sendUserId.pending, state => {
      state.loading = true
    })
    builder.addCase(sendUserId.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = {
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        status: action.payload.status,
        token: action.payload.token,
        coinsAvailable: action.payload.coinsAvailable
      }
      state.error = action.payload.message
    })
    builder.addCase(sendUserId.rejected, state => {
      state.loading = false
    })
    builder.addCase(resetPassword.pending, state => {
      state.loading = true
    })
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false

      state.userInfo = {
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        status: action.payload.status,
        token: action.payload.token
      }
      state.error = action.payload.message
    })
    builder.addCase(resetPassword.rejected, state => {
      state.loading = false
    })
    builder.addCase(activateUser.pending, state => {
      state.loading = true
    })
    builder.addCase(activateUser.fulfilled, (state, action) => {
      state.loading = false
      state.error = action.payload.message
    })
    builder.addCase(activateUser.rejected, state => {
      state.loading = false
    })
    builder.addCase(sendEmailToResetPassword.pending, state => {
      state.loading = true
    })
    builder.addCase(sendEmailToResetPassword.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = {
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        token: action.payload.token
      }
      state.error = action.payload.message
    })
    builder.addCase(sendEmailToResetPassword.rejected, state => {
      state.loading = false
    })
    builder.addCase(createUser.pending, state => {
      state.loading = true
      state.success = false
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = {
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        status: action.payload.status,
        token: action.payload.token,
        coinsAvailable: action.payload.coinsAvailable
      }
      state.error = action.payload.message
      state.success = true
    })
    builder.addCase(createUser.rejected, state => {
      state.loading = false
    })
    builder.addCase(getUsers.pending, state => {
      state.loading = true
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false
      state.allUsers = action.payload
      state.error = action.payload.message
    })
    builder.addCase(getUsers.rejected, state => {
      state.loading = false
    })
    builder.addCase(updateUserProfile.pending, state => {
      state.loading = true
      state.success = false
    })
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.loading = false
      // in the controller I'm returning the updated user with _id and not id, I'll leave it for it serves me now
      state.userInfo = {
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        status: action.payload.status,
        token: action.payload.token,
        coinsAvailable: action.payload.coinsAvailable
      }

      state.error = action.payload.message
      state.success = true
    })
    builder.addCase(updateUserProfile.rejected, state => {
      state.loading = false
    })
    builder.addCase(deleteUser.pending, state => {
      state.loading = true
      state.success = false
    })
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false
      state.error = action.payload.message
      state.success = true
    })
    builder.addCase(deleteUser.rejected, state => {
      state.loading = false
    })
    builder.addCase(updateUser.pending, state => {
      state.loading = true
      state.success = false
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false
      state.error = action.payload.message
      state.success = true
    })
    builder.addCase(updateUser.rejected, state => {
      state.loading = false
    })
    builder.addCase(getUserById.pending, state => {
      state.loading = true
    })
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false
      state.selectedUserInfo = action.payload
      state.error = action.payload.message
    })
    builder.addCase(getUserById.rejected, state => {
      state.loading = false
    })
    builder.addCase(getUserDetails.pending, state => {
      state.loading = true
    })
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.loading = false
      state.selectedUserInfo = action.payload
      state.error = action.payload.message
    })
    builder.addCase(getUserDetails.rejected, state => {
      state.loading = false
    })
    // deleteRegisteredBet => get res from the server with new coinsAvailable
    builder.addCase(deleteRegisteredBet.fulfilled, (state, action) => {
      const { coinsAvailable } = action.payload
      state.userInfo = { ...state.userInfo, coinsAvailable: coinsAvailable }
    })
    builder.addCase(createBet.fulfilled, (state, action) => {
      const { amountBet } = action.payload
      if (state.userInfo?.coinsAvailable)
        state.userInfo = {
          ...state.userInfo,
          coinsAvailable: state.userInfo.coinsAvailable - amountBet
        }
    })
    builder.addCase(editRegisteredBet.fulfilled, (state, action) => {
      const { expectedPayout } = action.payload
      if (state.userInfo?.coinsAvailable)
        state.userInfo = {
          ...state.userInfo,
          coinsAvailable: state.userInfo.coinsAvailable - expectedPayout
        }
    })
  }
})

export const { logout, userSuccessReset, setUserInfoFromLocalStorage } =
  userSlice.actions

export default userSlice.reducer
