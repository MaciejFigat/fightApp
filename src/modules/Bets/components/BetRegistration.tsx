import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { ConfirmedBet } from '../../../interfaces'
import { BetListHeader } from '../main/DragColumns.styled'
import {
  HighlightText,
  HorizontalLineBottom,
  HorizontalWrapper,
  HorizontalWrapperSpaceBetween,
  RoundAccent
} from '../../../styles/misc.styles'
import { ButtonVariants, TextColor } from '../../../consts'
import { ButtonSmall } from '../../../components/Buttons/Buttons.styled'
import { BetDetails } from './BetConfirmation.styled'
import { AppDispatch } from '../../../reduxState/store'
import { removeConfirmedBet } from '../../../reduxState/stateSlices/bets/betsSlice'
import BetRegisterConfirm from './BetRegisterConfirm'
import BetFightDate from './BetFightDate'
import BetVisualisation from './BetVisualisation'
import BetProjectedWinner from './BetProjectedWinner'
interface BetRegistrationProps {}

const BetRegistration: React.FC<BetRegistrationProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const betsConfirmed: ConfirmedBet[] = useAppSelector(
    state => state.bets.betsConfirmed
  )

  const handleRemove = (betId: string) => {
    dispatch(removeConfirmedBet(betId))
  }

  return (
    <>
      {betsConfirmed.length > 0 ? (
        <>
          <BetListHeader>
            <HorizontalWrapper>
              <RoundAccent>{betsConfirmed.length} </RoundAccent>
              <HighlightText color={TextColor.SUCCESS}>
                bets to register
              </HighlightText>
            </HorizontalWrapper>
          </BetListHeader>
          {betsConfirmed.map((bet: ConfirmedBet) => (
            <BetDetails key={bet.id}>
              <BetProjectedWinner bet={bet} />
              <BetFightDate fightName={bet.dateTime} dateTime={bet.dateTime} />

              <BetVisualisation
                amountBet={bet.amountBet}
                expectedPayout={bet.expectedPayout}
              />
              <BetRegisterConfirm />

              <HorizontalWrapperSpaceBetween>
                <ButtonSmall
                  variant={ButtonVariants.DANGER_EMPTY}
                  onClick={() => handleRemove(bet.id)}
                >
                  Remove
                </ButtonSmall>
              </HorizontalWrapperSpaceBetween>
              <HorizontalLineBottom />
            </BetDetails>
          ))}
        </>
      ) : null}
    </>
  )
}
export default BetRegistration
