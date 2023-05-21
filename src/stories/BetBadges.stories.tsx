import { Meta, StoryObj } from '@storybook/react'
import BetBadges from '../modules/Bets/components/BetBadges'
import { WinnerProjection } from '../consts'
import { BobTheTester, BobTheToaster } from './mockBets'

const meta: Meta<typeof BetBadges> = {
  title: 'BetBadges',
  component: BetBadges,
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
    betMoneyline: 100,
    betId: 'bet123',
    Fighters: [BobTheTester, BobTheToaster],
    projectedWinner: WinnerProjection.FIGHTER1,
    noBadgesInHeader: false,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {}
  }
}
export const Secondary: Story = {
  args: {
    betMoneyline: -300,
    betId: 'bet123',
    Fighters: [BobTheTester, BobTheToaster],
    projectedWinner: WinnerProjection.ANY,
    noBadgesInHeader: false,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {}
  }
}
export const Tertiary: Story = {
  args: {
    betMoneyline: -300,
    betId: 'bet123',
    Fighters: [BobTheTester, BobTheToaster],
    projectedWinner: WinnerProjection.FIGHTER2,
    noBadgesInHeader: false,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {}
  }
}
export const NoFighters: Story = {
  args: {
    betMoneyline: 10,
    betId: 'bet123',
    Fighters: [],
    projectedWinner: WinnerProjection.ANY,
    noBadgesInHeader: false,
    winnerChange: (id: string, winnerProjection: WinnerProjection) => {}
  }
}
