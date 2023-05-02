import React, { useState, useMemo } from 'react'
import {
  ButtonMedium,
  ButtonSmallGradient
} from '../../../components/Buttons/Buttons.styled'
import { BetFilter, ButtonVariants } from '../../../consts'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { getAllBets } from '../../../reduxState/stateSlices/bets/betsSlice'
import { FightListHeader, MainListHeaderGrey } from './DragColumns.styled'
import {
  FlexStartWrapper,
  GeneralWrapper,
  HorizontalWrapperSpaceAround,
  HorizontalWrapperSpaceBetween
} from '../../../styles/misc.styles'
import {
  filterAllBetsByEarliestDate,
  filterBetsByEventId
} from '../functions/filterBets'
import { dateFormatter } from '../../utils/helperFunctions/helperFunction'
import {
  BlurredFatText,
  BlurredSkinnyText
} from '../components/BetConfirmation.styled'
import BetVisualisation from '../components/BetVisualisation'

interface AllBetsDisplayProps {}

const AllBetsDisplay: React.FC<AllBetsDisplayProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const allBets = useAppSelector(state => state.bets.allBets)
  const currentEvent = useAppSelector(state => state.events.currentEvent)
  const { EventId } = currentEvent || { EventId: 0 }
  const [betFilter, setBetFilter] = useState<BetFilter>(BetFilter.ALL_BETS)

  const fetchBetsHandler = () => {
    dispatch(getAllBets(1))
  }
  const currentEventBets = useMemo(() => {
    return filterBetsByEventId(allBets, EventId)
  }, [allBets, EventId])

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
        {allBets.length > 0 &&
          betsToDisplay.map(bet => (
            <FightListHeader>
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
                />
              </HorizontalWrapperSpaceBetween>
            </FightListHeader>
          ))}
        <ButtonMedium
          variant={ButtonVariants.INFO_EMPTY}
          onClick={fetchBetsHandler}
        >
          Get me all the bets please
        </ButtonMedium>
      </FlexStartWrapper>
    </GeneralWrapper>
  )
}
export default AllBetsDisplay
