import React, { useState, useMemo, useEffect } from 'react'
import {
  ButtonSmallGradient,
  ButtonVerySmall
} from '../../../components/Buttons/Buttons.styled'
import { BetFilter, ButtonVariants } from '../../../consts'
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
  HorizontalWrapperSpaceAround,
  HorizontalWrapperSpaceBetween
} from '../../../styles/misc.styles'
import {
  filterAcceptedBets,
  filterAllBetsByEarliestDate,
  filterBetsByEventId
} from '../functions/filterBets'
import { dateFormatter } from '../../utils/helperFunctions/helperFunction'
import {
  BlurredFatText,
  BlurredSkinnyText
} from '../components/BetConfirmation.styled'
import BetVisualisation from '../components/BetVisualisation'
import { AcceptedBet, ConfirmedBet, UserInfo } from '../../../interfaces'
import { updateUserProfile } from '../../../reduxState/stateSlices/users/userSlice'

interface AllBetsDisplayProps {}

const AllBetsDisplay: React.FC<AllBetsDisplayProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const allBets = useAppSelector(state => state.bets.allBets)
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)

  const { id: userId, coinsAvailable } = userInfo
  const currentEvent = useAppSelector(state => state.events.currentEvent)

  const { EventId } = currentEvent || { EventId: 0 }

  const [betFilter, setBetFilter] = useState<BetFilter>(BetFilter.ALL_BETS)

  const handleAcceptBet = (bet: ConfirmedBet) => {
    const betToAccept: AcceptedBet = {
      ...bet,
      isAccepted: true,
      acceptDateTime: new Date(),
      acceptedBy: userId ?? null
      // isResolved: false,
      // expectedPayout: bet.expectedPayout
    }
    const updatedUser: UserInfo = {
      id: userId,
      coinsAvailable: (coinsAvailable || 0) - bet.amountBet
    }
    if (coinsAvailable && coinsAvailable > bet.amountBet) {
      dispatch(editRegisteredBet(betToAccept))
      dispatch(updateUserProfile(updatedUser))
    }
  }

  const notAcceptedBets = useMemo(() => {
    if (!allBets) {
      return []
    }
    return filterAcceptedBets(allBets)
  }, [allBets])

  const currentEventBets = useMemo(() => {
    return filterBetsByEventId(notAcceptedBets, EventId)
  }, [notAcceptedBets, EventId])

  const filteredEarliestBets = useMemo(() => {
    return filterAllBetsByEarliestDate(allBets)
  }, [allBets])

  const betsToDisplay = (() => {
    switch (betFilter) {
      case BetFilter.ALL_BETS:
        return allBets
      case BetFilter.CURRENT_EVENT:
        return currentEventBets
      case BetFilter.NEXT_EVENT:
        return filteredEarliestBets
      default:
        return allBets
    }
  })() // () to invoke immediately

  useEffect(() => {
    dispatch(getAllBets(1))
  }, [dispatch, allBets.length])

  return (
    <GeneralWrapper>
      <FlexStartWrapper>
        <MainListHeaderGrey>
          <HorizontalWrapperSpaceAround>
            {' '}
            <ButtonSmallGradient
              variant={ButtonVariants.SECONDARY}
              onClick={() => setBetFilter(BetFilter.ALL_BETS)}
              $active={betFilter === BetFilter.ALL_BETS ? true : false}
            >
              All bets
            </ButtonSmallGradient>{' '}
            <ButtonSmallGradient
              variant={ButtonVariants.SECONDARY_EMPTY}
              onClick={() => setBetFilter(BetFilter.CURRENT_EVENT)}
              $active={betFilter === BetFilter.CURRENT_EVENT ? true : false}
            >
              Chosen event
            </ButtonSmallGradient>{' '}
            <ButtonSmallGradient
              variant={ButtonVariants.PRIMARY_EMPTY}
              onClick={() => setBetFilter(BetFilter.NEXT_EVENT)}
              $active={betFilter === BetFilter.NEXT_EVENT ? true : false}
            >
              Closest event
            </ButtonSmallGradient>{' '}
          </HorizontalWrapperSpaceAround>
        </MainListHeaderGrey>
        {betsToDisplay &&
          betsToDisplay.length > 0 &&
          betsToDisplay.map(bet => (
            <FightListHeader key={bet.id}>
              <HorizontalWrapperSpaceBetween>
                {' '}
                {bet.name}{' '}
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
                <ButtonVerySmall
                  variant={ButtonVariants.SUCCESS_EMPTY}
                  onClick={() => handleAcceptBet(bet)}
                >
                  Accept the bet
                </ButtonVerySmall>
              </HorizontalWrapperSpaceBetween>
            </FightListHeader>
          ))}
      </FlexStartWrapper>
    </GeneralWrapper>
  )
}
export default AllBetsDisplay
