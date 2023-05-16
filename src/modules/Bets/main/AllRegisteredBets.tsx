import React, { useState, useMemo, useEffect } from 'react'
import {
  ButtonInconspicuousSecondary,
  ButtonUnderlineSecondary,
  ButtonUnderlineTransparentSecondary
} from '../../../components/Buttons/Buttons.styled'
import { BetFilter, TextColor } from '../../../consts'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import {
  editRegisteredBet,
  getAllBets
} from '../../../reduxState/stateSlices/bets/betsSlice'
import { FightListHeader, MainListHeaderGrey } from './DragColumns.styled'
import {
  FlexStartWrapper,
  GeneralWrapper,
  HighlightText,
  HorizontalWrapper,
  HorizontalWrapperCenter,
  HorizontalWrapperSpaceAround,
  HorizontalWrapperSpaceBetween
} from '../../../styles/misc.styles'
import {
  filterAcceptedBets,
  filterAllBetsByEarliestDate,
  filterBetsByEventId,
  filterUserBetsAway
} from '../functions/filterBets'
import { dateFormatter } from '../../utils/helperFunctions/helperFunction'
import {
  BlurredFatText,
  BlurredSkinnyText
} from '../components/BetConfirmation.styled'
import BetVisualisation from '../components/BetVisualisation'
import {
  AcceptedBet,
  BetsWithUserData,
  ConfirmedBet,
  UserInfo
} from '../../../interfaces'

import BetRegisterConfirm from '../components/BetRegisterConfirm'

import OddsNotification from '../components/OddsNotification'
import BetProjectedWinner from '../components/BetProjectedWinner'
import PleaseLogin from '../components/PleaseLogin'

interface AllRegisteredBetsProps {}

const AllRegisteredBets: React.FC<AllRegisteredBetsProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const allBets: BetsWithUserData[] = useAppSelector(
    state => state.bets.allBets
  )
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)

  const { id: userId, coinsAvailable } = userInfo
  const currentEvent = useAppSelector(state => state.events.currentEvent)

  const { EventId } = currentEvent || { EventId: 0 }

  const [betFilter, setBetFilter] = useState<BetFilter>(BetFilter.ALL_BETS)

  const handleAcceptBet = async (bet: ConfirmedBet) => {
    if (bet.isAccepted === true) {
      console.log('Bet already accepted')
      return
    }
    const betToAccept: AcceptedBet = {
      ...bet,
      isAccepted: true,
      acceptDateTime: new Date(),
      acceptedBy: userId ?? null
    }

    if (coinsAvailable && coinsAvailable > bet.amountBet) {
      await dispatch(editRegisteredBet(betToAccept))
      // Refetch the bets data after the edit is completed
      dispatch(getAllBets(1))
    }
  }

  const noUserBets = useMemo(() => {
    if (!allBets || !userId) {
      return []
    }
    return filterUserBetsAway(allBets, userId)
  }, [allBets, userId])

  const notAcceptedBets = useMemo(() => {
    if (!noUserBets) {
      return []
    }
    return filterAcceptedBets(noUserBets)
  }, [noUserBets])

  const currentEventBets = useMemo(() => {
    return filterBetsByEventId(notAcceptedBets, EventId)
  }, [notAcceptedBets, EventId])

  const filteredEarliestBets = useMemo(() => {
    return filterAllBetsByEarliestDate(allBets)
  }, [allBets])

  const betsToDisplay = (() => {
    switch (betFilter) {
      case BetFilter.ALL_BETS:
        return notAcceptedBets
      case BetFilter.CURRENT_EVENT:
        return currentEventBets
      case BetFilter.NEXT_EVENT:
        return filteredEarliestBets
      default:
        return allBets
    }
  })()

  useEffect(() => {
    dispatch(getAllBets(1))
  }, [dispatch, allBets.length])

  return (
    <GeneralWrapper>
      <FlexStartWrapper>
        <MainListHeaderGrey>
          <HorizontalWrapperCenter>
            <HighlightText color={TextColor.INFO}>All bets</HighlightText>
          </HorizontalWrapperCenter>
          <HorizontalWrapperSpaceAround>
            {' '}
            <HorizontalWrapper>
              <ButtonInconspicuousSecondary
                color={TextColor.PRIMARY}
                onClick={() => setBetFilter(BetFilter.ALL_BETS)}
                $active={betFilter === BetFilter.ALL_BETS}
              >
                All
              </ButtonInconspicuousSecondary>
              {betFilter === BetFilter.ALL_BETS ? (
                <ButtonUnderlineSecondary
                  color={TextColor.PRIMARY}
                  layoutId='registeredBetFilter'
                  left='-35px'
                />
              ) : (
                <ButtonUnderlineTransparentSecondary layoutId='notVisibleBetFilter' />
              )}
            </HorizontalWrapper>
            <HorizontalWrapper>
              <ButtonInconspicuousSecondary
                color={TextColor.GOLD}
                onClick={() => setBetFilter(BetFilter.CURRENT_EVENT)}
                $active={betFilter === BetFilter.CURRENT_EVENT}
              >
                Chosen event
              </ButtonInconspicuousSecondary>
              {betFilter === BetFilter.CURRENT_EVENT ? (
                <ButtonUnderlineSecondary
                  color={TextColor.GOLD}
                  layoutId='registeredBetFilter'
                  left='5px'
                />
              ) : (
                <ButtonUnderlineTransparentSecondary layoutId='notVisibleBetFilter' />
              )}
            </HorizontalWrapper>
            <HorizontalWrapper>
              <ButtonInconspicuousSecondary
                color={TextColor.SUCCESS}
                onClick={() => setBetFilter(BetFilter.NEXT_EVENT)}
                $active={betFilter === BetFilter.NEXT_EVENT}
              >
                Closest event
              </ButtonInconspicuousSecondary>
              {betFilter === BetFilter.NEXT_EVENT ? (
                <ButtonUnderlineSecondary
                  color={TextColor.SUCCESS}
                  layoutId='registeredBetFilter'
                />
              ) : (
                <ButtonUnderlineTransparentSecondary layoutId='notVisibleBetFilter' />
              )}
            </HorizontalWrapper>
          </HorizontalWrapperSpaceAround>
        </MainListHeaderGrey>
        {betsToDisplay &&
          betsToDisplay.length > 0 &&
          betsToDisplay.map(bet => (
            <FightListHeader key={bet.id}>
              <HorizontalWrapperSpaceBetween>
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
                <BetVisualisation
                  expectedPayout={
                    bet.expectedPayout !== 0 &&
                    typeof bet.expectedPayout !== 'undefined'
                      ? bet.expectedPayout
                      : bet.amountBet
                  }
                  amountBet={bet.amountBet}
                />{' '}
                <OddsNotification
                  noteContent='Any reliance placed on these odds is done so at your own risk.'
                  contentHeader='Odds notification'
                />
              </HorizontalWrapperSpaceBetween>

              <BetRegisterConfirm
                handleBet={handleAcceptBet}
                bet={bet}
                buttonLabel='Accept the bet'
                customMessage='Are you sure?'
              />
            </FightListHeader>
          ))}
        <PleaseLogin
          header='No active bets'
          subtitle='You must be logged in to see bets.'
        />
      </FlexStartWrapper>
    </GeneralWrapper>
  )
}
export default AllRegisteredBets
