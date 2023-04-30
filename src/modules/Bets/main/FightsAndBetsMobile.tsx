import React, { useState } from 'react'
import { MobileHomeContainer } from '../../../layout/HomePageLayout.styled'

import { OptionsHomeMenu, WinnerProjection } from '../../../consts'
import { winnerChange } from '../functions/winnerChange'
import { BetData, EventAllData } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { useInitialFighterBets } from './useInitialBets'
import { AppDispatch } from '../../../reduxState/store'
import FightsColumnMobile from './FightsColumnMobile'
import BetsColumnMobile from './mobile/BetsColumnMobile'
import BetRegistration from '../components/BetRegistration'
import { ScrollYWrapper } from '../../../styles/misc.styles'

interface FightsAndBetsMobileProps {
  open: OptionsHomeMenu
}

const FightsAndBetsMobile: React.FC<FightsAndBetsMobileProps> = ({ open }) => {
  const dispatch: AppDispatch = useAppDispatch()

  const currentEvent: EventAllData | null = useAppSelector(
    state => state.events.currentEvent
  )
  const betsUnconfirmed: BetData[] = useAppSelector(
    state => state.bets.betsUnconfirmed
  )
  const {
    Name: EventName,
    Fights: currentEventFights,
    DateTime
  } = currentEvent ?? {}
  // state for accordion comp
  const [expandedFight, setExpandedFight] = useState<null | number>(null)

  const winnerChangeHandler = (
    id: string,
    winnerProjection: WinnerProjection
  ) => {
    winnerChange(
      id,
      winnerProjection,
      state,
      setState,
      dispatch,
      betsUnconfirmed
    )
  }
  const targetFightIndex =
    currentEventFights?.findIndex(fight => fight.FightId === expandedFight) ?? 0
  const currentFight =
    currentEvent &&
    currentEvent.Fights &&
    currentEvent.Fights[targetFightIndex] &&
    currentEvent.Fights[targetFightIndex]

  const [state, setState] = useInitialFighterBets(
    currentFight,
    betsUnconfirmed,
    expandedFight,
    DateTime
  )
  return (
    <ScrollYWrapper>
      <MobileHomeContainer>
        {open === OptionsHomeMenu.FIGHTS ? (
          <FightsColumnMobile
            state={state}
            winnerChange={winnerChangeHandler}
            EventName={EventName}
            currentEventFights={currentEventFights}
            setExpandedFight={setExpandedFight}
            expandedFight={expandedFight}
          />
        ) : null}
        {open === OptionsHomeMenu.BETS_TO_CONFIRM ? (
          <BetsColumnMobile state={state} winnerChange={winnerChangeHandler} />
        ) : null}
        {open === OptionsHomeMenu.BETS_TO_REGISTER ? (
          <>
            <BetRegistration />
          </>
        ) : null}
      </MobileHomeContainer>
    </ScrollYWrapper>
  )
}
export default FightsAndBetsMobile
