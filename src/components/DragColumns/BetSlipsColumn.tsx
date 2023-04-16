import React from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd'
import { BetData, ConfirmedBet } from '../../interfaces'
import { DraggableDiv, DroppableList } from './DragColumns.styled'
import BetConfirmation from '../BetConfirmation/BetConfirmation'
import { useAppSelector } from '../../app/reduxHooks'

interface BetSlipsColumnProps {
  state: BetData[][]
}

const BetSlipsColumn: React.FC<BetSlipsColumnProps> = ({ state }) => {
  const betsConfirmed: ConfirmedBet[] = useAppSelector(
    state => state.bets.betsConfirmed
  )

  return (
    <>
      <h3>unconfirmed fight bets </h3>
      <Droppable key={'1'} droppableId={`1`}>
        {(provided, snapshot) => (
          <DroppableList
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
            listEmpty={state[1].length === 0 ? true : false}
          >
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
                      {' '}
                      <BetConfirmation
                        index={index}
                        betName={bet.name}
                        betId={bet.id}
                      />
                    </DraggableDiv>
                  )
                }}
              </Draggable>
            ))}
            {provided.placeholder}{' '}
          </DroppableList>
        )}
      </Droppable>
      {betsConfirmed.length > 0 && <h3>confirmed fight bets </h3>}
      {betsConfirmed.map((bet: ConfirmedBet) => (
        <div key={bet.id}>
          {bet.name} bet: {bet.amountBet} hoping for: {bet.expectedPayout}
        </div>
      ))}
    </>
  )
}
export default BetSlipsColumn
