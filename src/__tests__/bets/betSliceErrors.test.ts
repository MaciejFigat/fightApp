import configureMockStore from 'redux-mock-store'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { AppDispatch, RootState } from '../../reduxState/testStore'
import { AnyAction } from 'redux'
import axios from 'axios'
import {
  createBet,
  deleteRegisteredBet,
  editRegisteredBet,
  getUserBets
} from '../../reduxState/stateSlices/bets/betsSlice'
import { WinMethod } from '../../consts'

const mockedAxios = axios as jest.Mocked<typeof axios>

jest.mock('axios', () => ({
  get: jest.fn(),
  delete: jest.fn(),
  put: jest.fn(),
  post: jest.fn()
}))

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  mockedAxios.get.mockClear()
  mockedAxios.put.mockClear()
  mockedAxios.post.mockClear()
  mockedAxios.delete.mockClear()
  Storage.prototype.setItem = jest.fn()
})

afterEach(() => {
  jest.resetAllMocks()
})
// Define the mock store type
type MockStore = ReturnType<typeof configureMockStore<RootState, AppDispatch>>

// Initialize the mock store with the necessary middlewares
const mockStore: MockStore = configureMockStore<RootState, AppDispatch>([thunk])
const BobTheToaster = {
  Active: true,
  FighterId: 123,
  FirstName: 'John',
  LastName: 'Doester',
  Moneyline: 250,
  PreFightDraws: 1,
  PreFightLosses: 2,
  PreFightNoContests: 0,
  PreFightWins: 10,
  Winner: false
}
const BobTheTester = {
  Active: true,
  FighterId: 456,
  FirstName: 'Test',
  LastName: 'Johnson',
  Moneyline: 350,
  PreFightDraws: 2,
  PreFightLosses: 3,
  PreFightNoContests: 1,
  PreFightWins: 8,
  Winner: false
}

const newBet = {
  id: '1231245151515ewdsfsfsfs',
  name: 'BobTheToaster',
  fightName: 'BobTheToaster vs. BobTheTester',
  method: WinMethod.KO_TKO,
  FightId: 1234,
  EventId: 123545,
  activated: true,
  dateTime: '2025-05-01T23:00:00.000Z',
  moneyline: 100,
  Fighters: [BobTheToaster, BobTheTester],
  projectedWinner: 0,
  amountBet: 1,
  expectedPayout: 1
}

const thirdAcceptedBet = {
  id: '12312451515dsdwdssffsfs',
  name: 'BobTheToasterTwo',
  fightName: 'BobTheToaster vs. BobTheTester vol 2',
  method: WinMethod.SUBMISSION,
  FightId: 1434,
  EventId: 123535,
  activated: true,
  dateTime: '2026-05-01T23:00:00.000Z',
  moneyline: 120,
  Fighters: [BobTheToaster, BobTheTester],
  projectedWinner: 0,
  amountBet: 1,
  expectedPayout: 1,
  isResolved: false,
  acceptedBy: '123Babobab',
  acceptDateTime: new Date('2026-04-03T23:00:00.000Z')
}

test('receive bet/createBet/rejected when creating a bet fails', async () => {
  mockedAxios.post.mockRejectedValueOnce({
    response: {
      status: 500,
      statusText: 'Internal Server Error',
      data: { message: 'Rejected' },
      headers: {},
      config: {}
    }
  })

  const expectedActions = [
    {
      type: 'bet/createBet/pending',
      meta: {
        arg: newBet,
        requestId: expect.any(String),
        requestStatus: 'pending'
      },
      payload: undefined
    },
    expect.objectContaining({
      type: 'bet/createBet/rejected',
      meta: expect.objectContaining({
        arg: newBet,
        requestId: expect.any(String),
        requestStatus: 'rejected'
      }),
      payload: 'Rejected',
      error: expect.objectContaining({
        message: 'Rejected'
      })
    })
  ]

  const store = mockStore({
    user: { userInfo: { token: 'testToken' } }
  } as RootState)
  await (store.dispatch as ThunkDispatch<RootState, undefined, AnyAction>)(
    createBet(newBet)
  )
  const dispatchedActions = store.getActions()

  expect(dispatchedActions).toEqual(expectedActions)
})

test('receive bet/getUserBets/rejected when fetching user bets fails', async () => {
  mockedAxios.get.mockRejectedValueOnce({
    response: {
      status: 500,
      statusText: 'Internal Server Error',
      data: { message: 'Rejected' },
      headers: {},
      config: {}
    }
  })

  const expectedActions = [
    {
      type: 'bet/getUserBets/pending',
      meta: {
        arg: {},
        requestId: expect.any(String),
        requestStatus: 'pending'
      },
      payload: undefined
    },
    expect.objectContaining({
      type: 'bet/getUserBets/rejected',
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
    getUserBets({})
  )
  const dispatchedActions = store.getActions()

  expect(dispatchedActions).toEqual(expectedActions)
})

test('receive bet/editRegisteredBet/rejected when editing a bet fails', async () => {
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
      type: 'bet/editRegisteredBet/pending',
      meta: {
        arg: thirdAcceptedBet,
        requestId: expect.any(String),
        requestStatus: 'pending'
      },
      payload: undefined
    },
    expect.objectContaining({
      type: 'bet/editRegisteredBet/rejected',
      meta: expect.objectContaining({
        arg: thirdAcceptedBet,
        requestId: expect.any(String),
        requestStatus: 'rejected'
      })
    })
  ]

  const store = mockStore({
    user: { userInfo: { token: 'testToken' } }
  } as RootState)
  await (store.dispatch as ThunkDispatch<RootState, undefined, AnyAction>)(
    editRegisteredBet(thirdAcceptedBet)
  )
  const dispatchedActions = store.getActions()

  expect(dispatchedActions).toEqual(expectedActions)
})

test('receive bet/deleteBet/rejected when deleting a bet fails', async () => {
  const mockBetId = '1'

  mockedAxios.delete.mockRejectedValueOnce({
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
      type: 'bet/deleteBet/pending',
      meta: {
        arg: mockBetId,
        requestId: expect.any(String),
        requestStatus: 'pending'
      },
      payload: undefined
    },
    expect.objectContaining({
      type: 'bet/deleteBet/rejected',
      meta: expect.objectContaining({
        arg: mockBetId,
        requestId: expect.any(String),
        requestStatus: 'rejected'
      })
    })
  ]

  const store = mockStore({
    user: { userInfo: { token: 'testToken' } }
  } as RootState)
  await (store.dispatch as ThunkDispatch<RootState, undefined, AnyAction>)(
    deleteRegisteredBet(mockBetId)
  )
  const dispatchedActions = store.getActions()

  expect(dispatchedActions).toEqual(expectedActions)
})
