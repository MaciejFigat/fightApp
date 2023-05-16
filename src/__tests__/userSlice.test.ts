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

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  mockedAxios.get.mockClear()
  mockedAxios.put.mockClear()
  mockedAxios.post.mockClear()
  mockedAxios.delete.mockClear()
})
// Define the mock store type
type MockStore = ReturnType<typeof configureMockStore<RootState, AppDispatch>>

// Initialize the mock store with the necessary middlewares
const mockStore: MockStore = configureMockStore<RootState, AppDispatch>([thunk])

jest.mock('axios', () => ({
  post: jest.fn(() =>
    Promise.resolve({
      status: 200,
      statusText: 'OK',
      data: { message: 'User Created' },
      headers: {},
      config: {}
    })
  ),
  put: jest.fn(() =>
    Promise.resolve({
      status: 200,
      statusText: 'OK',
      data: { message: 'Profile Updated' },
      headers: {},
      config: {}
    })
  ),
  get: jest.fn(() =>
    Promise.resolve({
      status: 200,
      statusText: 'OK',
      data: [{ id: '1', name: 'Test User' }],
      headers: {},
      config: {}
    })
  ),
  delete: jest.fn(() =>
    Promise.resolve({
      status: 200,
      statusText: 'OK',
      data: { message: 'User Deleted' },
      headers: {},
      config: {}
    })
  )
}))
beforeAll(() =>
  jest.mock('axios', () => ({
    post: jest.fn(() =>
      Promise.resolve({
        status: 200,
        statusText: 'OK',
        data: { message: 'User Created' },
        headers: {},
        config: {}
      })
    )
  }))
)

afterEach(() => {
  jest.resetAllMocks()
})

test('receive USER/registerUser/fulfilled when creating a user has been done', async () => {
  // Mock axios.post to return specific data
  mockedAxios.post.mockResolvedValueOnce({
    data: { message: 'User created successfully' }
  })

  const expectedActions = [
    {
      type: 'user/registerUser/pending',
      meta: {
        arg: {
          name: 'Test',
          email: 'test@test.com',
          password: 'test123'
        },
        requestId: expect.any(String),
        requestStatus: 'pending'
      },
      payload: undefined
    },
    expect.objectContaining({
      type: 'user/registerUser/fulfilled',
      payload: { message: 'User created successfully' },
      meta: expect.objectContaining({
        arg: {
          name: 'Test',
          email: 'test@test.com',
          password: 'test123'
        },
        requestId: expect.any(String),
        requestStatus: 'fulfilled'
      })
    })
  ]

  const store = mockStore({} as RootState)
  const newUserInfo = {
    name: 'Test',
    email: 'test@test.com',
    password: 'test123'
  }
  await (store.dispatch as ThunkDispatch<RootState, undefined, AnyAction>)(
    createUser(newUserInfo)
  )
  const dispatchedActions = store.getActions()

  expect(dispatchedActions).toEqual(expectedActions)
})

test('receive user/updateUserProfile/fulfilled when updating a user profile was successfull', async () => {
  // Mock axios.put to return specific data
  mockedAxios.put.mockResolvedValueOnce({
    data: { message: 'User updated successfully' }
  })

  const expectedActions = [
    {
      type: 'user/updateUserProfile/pending',
      meta: {
        arg: {
          name: 'Test',
          email: 'test@test.com',
          password: 'test123',
          coinsAvailable: 100
        },
        requestId: expect.any(String),
        requestStatus: 'pending'
      },
      payload: undefined
    },
    expect.objectContaining({
      type: 'user/updateUserProfile/fulfilled',
      payload: { message: 'User updated successfully' },
      meta: expect.objectContaining({
        arg: {
          name: 'Test',
          email: 'test@test.com',
          password: 'test123',
          coinsAvailable: 100
        },
        requestId: expect.any(String),
        requestStatus: 'fulfilled'
      })
    })
  ]

  const store = mockStore({
    user: { userInfo: { token: 'testToken' } }
  } as RootState)
  const updatedUserInfo = {
    name: 'Test',
    email: 'test@test.com',
    password: 'test123',
    coinsAvailable: 100
  }
  await (store.dispatch as ThunkDispatch<RootState, undefined, AnyAction>)(
    updateUserProfile(updatedUserInfo)
  )
  const dispatchedActions = store.getActions()

  expect(dispatchedActions).toEqual(expectedActions)
})

test('user/getUsers/fulfilled is received when getting users was successfull', async () => {
  // Mock axios.get to return specific data
  mockedAxios.get.mockResolvedValueOnce({
    data: { message: 'Users fetched successfully' }
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
      type: 'user/getUsers/fulfilled',
      payload: { message: 'Users fetched successfully' },
      meta: expect.objectContaining({
        arg: {},
        requestId: expect.any(String),
        requestStatus: 'fulfilled'
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
  console.log(dispatchedActions)
  expect(dispatchedActions).toEqual(expectedActions)
})

test('user/deleteUser/fulfilled received when deleting a user was successfull', async () => {
  // Mock axios.delete to return specific data
  mockedAxios.delete.mockResolvedValueOnce({
    data: { message: 'User deleted successfully' }
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
      type: 'user/deleteUser/fulfilled',
      payload: { message: 'User deleted successfully' },
      meta: expect.objectContaining({
        arg: '1',
        requestId: expect.any(String),
        requestStatus: 'fulfilled'
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
