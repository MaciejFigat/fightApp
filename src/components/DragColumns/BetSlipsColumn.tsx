import React from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd'
import { BetData } from '../../interfaces'
import { DraggableDiv, DroppableList } from './DragColumns.styled'
// import { useAppSelector } from '../../app/reduxHooks'

interface BetSlipsColumnProps {
  state: BetData[][]
}

const BetSlipsColumn: React.FC<BetSlipsColumnProps> = ({ state }) => {
  // const betsUnconfirmed: BetData[] = useAppSelector(
  //   state => state.bets.betsUnconfirmed
  // )

  return (
    <div>
      <h3>unconfirmed fight bets </h3>
      <Droppable key={'1'} droppableId={`1`}>
        {(provided, snapshot) => (
          <DroppableList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {/* {betsUnconfirmed.map((event: any, index: number) => ( */}
            {state[1].map((bet: BetData, index: number) => (
              <Draggable
                key={bet.id}
                // expects a string
                draggableId={bet.id.toString()}
                index={index}
              >
                {(provided, snapshot) => {
                  return (
                    <DraggableDiv
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      isDragging={snapshot.isDragging}
                    >
                      <div key={bet.id}>{bet.name}</div>
                    </DraggableDiv>
                  )
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </DroppableList>
        )}
      </Droppable>
    </div>
  )
}
export default BetSlipsColumn
