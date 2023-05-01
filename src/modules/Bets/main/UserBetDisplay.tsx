import React, { useState } from 'react'
import { ButtonMedium } from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../../../consts'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { getUserBets } from '../../../reduxState/stateSlices/bets/betsSlice'
import Accordion from '../../../components/Accordion/Accordion'

interface UserBetDisplayProps {}

const UserBetDisplay: React.FC<UserBetDisplayProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const userBets = useAppSelector(state => state.bets.userBets)
  const [expandedBet, setExpandedBet] = useState<null | string | number>(null)

  const fetchBetsHandler = () => {
    dispatch(getUserBets(1))
  }

  return (
    <div>
      {userBets.map(bet => (
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
            {bet.dateTime} To win:{bet.amountBet} Expected: {bet.expectedPayout}
          </>
        </Accordion>
      ))}
      <ButtonMedium
        variant={ButtonVariants.INFO_EMPTY}
        onClick={fetchBetsHandler}
      >
        Get me my bets please
      </ButtonMedium>
    </div>
  )
}
export default UserBetDisplay
