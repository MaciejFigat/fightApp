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
import PleaseLogin from '../components/PleaseLogin'

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
        return (
          Array.isArray(betsAccepted) &&
          betsAccepted.filter(bet => bet.isResolved === true)
        )

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
                Settled
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
                <HighlightText color={TextColor.DANGER}>
                  Against&nbsp;
                </HighlightText>{' '}
                <BetProjectedWinner bet={bet} />
              </HorizontalWrapperSpaceBetween>
              <HorizontalWrapperSpaceBetween>
                {' '}
                <BlurredFatText>
                  {dateFormatter(bet.dateTime, false)}
                </BlurredFatText>{' '}
                <BlurredSkinnyText>{bet.fightName}</BlurredSkinnyText>
              </HorizontalWrapperSpaceBetween>
              {betFilter === CreatedBetsFilter.RETIRED ? (
                <HorizontalWrapperSpaceBetween>
                  <FlexStartWrapperOnly>
                    {bet.betResultWin ? (
                      <HighlightText color={TextColor.WARNING}>
                        LOST: {bet.expectedPayout.toFixed(2)}
                      </HighlightText>
                    ) : (
                      <HighlightText color={TextColor.SUCCESS}>
                        WON: {bet.amountBet.toFixed(2)}
                      </HighlightText>
                    )}
                  </FlexStartWrapperOnly>
                </HorizontalWrapperSpaceBetween>
              ) : (
                <HorizontalWrapperSpaceBetween>
                  <FlexStartWrapperOnly>
                    {/* user accepted so he bet expectedPayout */}
                    <HighlightText color={TextColor.GOLD}>
                      Bet: {bet.expectedPayout.toFixed(2)}
                    </HighlightText>{' '}
                    <HighlightText color={TextColor.INFO}>
                      To win: {bet.amountBet.toFixed(2)}
                    </HighlightText>
                  </FlexStartWrapperOnly>
                </HorizontalWrapperSpaceBetween>
              )}
            </FightListHeader>
          ))}
        <PleaseLogin
          header='No active bets'
          subtitle='You must be logged in to see bets.'
          noButtons
        />
      </FlexStartWrapper>
    </GeneralWrapper>
  )
}
export default UserAcceptedBets
