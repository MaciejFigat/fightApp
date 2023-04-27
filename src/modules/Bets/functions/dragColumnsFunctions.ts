import { DraggableLocation } from '@hello-pangea/dnd'
import { BetData } from '../../../interfaces'
import { AppDispatch } from '../../../reduxState/store'
import {
  addUnconfirmedBet,
  removeUnconfirmedBet
} from '../../../reduxState/stateSlices/bets/betsSlice'

type ListType<T> = T[] | readonly T[]

const reorder = <T>(
  list: ListType<T>,
  startIndex: number,
  endIndex: number
): T[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  return result
}

type ResultType = {
  [key: string]: BetData[]
}

const move = (
  source: BetData[],
  destination: BetData[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)

  // shorthand:
  // const [removed] = sourceClone.splice(droppableSource.index, 1)
  const removed = sourceClone[droppableSource.index]
  sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result: ResultType = {}

  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

export const handleReorder = (
  sourceIndex: number,
  sourceItemIndex: number,
  destinationItemIndex: number,
  state: BetData[][],
  setState: React.Dispatch<React.SetStateAction<BetData[][]>>
) => {
  const newState: BetData[][] = [...state]
  const items: BetData[] = reorder(
    state[sourceIndex],
    sourceItemIndex,
    destinationItemIndex
  )
  newState[sourceIndex] = items
  setState(newState)
}

export const handleBetDroppedOutside = (
  source: DraggableLocation,
  state: BetData[][],
  setState: React.Dispatch<React.SetStateAction<BetData[][]>>,
  dispatch: AppDispatch
) => {
  const sourceIndex = +source.droppableId
  const newState: BetData[][] = [...state]

  if (sourceIndex === 1) {
    const droppedBet = state[sourceIndex][source.index]
    const { id: idBetToRemove } = droppedBet

    dispatch(removeUnconfirmedBet(idBetToRemove))
    newState[sourceIndex] = newState[sourceIndex].filter(
      bet => bet.id !== droppedBet.id
    )

    const activatedBet = { ...droppedBet, activated: false }
    if (activatedBet.FightId === newState[0][0].FightId) {
      newState[0] = [...newState[0], activatedBet]
    }
  }

  setState(newState)
}

export const handleMove = (
  sourceIndex: number,
  destinationItemIndex: number,
  destinationIndex: number,
  source: DraggableLocation,
  destination: DraggableLocation,
  state: BetData[][],
  setState: React.Dispatch<React.SetStateAction<BetData[][]>>,
  dispatch: AppDispatch
) => {
  const newState: BetData[][] = [...state]
  const result = move(
    state[sourceIndex],
    state[destinationIndex],
    source,
    destination
  )

  if (sourceIndex === 0 && destinationIndex === 1) {
    const droppedBet = state[sourceIndex][source.index]
    const activatedBet = { ...droppedBet, activated: true }
    // dispatch(addUnconfirmedBet({activatedBet, sourceItemIndex}))
    dispatch(
      addUnconfirmedBet({
        itemIndex: destinationItemIndex,
        betData: activatedBet
      })
    )
  }

  if (sourceIndex === 1 && destinationIndex === 0) {
    const droppedBet = state[sourceIndex][source.index]
    const { id: idBetToRemove } = droppedBet
    dispatch(removeUnconfirmedBet(idBetToRemove))
  }

  newState[sourceIndex] = result[sourceIndex]
  newState[destinationIndex] = result[destinationIndex]
  setState(newState)
}
