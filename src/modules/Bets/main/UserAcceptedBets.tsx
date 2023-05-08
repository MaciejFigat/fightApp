import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { getAcceptedByUserBets } from '../../../reduxState/stateSlices/bets/betsSlice'
import {
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
import {
  ButtonInconspicuousSecondary,
  ButtonUnderlineSecondary,
  ButtonUnderlineTransparentSecondary
} from '../../../components/Buttons/Buttons.styled'

interface UserAcceptedBetsProps {}

const UserAcceptedBets: React.FC<UserAcceptedBetsProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const betsAccepted = useAppSelector(state => state.bets.betsAccepted)
  const [betFilter, setBetFilter] = useState<CreatedBetsFilter>(
    CreatedBetsFilter.ACCEPTED
  )

  const betsToDisplay = (() => {
    switch (betFilter) {
      case CreatedBetsFilter.ACCEPTED:
        return betsAccepted
      case CreatedBetsFilter.RETIRED:
        return betsAccepted.filter(bet => bet.isResolved === true)

      default:
        return betsAccepted
    }
  })()

  useEffect(() => {
    dispatch(getAcceptedByUserBets(1))
  }, [dispatch, betsAccepted.length])

  return (
    <GeneralWrapper>
      <FlexStartWrapper>
        <MainListHeaderGrey>
          {' '}
          <HorizontalWrapperCenter>Bets accepted</HorizontalWrapperCenter>
          <HorizontalWrapperCenter>
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
                  layoutId='acceptedBetFilter'
                />
              ) : (
                <ButtonUnderlineTransparentSecondary layoutId='notVisibleAcceptedBetFilter' />
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
                  layoutId='acceptedBetFilter'
                />
              ) : (
                <ButtonUnderlineTransparentSecondary layoutId='notVisibleAcceptedBetFilter' />
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
              </HorizontalWrapperSpaceBetween>
              <HorizontalWrapperSpaceBetween>
                {' '}
                <BlurredFatText>
                  {dateFormatter(bet.dateTime, false)}
                </BlurredFatText>{' '}
                <BlurredSkinnyText>{bet.fightName}</BlurredSkinnyText>
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
