import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { getUserBets } from '../../../reduxState/stateSlices/bets/betsSlice'
import {
  FlexEndWrapperOnly,
  FlexStartWrapper,
  FlexStartWrapperOnly,
  GeneralWrapper,
  HighlightText,
  HorizontalWrapperSpaceBetween
} from '../../../styles/misc.styles'
import { FightListHeader, MainListHeaderGrey } from './DragColumns.styled'
import {
  BlurredFatText,
  BlurredSkinnyText
} from '../components/BetConfirmation.styled'
import { dateFormatter } from '../../utils/helperFunctions/helperFunction'
import BetProjectedWinner from '../components/BetProjectedWinner'
import { TextColor } from '../../../consts'
import OddsNotification from '../components/OddsNotification'
import BetRegisterConfirm from '../components/BetRegisterConfirm'

interface UserBetDisplayProps {}

const UserBetDisplay: React.FC<UserBetDisplayProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const userBets = useAppSelector(state => state.bets.userBets)

  useEffect(() => {
    dispatch(getUserBets(1))
  }, [dispatch, userBets.length])

  const handleDeleteBet = (betId: string) => {
    console.log(betId)
  }
  return (
    <GeneralWrapper>
      <FlexStartWrapper>
        <MainListHeaderGrey>My Bets</MainListHeaderGrey>
        {userBets &&
          userBets.length > 0 &&
          userBets.map(bet => (
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
                    Bet: {bet.amountBet}
                  </HighlightText>{' '}
                  <HighlightText
                    color={bet.isAccepted ? TextColor.SUCCESS : TextColor.INFO}
                  >
                    To win: {bet.expectedPayout}
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
                    betId={bet.id}
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
export default UserBetDisplay
