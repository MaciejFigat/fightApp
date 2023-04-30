import { WinnerProjection } from '../../../consts'
import { BetData } from '../../../interfaces'
import { editUnconfirmedBet } from '../../../reduxState/stateSlices/bets/betsSlice'
import { AppDispatch } from '../../../reduxState/store'

export const winnerChange = (
  id: string,
  winnerProjection: WinnerProjection,
  state: BetData[][],
  setState: React.Dispatch<React.SetStateAction<BetData[][]>>,
  dispatch: AppDispatch,
  betsUnconfirmed: BetData[]
) => {
  const betInArrayOne = state[0].find(bet => bet.id === id)

  const betInArrayTwo = state[1].find(bet => bet.id === id)

  const indexUnconfirmedBet = betsUnconfirmed.findIndex(bet => bet.id === id)

  if (betInArrayOne) {
    const updatedState = state[0].map(bet =>
      bet.id === id ? { ...bet, projectedWinner: winnerProjection } : bet
    )

    setState([updatedState, state[1]])
  }
  if (betInArrayTwo) {
    const updatedState = state[1].map(bet =>
      bet.id === id ? { ...bet, projectedWinner: winnerProjection } : bet
    )
    setState([state[0], updatedState])

    const betUnconfirmedChanged = {
      itemIndex: indexUnconfirmedBet,
      betData: { ...betInArrayTwo, projectedWinner: winnerProjection }
    }

    dispatch(editUnconfirmedBet(betUnconfirmedChanged))
  }
}
