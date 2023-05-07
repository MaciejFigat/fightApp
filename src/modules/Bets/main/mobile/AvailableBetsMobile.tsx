import React from 'react'
import { BetData } from '../../../../interfaces'
import { DraggableDiv, DroppableList } from '../DragColumns.styled'
import BetHeader from '../../components/BetHeader'
import { ButtonVariants, WinMethod, WinnerProjection } from '../../../../consts'
import { ButtonVerySmall } from '../../../../components/Buttons/Buttons.styled'
import { addUnconfirmedBetNoIndex } from '../../../../reduxState/stateSlices/bets/betsSlice'
import { AppDispatch } from '../../../../reduxState/store'
import { useAppDispatch } from '../../../../reduxState/reduxHooks'

interface AvailableBetsMobileProps {
  state: BetData[][]
  winnerChange: (id: string, winnerProjection: WinnerProjection) => void
}

const AvailableBetsMobile: React.FC<AvailableBetsMobileProps> = ({
  state,
  winnerChange
}) => {
  const dispatch: AppDispatch = useAppDispatch()

  const addBetHandler = (bet: BetData) => {
    dispatch(addUnconfirmedBetNoIndex(bet))
  }
  return (
    <DroppableList>
      {Array.isArray(state[0]) &&
        state[0].map((bet: BetData) => (
          <DraggableDiv key={bet.id}>
            <BetHeader
              key={bet.id}
              betId={bet.id}
              Fighters={bet.Fighters}
              betMoneyline={bet.moneyline}
              betName={bet.name}
              winnerChange={winnerChange}
              noBadgesInHeader={bet.method === WinMethod.DRAW ? true : false}
            />
            <ButtonVerySmall
              variant={ButtonVariants.INFO_EMPTY}
              onClick={() => addBetHandler(bet)}
            >
              Add
            </ButtonVerySmall>
          </DraggableDiv>
        ))}
    </DroppableList>
  )
}
export default AvailableBetsMobile
