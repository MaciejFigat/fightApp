import React, { useState } from 'react'
import { ButtonMedium } from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../../../consts'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { getAllBets } from '../../../reduxState/stateSlices/bets/betsSlice'
import Accordion from '../../../components/Accordion/Accordion'
import { motion } from 'framer-motion'

interface AllBetsDisplayProps {}

const AllBetsDisplay: React.FC<AllBetsDisplayProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const allBets = useAppSelector(state => state.bets.allBets)

  const [expandedBet, setExpandedBet] = useState<null | string | number>(null)

  const fetchBetsHandler = () => {
    console.log('fetching bets')
    dispatch(getAllBets(1))
  }

  return (
    <motion.div layout>
      {allBets.map(bet => (
        <Accordion
          key={bet.id}
          i={bet.id}
          headerContent={
            <>
              {bet.name} {bet.fightName}
            </>
          }
          expanded={expandedBet}
          setExpanded={setExpandedBet}
        >
          <>
            {' '}
            {bet.dateTime} To win:{bet.amountBet} Expected: {bet.expectedPayout}{' '}
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
