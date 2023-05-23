import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'
import { BetsState } from '../reduxState/stateSlices/bets/betsSlice'
import { ConfirmedBet } from '../interfaces'
import { ReactNode } from 'react'
import {
  registeredBetOne,
  registeredBetTwo,
  registeredBetThree,
  fightOne,
  fightTwo,
  fightThree,
  fightFour,
  registeredBetFour,
  registeredBetFive,
  registeredBetSix
} from './mockBets'
import AllRegisteredBets from '../modules/Bets/main/AllRegisteredBets'

export const MockedState: BetsState = {
  betsUnconfirmed: [],
  betsConfirmed: [],
  betsRegistered: [],
  betsAccepted: [],
  userBets: [],
  allBets: [registeredBetFive, registeredBetFour, registeredBetSix],
  loading: false,
  success: true
}
interface MockStoreProps {
  betsState: BetsState
  children: ReactNode
}
const userInitialState = {
  userInfo: {
    id: '1414141',
    coinsAvailable: 1002
  }
}
// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    // add reducers
  }
})
const eventInitialState = {
  Active: true,
  DateTime: new Date(),
  Day: '2023-05-20T16:00:00',
  EventId: 303,
  Fights: [fightOne, fightTwo, fightThree, fightFour],
  LeagueId: 11,
  Name: 'Test vs Another Test',
  Season: 122,
  ShortName: 'SuperTest',
  Status: 'acive'
}
const eventSlice = createSlice({
  name: 'event',
  initialState: eventInitialState,
  reducers: {
    // add reducers
  }
})
const Mockstore: React.FC<MockStoreProps> = ({ betsState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        bets: createSlice({
          name: 'bets',
          initialState: betsState,
          reducers: {
            addConfirmedBet (state, action: PayloadAction<ConfirmedBet>) {
              state.betsConfirmed = [...state.betsConfirmed, action.payload]
            },
            removeConfirmedBet (state, action: PayloadAction<string>) {
              state.betsConfirmed = state.betsConfirmed.filter(
                bet => bet.id !== action.payload
              )
            }
          }
        }).reducer,
        user: userSlice.reducer,
        events: eventSlice.reducer
      }
    })}
  >
    {children}
  </Provider>
)

const meta: Meta<typeof AllRegisteredBets> = {
  title: 'AllRegisteredBets',
  component: AllRegisteredBets,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  argTypes: {},
  excludeStories: /.*MockedState$/
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  decorators: [
    story => (
      <Mockstore betsState={MockedState}>
        <div style={{ width: '800px', height: '800px' }}>{story()}</div>
      </Mockstore>
    )
  ]
}
