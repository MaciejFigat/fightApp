import React from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd'
import { BetData } from '../../interfaces'
import { useAppSelector } from '../../app/reduxHooks'

interface BetSlipsColumnProps {
  state: BetData[][]
}

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

const BetSlipsColumn: React.FC<BetSlipsColumnProps> = ({ state }) => {
  const betsUnconfirmed: BetData[] = useAppSelector(
    state => state.bets.betsUnconfirmed
  )

  return (
    <div>
      <h3>unconfirmed fight bets </h3>
      <Droppable key={'1'} droppableId={`1`}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
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
      </Droppable>
    </div>
  )
}
export default BetSlipsColumn
