import React, { useState } from 'react'
import {
  BoldText,
  ColorBadge,
  ColorBadgeEmpty,
  HorizontalWrapperEnd,
  HorizontalWrapperSpaceBetween
} from '../../styles/misc.styles'
import { HeaderWrapper } from '../DragColumns/DragColumns.styled'
import { TextColor, WinnerProjection } from '../../consts'
import { FighterProfile } from '../../interfaces'

interface BetHeaderProps {
  betMoneyline: number | undefined
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
  winnerChange
}) => {
  const [winnerProjection, setWinnerProjection] = useState<WinnerProjection>(
    projectedWinner ?? WinnerProjection.ANY
  )

  const handleWinner = (e: WinnerProjection) => {
    setWinnerProjection(e)
    winnerChange(betId, e)
  }

  return (
    <HeaderWrapper>
      <HorizontalWrapperSpaceBetween>
        <BoldText>{betName}</BoldText>

        {betMoneyline && (
          <ColorBadge
            color={betMoneyline > 0 ? TextColor.WARNING : TextColor.SUCCESS}
          >
            {betMoneyline > 0 ? `+${betMoneyline}` : betMoneyline}
          </ColorBadge>
        )}
        {!betMoneyline && (
          <HorizontalWrapperEnd>
            {[
              {
                winner: WinnerProjection.FIGHTER1,
                color: TextColor.SUCCESS,
                text: 'F1'
              },
              {
                winner: WinnerProjection.FIGHTER2,
                color: TextColor.WARNING,
                text: 'F2'
              },
              {
                winner: WinnerProjection.ANY,
                color: TextColor.INFO,
                text: 'Any'
              }
            ].map(item => (
              <React.Fragment key={item.winner}>
                {winnerProjection === item.winner ? (
                  <ColorBadge
                    onClick={() => handleWinner(item.winner)}
                    color={item.color}
                  >
                    {item.text}
                  </ColorBadge>
                ) : (
                  <ColorBadgeEmpty
                    onClick={() => handleWinner(item.winner)}
                    color={item.color}
                  >
                    {item.text}
                  </ColorBadgeEmpty>
                )}
              </React.Fragment>
            ))}
          </HorizontalWrapperEnd>
        )}
      </HorizontalWrapperSpaceBetween>
    </HeaderWrapper>
  )
}
export default BetHeader
