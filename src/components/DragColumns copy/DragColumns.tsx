import React, { useState } from 'react'
import { DragColContainer, MainColumn, SideColumn } from './DragColumns.styled'
import EventColumn from './EventColumn'
import BetSlipsColumn from './BetSlipsColumn'
import { DragDropContext } from 'react-beautiful-dnd'
interface DragColumnsProps {}

//* reordering the items within a list

const reorder = (list: any[], startIndex: number, endIndex: number): any[] => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}
/**
 * //* Moves an item from one list to another list.
 */
const move = (
  source: any,
  destination: any,
  droppableSource: any,
  droppableDestination: any
) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)

  //* removed array that is a sourceClone without droppableSource.index
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  //* adding removed array
  destClone.splice(droppableDestination.index, 0, removed)

  const result: any = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone
  //* so I'll have result
  //* {droppableSource.droppableId: sourceClone, droppableDestination.droppableId: destClone}

  return result
}

const DragColumns: React.FC<DragColumnsProps> = () => {
  const [state, setState] = useState([
    [
      { id: '1', content: 'First task' },
      { id: '2', content: 'Second task' },
      { id: '22', content: 'Second task 2' },
      { id: '23', content: 'Second task 3' },
      { id: '24', content: 'Second task 5' }
    ],
    [
      { id: '3', content: 'Third task' },
      { id: '4', content: 'Fourth task' },
      { id: '5', content: 'Fifth task' }
    ]
  ])

  function onDragEnd (result: any) {
    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }
    // * The unary plus operator (+) precedes its operand and evaluates to its operand but attempts to convert it into a number, if it isn't already.
    const sourceIndex = +source.droppableId
    const destinationIndex = +destination.droppableId
    // * reordering within the same array
    //* this is how I access the fragment I just dropped
    // const droppedFragment: any = state[source.droppableId][source.index]
    // const droppableId = destination.droppableId
    // const { _id, keywordValue: keywordValueDropped } = droppedFragment

    if (sourceIndex === destinationIndex) {
      const items: any[] = reorder(
        state[sourceIndex],
        source.index,
        destination.index
      )
      const newState: any[][] = [...state]
      newState[sourceIndex] = items
      setState(newState)
    } else {
      //* HERE Begins section of adding keyword to fragment dragged

      const result = move(
        state[sourceIndex],
        state[destinationIndex],
        source,
        destination
      )

      const newState = [...state]
      //todo targetting the list of this index
      newState[sourceIndex] = result[sourceIndex]
      newState[destinationIndex] = result[destinationIndex]

      //* this will not remove empty one
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
