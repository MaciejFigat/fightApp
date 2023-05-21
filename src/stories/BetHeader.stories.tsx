import type { Meta, StoryObj } from '@storybook/react'
import { WinnerProjection } from '../consts'
import BetHeader from '../modules/Bets/components/BetHeader'
import { BobTheTester, BobTheToaster } from './mockBets'

const meta: Meta<typeof BetHeader> = {
  title: 'BetHeader',
  component: BetHeader,
  argTypes: {
    betMoneyline: {
      control: 'number'
    },
    betId: {
      control: 'text'
    },
    Fighters: {
      control: 'object'
    },
    projectedWinner: {
      control: 'select',
      options: [
        WinnerProjection.FIGHTER1,
        WinnerProjection.FIGHTER2,
        WinnerProjection.ANY
      ]
    },
    noBadgesInHeader: {
      control: 'boolean'
    }
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    betName: 'Bob Toester WINS',
    betMoneyline: 250,
    betId: 'bet123',
    Fighters: [BobTheTester, BobTheToaster],
    projectedWinner: WinnerProjection.FIGHTER1,
    noBadgesInHeader: false,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {}
  }
}
export const Secondary: Story = {
  args: {
    betName: 'The other Bob WINS',
    betMoneyline: -100,
    betId: 'bet123',
    Fighters: [BobTheTester, BobTheToaster],
    projectedWinner: WinnerProjection.FIGHTER2,
    noBadgesInHeader: false,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {}
  }
}
export const AnyFighterMethod: Story = {
  args: {
    betName: 'TKO/KO',
    betId: 'bet123',
    Fighters: [BobTheTester, BobTheToaster],
    projectedWinner: WinnerProjection.ANY,
    noBadgesInHeader: true,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {}
  }
}
export const UnderdogWinsMethod: Story = {
  args: {
    betName: 'TKO/KO',
    betId: 'bet123',
    Fighters: [BobTheTester, BobTheToaster],
    projectedWinner: WinnerProjection.FIGHTER2,
    noBadgesInHeader: true,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {}
  }
}
export const FavouriteWinsMethod: Story = {
  args: {
    betName: 'Submission',
    betId: 'bet123',
    Fighters: [BobTheTester, BobTheToaster],
    projectedWinner: WinnerProjection.FIGHTER1,
    noBadgesInHeader: true,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {}
  }
}
