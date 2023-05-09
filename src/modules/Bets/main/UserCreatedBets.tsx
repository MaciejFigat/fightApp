import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import {
  deleteRegisteredBet,
  getUserBets
} from '../../../reduxState/stateSlices/bets/betsSlice'
import {
  FlexEndWrapperOnly,
  FlexStartWrapper,
  FlexStartWrapperOnly,
  GeneralWrapper,
  HighlightText,
  HorizontalWrapper,
  HorizontalWrapperCenter,
  HorizontalWrapperSpaceBetween
} from '../../../styles/misc.styles'
import { FightListHeader, MainListHeaderGrey } from './DragColumns.styled'
import {
  BlurredFatText,
  BlurredSkinnyText
} from '../components/BetConfirmation.styled'
import { dateFormatter } from '../../utils/helperFunctions/helperFunction'
import BetProjectedWinner from '../components/BetProjectedWinner'
import { CreatedBetsFilter, TextColor } from '../../../consts'
import OddsNotification from '../components/OddsNotification'
import BetRegisterConfirm from '../components/BetRegisterConfirm'
import {
  ButtonInconspicuousSecondary,
  ButtonUnderlineSecondary,
  ButtonUnderlineTransparentSecondary
} from '../../../components/Buttons/Buttons.styled'

interface UserCreatedBetsProps {}

