import React from 'react'

import { Draggable, Droppable } from '@hello-pangea/dnd'
import { BetData } from '../../interfaces'
import { DraggableDiv, DroppableList } from './DragColumns.styled'

interface EventColumnProps {
  state: BetData[][]
}

const EventColumn: React.FC<EventColumnProps> = ({ state }) => {
  return (
    <div>
      {' '}
      <h3>BETS available</h3>
      <Droppable key={'0'} droppableId={`0`}>
        {(provided, snapshot) => (
          <DroppableList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {Array.isArray(state[0]) &&
              state[0]
                .filter((bet: BetData) => bet.activated === false)
                .map((bet: any, index: number) => (
                  // draggableId expects a string
                  <Draggable
                    key={bet.id}
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
      </Droppable>{' '}
    </div>
  )
}
export default EventColumn
