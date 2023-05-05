import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { getUserBets } from '../../../reduxState/stateSlices/bets/betsSlice'
import {
  FlexStartWrapper,
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

interface UserBetDisplayProps {}

const UserBetDisplay: React.FC<UserBetDisplayProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const userBets = useAppSelector(state => state.bets.userBets)

  useEffect(() => {
    dispatch(getUserBets(1))
  }, [dispatch, userBets.length])

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
                <>
                  Bet:{bet.amountBet} To win: {bet.expectedPayout}
                </>{' '}
                {bet.isAccepted ? (
                  <HighlightText color={TextColor.SUCCESS}>
                    Accepted
                  </HighlightText>
                ) : (
                  <HighlightText color={TextColor.WARNING}>
                    Pending
                  </HighlightText>
                )}
              </HorizontalWrapperSpaceBetween>
            </FightListHeader>
          ))}
      </FlexStartWrapper>
    </GeneralWrapper>
  )
}
export default UserBetDisplay
