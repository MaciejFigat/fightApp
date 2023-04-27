import React from 'react'
import {
  HighlightText,
  HorizontalWrapperSpaceBetween
} from '../../../styles/misc.styles'
import { TextColor, WinMethod } from '../../../consts'
import { ConfirmedBet } from '../../../interfaces'

interface BetProjectedWinnerProps {
  bet: ConfirmedBet
}

const BetProjectedWinner: React.FC<BetProjectedWinnerProps> = ({ bet }) => {
  const { name, Fighters, projectedWinner, method } = bet
  return (
    <>
      <HorizontalWrapperSpaceBetween>
        {' '}
        {method === WinMethod.TBD && (
          <HighlightText color={TextColor.GOLD}>{name} WINS</HighlightText>
        )}
        {method !== WinMethod.TBD &&
          typeof projectedWinner === 'number' &&
          Fighters && (
            <HighlightText color={TextColor.GOLD}>
              {Fighters[projectedWinner].FirstName}
              {Fighters[projectedWinner].LastName} WINS by
              {method}
            </HighlightText>
          )}
        {method !== WinMethod.TBD && typeof projectedWinner !== 'number' && (
          <HighlightText color={TextColor.GOLD}>
            Fight is decided by a {method}
          </HighlightText>
        )}
      </HorizontalWrapperSpaceBetween>
    </>
  )
}
export default BetProjectedWinner
