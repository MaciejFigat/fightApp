import type { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { BetsState } from '../reduxState/stateSlices/bets/betsSlice'

import { ReactNode } from 'react'
import { newConfirmedBet, unconfirmedBetOne } from './mockBets'
import UserLogin from '../modules/Login/UserLogin'

export const MockedState: BetsState = {
  betsUnconfirmed: [unconfirmedBetOne],
  betsConfirmed: [newConfirmedBet],
  betsRegistered: [],
  betsAccepted: [],
  userBets: [],
  allBets: [],
  loading: false,
  success: true
}
interface MockStoreProps {
  betsState: BetsState
  children: ReactNode
}
const userInitialState = {
  userInfo: {}
}
// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    // empty for now
  }
})
const Mockstore: React.FC<MockStoreProps> = ({ betsState, children }) => (
  <Provider
    store={configureStore({
      reducer: {
        user: userSlice.reducer
      }
    })}
  >
    {children}
  </Provider>
)

const meta: Meta<typeof UserLogin> = {
  title: 'UserLogin',
  component: UserLogin,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  tags: ['autodocs'],
  argTypes: {},
  excludeStories: /.*MockedState$/
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  decorators: [
    story => (
      <Mockstore betsState={MockedState}>
        <div style={{ width: '400px', height: '200px' }}>{story()}</div>
      </Mockstore>
    )
  ]
}
