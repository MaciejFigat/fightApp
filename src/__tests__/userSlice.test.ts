import configureMockStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { AppDispatch, RootState } from '../reduxState/testStore'
import { AnyAction } from 'redux'
import { createUser } from '../reduxState/stateSlices/users/userSlice'
jest.mock('axios')

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

test('creates USER/registerUser/fulfilled when creating a user has been done', async () => {
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
  console.log(dispatchedActions)
  expect(dispatchedActions).toEqual(expectedActions)
})
