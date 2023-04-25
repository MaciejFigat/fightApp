import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

interface UserInfo {
  _id?: string
  name?: string
  email?: string
  password?: string
  status?: 'Active' | 'Pending'
  isAdmin?: boolean
}
interface UserLogin {
  email: string
  password: string
}

// the thunk for posting the header - used for logging in

export const sendUserId = createAsyncThunk(
  'user/sendUser',

  async (userLogin: UserLogin, { rejectWithValue }) => {
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
      // return thunkAPI.rejectWithError(error)
      return error
      // return rejectWithValue(error.data)
    }
  }
)
// Thunk for resetting the password
// we find the user by the email and get his data -> in order to create a link, that will be sent to his email, used to redirect him into user update page
//
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

      // localStorage.setItem('userInfo', JSON.stringify(data))

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
//
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

//
interface NewUserInfo {
  name: string
  email: string
  password: string
}

// Here the thunk for registering
export const createUser = createAsyncThunk(
  'user/registerUser',

  async (newUserInfo: NewUserInfo, { rejectWithValue }) => {
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
      // return rejectWithValue(error.data)
    }
  }
)
// to update the profile by the user
export const updateUserProfile = createAsyncThunk(
  'user/updateUserProfile',
  async (updatedUserInfo: UserInfo, thunkAPI) => {
    const { name, email, password } = updatedUserInfo

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
        { name, email, password },
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
    const { name, email, isAdmin, _id, status } = updatedUserInfo

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
        `/api/users/${_id}`,
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

const userSlice = createSlice({
  name: 'userLogin',
  initialState: {
    userInfo: {},
    loading: false,
    error: {},
    allUsers: [],
    selectedUserInfo: {},
    success: false
  },
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
    builder.addCase(sendUserId.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(sendUserId.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = action.payload.name !== 'Error' && {
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        status: action.payload.status,
        token: action.payload.token
      }
      state.error = action.payload.message
    })
    builder.addCase(sendUserId.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(resetPassword.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = action.payload.name !== 'Error' && {
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        status: action.payload.status,
        token: action.payload.token
      }
      state.error = action.payload.message
    })
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(activateUser.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(activateUser.fulfilled, (state, action) => {
      state.loading = false
      state.error = action.payload.message
    })
    builder.addCase(activateUser.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(sendEmailToResetPassword.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(sendEmailToResetPassword.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = action.payload.name !== 'Error' && {
        id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        isAdmin: action.payload.isAdmin,
        token: action.payload.token
      }
      state.error = action.payload.message
    })
    builder.addCase(sendEmailToResetPassword.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(createUser.pending, (state, action) => {
      state.loading = true
      state.success = false
    })
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = action.payload
      state.error = action.payload.message
      state.success = true
    })
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false
      state.allUsers = action.payload
      state.error = action.payload.message
    })
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(updateUserProfile.pending, (state, action) => {
      state.loading = true
      state.success = false
    })
    builder.addCase(updateUserProfile.fulfilled, (state, action) => {
      state.loading = false
      state.userInfo = action.payload
      state.error = action.payload.message
      state.success = true
    })
    builder.addCase(updateUserProfile.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(deleteUser.pending, (state, action) => {
      state.loading = true
      state.success = false
    })
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false
      state.error = action.payload.message
      state.success = true
    })
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true
      state.success = false
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false
      state.error = action.payload.message
      state.success = true
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(getUserById.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getUserById.fulfilled, (state, action) => {
      state.loading = false
      state.selectedUserInfo = action.payload
      state.error = action.payload.message
    })
    builder.addCase(getUserById.rejected, (state, action) => {
      state.loading = false
    })
    builder.addCase(getUserDetails.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(getUserDetails.fulfilled, (state, action) => {
      state.loading = false
      state.selectedUserInfo = action.payload
      state.error = action.payload.message
    })
    builder.addCase(getUserDetails.rejected, (state, action) => {
      state.loading = false
    })
  }
})

export const { logout, userSuccessReset, setUserInfoFromLocalStorage } =
  userSlice.actions

export default userSlice.reducer
