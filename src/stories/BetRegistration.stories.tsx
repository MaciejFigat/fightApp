import type { Meta, StoryObj } from '@storybook/react'
import { WinMethod, WinnerProjection } from '../consts'
import BetConfirmation from '../modules/Bets/components/BetConfirmation'
import { Provider } from 'react-redux'
import { PayloadAction, configureStore, createSlice } from '@reduxjs/toolkit'
import { BetsState } from '../reduxState/stateSlices/bets/betsSlice'
import { ConfirmedBet } from '../interfaces'
import { ReactNode } from 'react'
import {
  BobTheTester,
  BobTheToaster,
  newConfirmedBet,
  unconfirmedBetOne
} from './mockBets'
import BetRegistration from '../modules/Bets/components/BetRegistration'
//? STATE MOCKED

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
        }).reducer
      }
    })}
  >
    {children}
  </Provider>
)

//? STATE MOCKED - END

const meta: Meta<typeof BetRegistration> = {
  title: 'BetRegistration',
  component: BetRegistration,
  decorators: [story => <div style={{ padding: '3rem' }}>{story()}</div>],
  //   tags: ['autodocs'],
  argTypes: {
    // Fighters: {
    //   control: 'object'
    // }
  },
  excludeStories: /.*MockedState$/
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    index: 3,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {},
    betData: {
      id: 'bet123',
      FightId: 123124,
      EventId: 31132311423,
      name: 'Tester Bob',
      fightName: 'The big Toast',
      method: WinMethod.TBD,
      projectedWinner: WinnerProjection.FIGHTER1,
      moneyline: BobTheToaster.Moneyline,
      dateTime: new Date().toISOString(),
      activated: false
    }
  },
  decorators: [
    story => (
      <Mockstore betsState={MockedState}>
        <div style={{ width: '400px', height: '200px' }}>{story()}</div>
      </Mockstore>
    )
  ]
}

export const MethodWin: Story = {
  args: {
    index: 3,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {},
    betData: {
      id: 'bet124',
      name: 'KO/TKO',
      fightName: 'The big Toast',
      dateTime: new Date().toISOString(),
      Fighters: [BobTheTester, BobTheToaster],
      projectedWinner: WinnerProjection.FIGHTER1,
      method: WinMethod.KO_TKO,
      FightId: 1232224,
      EventId: 311322211423,
      activated: true
    }
  },
  decorators: [
    story => (
      <Mockstore betsState={MockedState}>
        {' '}
        <div style={{ width: '400px', height: '200px' }}>{story()}</div>
      </Mockstore>
    )
  ]
}
