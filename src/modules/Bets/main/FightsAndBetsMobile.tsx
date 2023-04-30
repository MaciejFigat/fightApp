import React, { useState } from 'react'
import {
  FooterMobileSecondary,
  MobileHomeContainer
} from '../../../layout/HomePageLayout.styled'
import { ButtonSmall } from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants, WinnerProjection } from '../../../consts'
import { winnerChange } from '../functions/winnerChange'
import { BetData, EventAllData } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { useInitialFighterBets } from './useInitialBets'
import { AppDispatch } from '../../../reduxState/store'
import FightsColumnMobile from './FightsColumnMobile'
import BetsColumnMobile from './BetsColumnMobile'
import BetRegistration from '../components/BetRegistration'

interface FightsAndBetsMobileProps {}
enum OptionsMenu {
  FIGHTS,
  BETS_TO_CONFIRM,
  BETS_TO_REGISTER
}

const FightsAndBetsMobile: React.FC<FightsAndBetsMobileProps> = () => {
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
  const [open, setOpen] = useState<OptionsMenu>(OptionsMenu.FIGHTS)

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
    <>
      <MobileHomeContainer>
        {open === OptionsMenu.FIGHTS && (
          <FightsColumnMobile
            state={state}
            winnerChange={winnerChangeHandler}
            EventName={EventName}
            currentEventFights={currentEventFights}
            setExpandedFight={setExpandedFight}
            expandedFight={expandedFight}
          />
        )}
        {open === OptionsMenu.BETS_TO_CONFIRM && (
          <BetsColumnMobile state={state} winnerChange={winnerChangeHandler} />
        )}
        {open === OptionsMenu.BETS_TO_REGISTER && (
          <>
            <BetRegistration />
          </>
        )}
      </MobileHomeContainer>
      <FooterMobileSecondary>
        <ButtonSmall
          variant={ButtonVariants.INFO}
          onClick={() => setOpen(OptionsMenu.FIGHTS)}
        >
          fights
        </ButtonSmall>{' '}
        <ButtonSmall
          variant={ButtonVariants.INFO}
          onClick={() => setOpen(OptionsMenu.BETS_TO_CONFIRM)}
        >
          Bets to confirm{' '}
        </ButtonSmall>{' '}
        <ButtonSmall
          variant={ButtonVariants.INFO}
          onClick={() => setOpen(OptionsMenu.BETS_TO_REGISTER)}
        >
          Bets to register{' '}
        </ButtonSmall>
      </FooterMobileSecondary>
    </>
  )
}
export default FightsAndBetsMobile
