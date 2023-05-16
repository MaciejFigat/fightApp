import configureMockStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { AppDispatch, RootState } from '../reduxState/testStore'
import { AnyAction } from 'redux'
import {
  createUser,
  updateUserProfile,
  getUsers,
  deleteUser
} from '../reduxState/stateSlices/users/userSlice'
import axios from 'axios'

// jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

jest.mock('axios', () => ({
  get: jest.fn(),
  delete: jest.fn(),
  put: jest.fn(),
  post: jest.fn()
}))

// Define the mock store type
type MockStore = ReturnType<typeof configureMockStore<RootState, AppDispatch>>

// Initialize the mock store with the necessary middlewares
const mockStore: MockStore = configureMockStore<RootState, AppDispatch>([thunk])

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  mockedAxios.get.mockClear()
  mockedAxios.put.mockClear()
  mockedAxios.post.mockClear()
  mockedAxios.delete.mockClear()
})
afterEach(() => {
  jest.resetAllMocks()
})

test('receive user/registerUser/rejected when creating user fails', async () => {
  const newUserInfo = {
    name: 'Test User',
    email: 'testuser@example.com',
    password: 'password123'
  }

  mockedAxios.post.mockRejectedValueOnce({
    response: {
      status: 500,
      statusText: 'Internal Server Error',
      headers: {},
      config: {}
    }
  })

  const expectedActions = [
    {
      type: 'user/registerUser/pending',
      meta: {
        arg: newUserInfo,
        requestId: expect.any(String),
        requestStatus: 'pending'
      },
      payload: undefined
    },
    expect.objectContaining({
      type: 'user/registerUser/rejected',
      meta: expect.objectContaining({
        arg: newUserInfo,
        requestId: expect.any(String),
        requestStatus: 'rejected'
      })
    })
  ]

  const store = mockStore({
    user: { userInfo: { token: 'testToken' } }
  } as RootState)

  await (store.dispatch as ThunkDispatch<RootState, undefined, AnyAction>)(
    createUser(newUserInfo)
  )
  const dispatchedActions = store.getActions()

  expect(dispatchedActions).toEqual(expectedActions)
})

test('receive user/updateUserProfile/rejected when updating user profile fails', async () => {
  const updatedUserInfo = {
    name: 'Updated User',
    email: 'updateduser@example.com',
    password: 'updatedpassword123',
    coinsAvailable: 100
  }

  mockedAxios.put.mockRejectedValueOnce({
    response: {
      status: 500,
      statusText: 'Internal Server Error',
      data: { message: 'Something went wrong' },
      headers: {},
      config: {}
    }
  })

  const expectedActions = [
    {
      type: 'user/updateUserProfile/pending',
      meta: {
        arg: updatedUserInfo,
        requestId: expect.any(String),
        requestStatus: 'pending'
      },
      payload: undefined
    },
    expect.objectContaining({
      type: 'user/updateUserProfile/rejected',
      meta: expect.objectContaining({
        arg: updatedUserInfo,
        requestId: expect.any(String),
        requestStatus: 'rejected'
      })
    })
  ]

  const store = mockStore({
    user: { userInfo: { token: 'testToken' } }
  } as RootState)

  await (store.dispatch as ThunkDispatch<RootState, undefined, AnyAction>)(
    updateUserProfile(updatedUserInfo)
  )
  const dispatchedActions = store.getActions()

  expect(dispatchedActions).toEqual(expectedActions)
})

test('receive user/getUsers/rejected when fetching users fails', async () => {
  mockedAxios.get.mockRejectedValueOnce({
    response: {
      status: 500,
      statusText: 'Internal Server Error',
      headers: {},
      config: {}
    }
  })
  const expectedActions = [
    {
      type: 'user/getUsers/pending',
      meta: {
        arg: {},
        requestId: expect.any(String),
        requestStatus: 'pending'
      },
      payload: undefined
    },
    expect.objectContaining({
      type: 'user/getUsers/rejected',
      meta: expect.objectContaining({
        arg: {},
        requestId: expect.any(String),
        requestStatus: 'rejected'
      })
    })
  ]

  const store = mockStore({
    user: { userInfo: { token: 'testToken' } }
  } as RootState)
  await (store.dispatch as ThunkDispatch<RootState, undefined, AnyAction>)(
    getUsers({})
  )
  const dispatchedActions = store.getActions()

  expect(dispatchedActions).toEqual(expectedActions)
})

test('receive user/deleteUser/rejected when deleting a user fails', async () => {
  mockedAxios.delete.mockRejectedValueOnce({
    response: {
      status: 500,
      statusText: 'Internal Server Error',
      headers: {},
      config: {}
    }
  })

  const expectedActions = [
    {
      type: 'user/deleteUser/pending',
      meta: {
        arg: '1',
        requestId: expect.any(String),
        requestStatus: 'pending'
      },
      payload: undefined
    },
    expect.objectContaining({
      type: 'user/deleteUser/rejected',
      meta: expect.objectContaining({
        arg: '1',
        requestId: expect.any(String),
        requestStatus: 'rejected'
      })
    })
  ]

  const store = mockStore({
    user: { userInfo: { token: 'testToken' } }
  } as RootState)
  await (store.dispatch as ThunkDispatch<RootState, undefined, AnyAction>)(
    deleteUser('1')
  )
  const dispatchedActions = store.getActions()

  expect(dispatchedActions).toEqual(expectedActions)
})
