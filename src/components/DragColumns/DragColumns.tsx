import React, { useState } from 'react'
import { DragColContainer, MainColumn, SideColumn } from './DragColumns.styled'
import EventColumn from './EventColumn'
import BetSlipsColumn from './BetSlipsColumn'
import {
  DragDropContext,
  DraggableLocation,
  DropResult
} from '@hello-pangea/dnd'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'
import {
  addUnconfirmedBet,
  removeUnconfirmedBet
} from '../../features/bets/betsSlice'
import { BetData } from '../../interfaces'

interface DragColumnsProps {}

type ResultType = {
  [key: string]: BetData[]
}
type ListType<T> = T[] | readonly T[]

//- need trailing comma in the generic type in .tsx file
//prettier-ignore
const reorder = <T, >(
  list: ListType<T>,
  startIndex: number,
  endIndex: number
): T[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)
  console.log('reorder')
  return result
}

const DragColumns: React.FC<DragColumnsProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const betsUnconfirmed: BetData[] = useAppSelector(
    state => state.bets.betsUnconfirmed
  )

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
  const [state, setState] = useState([
    [
      { id: 2312, name: 'Bet 1212', FightId: 12387621, activated: false },
      { id: 32332, name: 'BETTT SDSD', FightId: 12387621, activated: false },
      {
        id: 31231,
        name: 'I love vetting',
        FightId: 12387621,
        activated: false
      },
      { id: 3231, name: 'fafbet', FightId: 12387621, activated: false },
      { id: 123124, name: 'betrbete', FightId: 12387621, activated: false }
    ],
    betsUnconfirmed
  ])

  function onDragEnd (result: DropResult) {
    const { source, destination } = result

    const newState: BetData[][] = [...state]
    const sourceIndex: number = +source.droppableId

    // dropped bet
    const droppedBet: BetData = state[sourceIndex][source.index]
    const { id: idBetToRemove } = droppedBet

    // dropped outside the list

    if (!destination) {
      if (sourceIndex === 1) {
        dispatch(removeUnconfirmedBet(idBetToRemove))
        // console.log('no destination', sourceIndex)
        // remove from the state if dropped outside the list
        newState[sourceIndex] = newState[sourceIndex].filter(
          bet => bet.id !== droppedBet.id
        )
        //add it back to available bets
        const activatedBet = { ...droppedBet, activated: false }
        if (activatedBet.FightId === newState[0][0].FightId) {
          newState[0] = [...newState[0], activatedBet]
          console.log('Testing this with fightID match', activatedBet)
        }
        // newState[0] = [...newState[0], droppedBet]
        setState(newState)
        console.log('general example', droppedBet, newState)
      }
      return
    }
    const destinationIndex: number = +destination.droppableId

    if (sourceIndex === destinationIndex) {
      const items: BetData[] = reorder(
        state[sourceIndex],
        source.index,
        destination.index
      )

      newState[+sourceIndex] = items
      setState(newState)
    } else {
      const result = move(
        state[sourceIndex],
        state[destinationIndex],
        source,
        destination
      )

      if (sourceIndex === 0 && destinationIndex === 1) {
        const activatedBet = { ...droppedBet, activated: true }
        dispatch(addUnconfirmedBet(activatedBet))
        // console.log('added', activatedBet)
      }

      if (sourceIndex === 1 && destinationIndex === 0) {
        dispatch(removeUnconfirmedBet(idBetToRemove))
        // console.log('removed', idBetToRemove)
      }

      newState[sourceIndex] = result[sourceIndex]
      newState[destinationIndex] = result[destinationIndex]

      setState(newState)
    }
  }

  return (
    <DragColContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <MainColumn>
          <EventColumn state={state} />
        </MainColumn>
        <SideColumn>
          <BetSlipsColumn state={state} />
        </SideColumn>
      </DragDropContext>
    </DragColContainer>
  )
}
export default DragColumns
