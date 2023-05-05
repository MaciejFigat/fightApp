import React, { useState } from 'react'
import { TextColor, WinnerProjection } from '../../../consts'
import { FighterProfile } from '../../../interfaces'
import {
  ColorBadge,
  ColorBadgeEmpty,
  ColorBadgeLong,
  HorizontalWrapperEnd
} from '../../../styles/misc.styles'

interface BetBadgesProps {
  betMoneyline: number | undefined
  betId: string
  Fighters?: FighterProfile[]
  projectedWinner?: WinnerProjection
  winnerChange: (id: string, winnerProjection: WinnerProjection) => void
  noBadgesInHeader?: boolean
}

const BetBadges: React.FC<BetBadgesProps> = ({
  betMoneyline,
  betId,
  Fighters,
  projectedWinner,
  winnerChange,
  noBadgesInHeader
}) => {
  const [winnerProjection, setWinnerProjection] = useState<WinnerProjection>(
    projectedWinner ?? WinnerProjection.ANY
  )
  const handleWinner = (e: WinnerProjection) => {
    setWinnerProjection(e)
    winnerChange(betId, e)
  }

  const initialsHelper = (index: 0 | 1) => {
    if (Fighters && Fighters.length > 0) {
      const { FirstName, LastName } = Fighters[index]
      return `${FirstName.substring(0, 1)}. ${LastName.substring(0, 1)}.`
    }
  }
  const isFavouriteHelper = (index: 0 | 1) => {
    if (Fighters && Fighters.length > 0) {
      const { Moneyline } = Fighters[index]
      //* < 0  = favourite
      return Moneyline < 0
    }
  }

  return (
    <>
      {/* shows betMoneyline - only present in bets with fighter name in bet name */}
      {betMoneyline ? (
        <ColorBadge
          color={betMoneyline > 0 ? TextColor.WARNING : TextColor.SUCCESS}
        >
          {betMoneyline > 0 ? `+${betMoneyline}` : `${betMoneyline}`}
        </ColorBadge>
      ) : null}
      {/* this option is for bets that are in the accordion header */}
      {noBadgesInHeader ? (
        <>
          {Fighters && typeof projectedWinner === 'number' ? (
            <ColorBadgeLong
              color={
                Fighters &&
                Fighters.length > 0 &&
                Fighters[projectedWinner].Moneyline > 0
                  ? TextColor.WARNING
                  : TextColor.SUCCESS
              }
            >
              {Fighters?.[projectedWinner]?.FirstName &&
              Fighters?.[projectedWinner]?.LastName
                ? `${Fighters[projectedWinner].FirstName} ${Fighters[projectedWinner].LastName}`
                : 'No data'}
            </ColorBadgeLong>
          ) : typeof projectedWinner === 'string' ? (
            <ColorBadgeLong color={TextColor.INFO}>Any fighter</ColorBadgeLong>
          ) : null}
        </>
      ) : (
        <>
          {/* betMoneyline is absent in specialized bets since they contain data of both fighters and their respective moneylines */}
          {!betMoneyline && betMoneyline !== 0 && (
            <HorizontalWrapperEnd>
              {[
                {
                  winner: WinnerProjection.FIGHTER1,
                  color: isFavouriteHelper(0)
                    ? TextColor.SUCCESS
                    : TextColor.WARNING,
                  text: initialsHelper(0) ?? 'J.C.'
                },
                {
                  winner: WinnerProjection.FIGHTER2,
                  color: isFavouriteHelper(1)
                    ? TextColor.SUCCESS
                    : TextColor.WARNING,
                  text: initialsHelper(1) ?? 'J.D.'
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
        </>
      )}
    </>
  )
}
export default BetBadges
