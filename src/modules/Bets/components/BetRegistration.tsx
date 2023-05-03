import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { ConfirmedBet, UserInfo } from '../../../interfaces'
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
import {
  createBet,
  removeConfirmedBet
} from '../../../reduxState/stateSlices/bets/betsSlice'
import BetRegisterConfirm from './BetRegisterConfirm'
import BetFightDate from './BetFightDate'
import BetVisualisation from './BetVisualisation'
import BetProjectedWinner from './BetProjectedWinner'
import { updateUserProfile } from '../../../reduxState/stateSlices/users/userSlice'
interface BetRegistrationProps {}

const BetRegistration: React.FC<BetRegistrationProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const betsConfirmed: ConfirmedBet[] = useAppSelector(
    state => state.bets.betsConfirmed
  )
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)
  const { id: userId, coinsAvailable } = userInfo

  const handleRemove = (betId: string) => {
    dispatch(removeConfirmedBet(betId))
  }
  const handleRegisterBet = (bet: ConfirmedBet) => {
    const updatedUser: UserInfo = {
      id: userId,
      coinsAvailable: (coinsAvailable || 0) - bet.amountBet
    }
    if (coinsAvailable && coinsAvailable > bet.amountBet)
      dispatch(createBet(bet))
    dispatch(updateUserProfile(updatedUser))
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
              <BetRegisterConfirm
                handleRegisterBet={handleRegisterBet}
                bet={bet}
              />

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
