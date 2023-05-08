import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { getAcceptedByUserBets } from '../../../reduxState/stateSlices/bets/betsSlice'
import {
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

interface UserAcceptedBetsProps {}

const UserAcceptedBets: React.FC<UserAcceptedBetsProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const betsAccepted = useAppSelector(state => state.bets.betsAccepted)

  useEffect(() => {
    dispatch(getAcceptedByUserBets(1))
  }, [dispatch, betsAccepted.length])

  return (
    <GeneralWrapper>
      <FlexStartWrapper>
        <MainListHeaderGrey>Bets user accepted</MainListHeaderGrey>
        {betsAccepted &&
          betsAccepted.length > 0 &&
          betsAccepted.map(bet => (
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
              </HorizontalWrapperSpaceBetween>{' '}
            </FightListHeader>
          ))}
      </FlexStartWrapper>
    </GeneralWrapper>
  )
}
export default UserAcceptedBets
