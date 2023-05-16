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

jest.mock('axios')

// Define the mock store type
type MockStore = ReturnType<typeof configureMockStore<RootState, AppDispatch>>

// Initialize the mock store with the necessary middlewares
const mockStore: MockStore = configureMockStore<RootState, AppDispatch>([thunk])

jest.mock('axios', () => ({
  // ... other mocks
  get: jest.fn(() =>
    Promise.reject({
      response: {
        status: 500,
        statusText: 'Internal Server Error',
        data: { message: 'Something went wrong' },
        headers: {},
        config: {}
      }
    })
  ),
  delete: jest.fn(() =>
    Promise.reject({
      response: {
        status: 500,
        statusText: 'Internal Server Error',
        data: { message: 'Something went wrong' },
        headers: {},
        config: {}
      }
    })
  )
}))
afterEach(() => {
  jest.resetAllMocks()
})

test('receive user/getUsers/rejected when getting users fails', async () => {
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
  // console.log(dispatchedActions)
  expect(dispatchedActions).toEqual(expectedActions)
})

test('receive user/deleteUser/rejected when deleting a user fails', async () => {
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
  console.log(dispatchedActions)
  expect(dispatchedActions).toEqual(expectedActions)
})
