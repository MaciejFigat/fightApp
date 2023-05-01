import React from 'react'
import { ButtonMedium } from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../../../consts'
import { useAppDispatch } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { getUserBets } from '../../../reduxState/stateSlices/bets/betsSlice'

interface UserBetDisplayProps {}

const UserBetDisplay: React.FC<UserBetDisplayProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const fetchBetsHandler = () => {
    console.log('fetching bets')
    dispatch(getUserBets(1))
  }
  return (
    <div>
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
