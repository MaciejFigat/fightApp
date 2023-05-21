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

const meta: Meta<typeof BetConfirmation> = {
  title: 'BetConfirmation',
  component: BetConfirmation,
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
      moneyline: 250,
      id: 'bet123',
      name: 'Bob Toester WINS',
      fightName: 'The big Toast',
      dateTime: new Date().toISOString(),
      Fighters: [BobTheTester, BobTheToaster],
      projectedWinner: WinnerProjection.FIGHTER1,
      method: WinMethod.TBD,
      FightId: 123124,
      EventId: 31132311423,
      activated: true
    }
  },
  decorators: [
    story => <Mockstore betsState={MockedState}>{story()}</Mockstore>
  ]
}

export const Default: Story = {
  args: {
    index: 3,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {},
    betData: {
      moneyline: 250,
      id: 'bet124',
      name: 'Bob Toester WINS by KO',
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
    story => <Mockstore betsState={MockedState}>{story()}</Mockstore>
  ]
}
