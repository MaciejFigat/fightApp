import React, { useState } from 'react'
import { DragColContainer, MainColumn, SideColumn } from './DragColumns.styled'
import EventColumn from './EventColumn'
import BetSlipsColumn from './BetSlipsColumn'

import { DragDropContext, DraggableLocation } from '@hello-pangea/dnd'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'
import {
  addUnconfirmedBet,
  removeUnconfirmedBet
} from '../../features/bets/betsSlice'
import { BetData } from '../../interfaces'

interface DragColumnsProps {}

//* reordering the items within a list

const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

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
    const [removed] = sourceClone.splice(droppableSource.index, 1)
    // const removed = sourceClone[droppableSource.index]
    // sourceClone.splice(droppableSource.index, 1)

    // change the activated property of the bet if I move it to betsUnconfirmed column
    // also when I remove them from betsUnconfirmed column => set activated to false in the available bets for the fight
    //* droppable source 0 I dont remove it but I set activated to true
    // if (droppableSource.index === 0 && droppableDestination.index === 1) {
    //   const betActivated = { ...removed, activated: true }
    //   destClone.splice(droppableDestination.index, 0, betActivated)
    //   sourceClone.splice(droppableDestination.index, 0, betActivated)

    //   // *
    // } else if (droppableSource.index === 1) {
    //   destClone.splice(droppableDestination.index, 0, removed)
    //   const removedFightId = removed.FightId
    //   destClone.forEach(bet => {
    //     if (bet.FightId === removedFightId) {
    //       bet.activated = false
    //     }
    //   })
    // }

    destClone.splice(droppableDestination.index, 0, removed)

    type ResultType = {
      [key: string]: BetData[]
    }
    const result: ResultType = {}

    result[droppableSource.droppableId] = sourceClone
    result[droppableDestination.droppableId] = destClone

    return result
  }
  const [state, setState] = useState([
    [
      { id: 2312, name: 'Bet 1212', FightId: 12387621, activated: false },
      { id: 32332, name: 'BETTT SDSD', FightId: 123422421, activated: false },
      { id: 31231, name: 'I love vetting', FightId: 133141, activated: false },
      { id: 3231, name: 'fafbet', FightId: 42323123141, activated: false },
      { id: 123124, name: 'betrbete', FightId: 32312314141, activated: false }
    ],
    betsUnconfirmed
  ])

  function onDragEnd (result: any) {
    const { source, destination } = result

    const newState: BetData[][] = [...state]
    // dropped bet
    const droppedBet: BetData = state[source.droppableId][source.index]
    const { id: idBetToRemove } = droppedBet

    // if dropped outside the list remove the bet from unconfirmed bets
    const sourceIndex = +source.droppableId
    if (!destination) {
      if (sourceIndex === 1) dispatch(removeUnconfirmedBet(idBetToRemove))
      console.log('no destination')
      return
    }
    const destinationIndex = +destination.droppableId

    newState[sourceIndex] = result[sourceIndex]
    newState[destinationIndex] = result[destinationIndex]

    // * reordering within the same array
    if (sourceIndex === destinationIndex) {
      const items: BetData[] = reorder(
        state[sourceIndex],
        source.index,
        destination.index
      )
      // const newState: BetData[][] = [...state]
      newState[sourceIndex] = items
      setState(newState)
    } else {
      const result = move(
        state[sourceIndex],
        state[destinationIndex],
        source,
        destination
      )

      if (sourceIndex === 0 && destinationIndex === 1) {
        // I add bet to unconfirmed bets
        const activatedBet = { ...droppedBet, activated: true }
        dispatch(addUnconfirmedBet(activatedBet))
      }

      if (sourceIndex === 1 && destinationIndex === 0) {
        //todo logic that activates ie. activated: true

        // remove unconfirmed bet if moved to event column
        dispatch(removeUnconfirmedBet(idBetToRemove))
        // const deactivatedBet = { ...droppedBet, activated: false }
      }

      // from 0 to 1 I only want to change activated property of the bet
      // if (sourceIndex === 0 && destinationIndex === 1) {
      //   newState[destinationIndex] = result[destinationIndex]

      //   setState(newState)
      //   return
      // }

      //todo targetting the list of this index
      newState[sourceIndex] = result[sourceIndex]
      newState[destinationIndex] = result[destinationIndex]

      //* this will not remove empty one
      setState(newState)

      console.log(state[0])
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
