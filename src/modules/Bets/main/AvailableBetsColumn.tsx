import React from 'react'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import { BetData } from '../../../interfaces'
import { DraggableDiv, DroppableList } from './DragColumns.styled'
import BetHeader from '../components/BetHeader'
import { WinMethod, WinnerProjection } from '../../../consts'
import { DraggingIcon, HorizontalWrapper } from '../../../styles/misc.styles'

interface AvailableBetsColumnProps {
  state: BetData[][]
  winnerChange: (id: string, winnerProjection: WinnerProjection) => void
}

const AvailableBetsColumn: React.FC<AvailableBetsColumnProps> = ({
  state,
  winnerChange
}) => {
  return (
    <HorizontalWrapper>
      <Droppable droppableId={`0`}>
        {(provided, snapshot) => (
          <DroppableList
            isDraggingOver={snapshot.isDraggingOver}
            ref={provided.innerRef}
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
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        isDragging={snapshot.isDragging}
                        ref={provided.innerRef}
                      >
                        <>
                          <DraggingIcon />
                          <BetHeader
                            key={bet.id}
                            betId={bet.id}
                            Fighters={bet.Fighters}
                            betMoneyline={bet.moneyline}
                            betName={bet.name}
                            winnerChange={winnerChange}
                            noBadgesInHeader={
                              bet.method === WinMethod.DRAW ? true : false
                            }
                          />
                        </>
                      </DraggableDiv>
                    )
                  }}
                </Draggable>
              ))}
            {provided.placeholder}
          </DroppableList>
        )}
      </Droppable>{' '}
    </HorizontalWrapper>
  )
}
export default AvailableBetsColumn
