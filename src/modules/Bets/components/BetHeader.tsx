import React from 'react'
import {
  BoldText,
  HorizontalWrapperSpaceBetween
} from '../../../styles/misc.styles'
import { HeaderWrapper } from '../main/DragColumns.styled'
import { WinnerProjection } from '../../../consts'
import { FighterProfile } from '../../../interfaces'
import BetBadges from './BetBadges'

interface BetHeaderProps {
  betMoneyline: number | undefined
  noBadgesInHeader?: boolean
  betName: string
  betId: string
  Fighters?: FighterProfile[]
  projectedWinner?: WinnerProjection
  winnerChange: (id: string, winnerProjection: WinnerProjection) => void
}

const BetHeader: React.FC<BetHeaderProps> = ({
  betMoneyline,
  betName,
  betId,
  Fighters,
  projectedWinner,
  winnerChange,
  noBadgesInHeader
}) => {
  return (
    <HeaderWrapper>
      <HorizontalWrapperSpaceBetween>
        <BoldText>{betName}</BoldText>

        <BetBadges
          betMoneyline={betMoneyline}
          betId={betId}
          Fighters={Fighters}
          projectedWinner={projectedWinner}
          winnerChange={winnerChange}
          noBadgesInHeader={noBadgesInHeader}
        />
      </HorizontalWrapperSpaceBetween>
    </HeaderWrapper>
  )
}
export default BetHeader
