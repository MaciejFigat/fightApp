import React from 'react'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import { BetData } from '../../interfaces'
import { DraggableDiv, DroppableList } from './DragColumns.styled'
import BetHeader from '../BetConfirmation/BetHeader'

interface EventColumnProps {
  state: BetData[][]
}

const EventColumn: React.FC<EventColumnProps> = ({ state }) => {
  return (
    <div>
      {' '}
      <Droppable key={'0'} droppableId={`0`}>
        {(provided, snapshot) => (
          <DroppableList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {Array.isArray(state[0]) &&
              state[0].map((bet: BetData, index: number) => (
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
                        <BetHeader
                          key={bet.id}
                          betMoneyline={bet.moneyline}
                          betName={bet.name}
                        />
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
