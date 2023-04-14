import React from 'react'

import { Draggable, Droppable } from '@hello-pangea/dnd'
import { BetData } from '../../interfaces'

interface EventColumnProps {
  state: BetData[][]
}

const EventColumn: React.FC<EventColumnProps> = ({ state }) => {
  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    userSelect: 'none',
    borderRadius: '20px',

    background: isDragging
      ? 'var(--background-blur1)'
      : 'var(--background1-main)',

    color: isDragging
      ? 'var(--background-secondary1)'
      : 'var(--background4-main)',
    ...draggableStyle
  })

  const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver
      ? 'var(--background-blur1)'
      : 'var(--background1-main)',
    borderRadius: '20px'
  })
  return (
    <div>
      {' '}
      <h3>Fights available</h3>
      <Droppable key={'0'} droppableId={`0`}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
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
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          style={getItemStyle(
                            snapshot.isDragging,
                            provided.draggableProps.style
                          )}
                        >
                          <div key={bet.id}>{bet.name}</div>
                        </div>
                      )
                    }}
                  </Draggable>
                ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>{' '}
    </div>
  )
}
export default EventColumn
