import React, { useState } from 'react'
import { ButtonMedium } from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../../../consts'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { getAllBets } from '../../../reduxState/stateSlices/bets/betsSlice'
import Accordion from '../../../components/Accordion/Accordion'
import { motion } from 'framer-motion'
import { FightListHeader, MainListHeader } from './DragColumns.styled'
import { HorizontalWrapperSpaceBetween } from '../../../styles/misc.styles'
import AccordionArrow from '../../../components/Accordion/AccordionArrow'

interface AllBetsDisplayProps {}

const AllBetsDisplay: React.FC<AllBetsDisplayProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const allBets = useAppSelector(state => state.bets.allBets)

  const [expandedBet, setExpandedBet] = useState<null | string | number>(null)

  const fetchBetsHandler = () => {
    dispatch(getAllBets(1))
  }

  return (
    <motion.div layout>
      <MainListHeader>All bets</MainListHeader>
      {allBets.map(bet => (
        <Accordion
          key={bet.id}
          i={bet.id}
          headerContent={
            <>
              <FightListHeader>
                <HorizontalWrapperSpaceBetween>
                  {' '}
                  {bet.name} {bet.fightName}{' '}
                  <AccordionArrow
                    animateOn={expandedBet === bet.id ? true : false}
                  />
                </HorizontalWrapperSpaceBetween>
              </FightListHeader>
            </>
          }
          expanded={expandedBet}
          setExpanded={setExpandedBet}
        >
          <>
            {' '}
            {bet.dateTime} To win:{bet.amountBet} Expected: {bet.expectedPayout}
          </>
        </Accordion>
      ))}
      <ButtonMedium
        variant={ButtonVariants.INFO_EMPTY}
        onClick={fetchBetsHandler}
      >
        Get me all the bets please
      </ButtonMedium>
    </motion.div>
  )
}
export default AllBetsDisplay