const UserCreatedBets: React.FC<UserCreatedBetsProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const userBets = useAppSelector(state => state.bets.userBets)
  const [betFilter, setBetFilter] = useState<CreatedBetsFilter>(
    CreatedBetsFilter.PENDING
  )
  const betsToDisplay = (() => {
    switch (betFilter) {
      case CreatedBetsFilter.PENDING:
        return (
          Array.isArray(userBets) &&
          userBets.filter(
            bet => bet.isAccepted === false && bet.isResolved === false
          )
        )
      case CreatedBetsFilter.ACCEPTED:
        return (
          Array.isArray(userBets) &&
          userBets.filter(
            bet => bet.isAccepted === true && bet.isResolved === false
          )
        )
      case CreatedBetsFilter.EXPIRED:
        return (
          Array.isArray(userBets) &&
          userBets.filter(
            bet => bet.isResolved === true && bet.isAccepted === false
          )
        )
      case CreatedBetsFilter.RETIRED:
        return (
          Array.isArray(userBets) &&
          userBets.filter(
            bet => bet.isResolved === true && bet.isAccepted === true
          )
        )

      default:
        return userBets
    }
  })()
  useEffect(() => {
    dispatch(getUserBets(1))
  }, [dispatch, userBets.length])

  const handleDeleteBet = (betId: string) => {
    dispatch(deleteRegisteredBet(betId))
  }

  return (
    <GeneralWrapper>
      <FlexStartWrapper>
        <MainListHeaderGrey>
          <HorizontalWrapperCenter>Bets created</HorizontalWrapperCenter>
          <HorizontalWrapperCenter>
            <HorizontalWrapper>
              <ButtonInconspicuousSecondary
                color={TextColor.INFO}
                onClick={() => setBetFilter(CreatedBetsFilter.PENDING)}
                $active={betFilter === CreatedBetsFilter.PENDING}
              >
                Pending
              </ButtonInconspicuousSecondary>
              {betFilter === CreatedBetsFilter.PENDING ? (
                <ButtonUnderlineSecondary
                  color={TextColor.INFO}
                  layoutId='chosenBetFilter'
                />
              ) : (
                <ButtonUnderlineTransparentSecondary layoutId='notVisibleBetFilter' />
              )}
            </HorizontalWrapper>
            <HorizontalWrapper>
              <ButtonInconspicuousSecondary
                color={TextColor.SUCCESS}
                onClick={() => setBetFilter(CreatedBetsFilter.ACCEPTED)}
                $active={betFilter === CreatedBetsFilter.ACCEPTED}
              >
                Active
              </ButtonInconspicuousSecondary>
              {betFilter === CreatedBetsFilter.ACCEPTED ? (
                <ButtonUnderlineSecondary
                  color={TextColor.SUCCESS}
                  layoutId='chosenBetFilter'
                />
              ) : (
                <ButtonUnderlineTransparentSecondary layoutId='notVisibleBetFilter' />
              )}
            </HorizontalWrapper>
            <HorizontalWrapper>
              <ButtonInconspicuousSecondary
                onClick={() => setBetFilter(CreatedBetsFilter.EXPIRED)}
                $active={betFilter === CreatedBetsFilter.EXPIRED}
                color={TextColor.WARNING}
              >
                Expired
              </ButtonInconspicuousSecondary>
              {betFilter === CreatedBetsFilter.EXPIRED ? (
                <ButtonUnderlineSecondary
                  color={TextColor.WARNING}
                  layoutId='chosenBetFilter'
                />
              ) : (
                <ButtonUnderlineTransparentSecondary layoutId='notVisibleBetFilter' />
              )}
            </HorizontalWrapper>
            <HorizontalWrapper>
              <ButtonInconspicuousSecondary
                color={TextColor.GOLD}
                onClick={() => setBetFilter(CreatedBetsFilter.RETIRED)}
                $active={betFilter === CreatedBetsFilter.RETIRED}
              >
                Resolved
              </ButtonInconspicuousSecondary>
              {betFilter === CreatedBetsFilter.RETIRED ? (
                <ButtonUnderlineSecondary
                  color={TextColor.GOLD}
                  layoutId='chosenBetFilter'
                />
              ) : (
                <ButtonUnderlineTransparentSecondary layoutId='notVisibleBetFilter' />
              )}
            </HorizontalWrapper>
          </HorizontalWrapperCenter>
        </MainListHeaderGrey>
        {betsToDisplay &&
          betsToDisplay.length > 0 &&
          betsToDisplay.map(bet => (
            <FightListHeader key={bet.id}>
              {' '}
              <HorizontalWrapperSpaceBetween>
                {' '}
                <BetProjectedWinner bet={bet} />
                <BlurredSkinnyText>{bet.fightName}</BlurredSkinnyText>
              </HorizontalWrapperSpaceBetween>
              <HorizontalWrapperSpaceBetween>
                {' '}
                <BlurredFatText>
                  {dateFormatter(bet.dateTime, false)}
                </BlurredFatText>{' '}
              </HorizontalWrapperSpaceBetween>
              <HorizontalWrapperSpaceBetween>
                <FlexStartWrapperOnly>
                  <HighlightText color={TextColor.GOLD}>
                    Bet: {bet.amountBet.toFixed(2)}
                  </HighlightText>{' '}
                  <HighlightText
                    color={bet.isAccepted ? TextColor.SUCCESS : TextColor.INFO}
                  >
                    To win: {bet.expectedPayout.toFixed(2)}
                  </HighlightText>
                </FlexStartWrapperOnly>
                {bet.isAccepted ? (
                  <HighlightText color={TextColor.SUCCESS}>
                    Accepted
                  </HighlightText>
                ) : (
                  <FlexEndWrapperOnly>
                    {' '}
                    <OddsNotification
                      noteContent='It is only possible to remove registered bets before they are accepted.'
                      contentHeader='Reminder'
                      warningSign
                    />{' '}
                    <HighlightText color={TextColor.WARNING}>
                      Pending
                    </HighlightText>
                  </FlexEndWrapperOnly>
                )}
              </HorizontalWrapperSpaceBetween>{' '}
              {bet.isAccepted ? null : (
                <FlexEndWrapperOnly>
                  {' '}
                  <BetRegisterConfirm
                    deleteBet={handleDeleteBet}
                    betId={bet._id}
                    bet={bet}
                    buttonLabel='Delete the bet'
                    customMessage='Last chance to delete'
                  />
                </FlexEndWrapperOnly>
              )}
            </FightListHeader>
          ))}
      </FlexStartWrapper>
    </GeneralWrapper>
  )
}
export default UserCreatedBets
