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
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
          >
            {Array.isArray(state[0]) &&
              state[0].map((bet: BetData, index: number) => (
                // draggableId expects a string
                <div key={bet.id}>
                  <Draggable draggableId={bet.id.toString()} index={index}>
                    {(provided, snapshot) => {
                      return (
                        <DraggableDiv
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          isDragging={snapshot.isDragging}
                          ref={provided.innerRef}
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
                </div>
              ))}
            {provided.placeholder}
          </DroppableList>
        )}
      </Droppable>{' '}
    </div>
  )
}
export default EventColumn
