import React from 'react'
import { Droppable, Draggable } from '@hello-pangea/dnd'
import { BetData } from '../../../interfaces'
import {
  BetListHeader,
  DraggableDiv,
  DroppableList
} from './DragColumns.styled'
import BetConfirmation from '../components/BetConfirmation'
import { useAppSelector } from '../../../reduxState/reduxHooks'
import { TextColor, WinnerProjection } from '../../../consts'
import {
  HighlightText,
  HorizontalWrapper,
  RoundAccent
} from '../../../styles/misc.styles'
import BetRegistration from '../components/BetRegistration'
import UserBetDisplay from './UserBetDisplay'

interface BetsColumnProps {
  state: BetData[][]
  winnerChange: (id: string, winnerProjection: WinnerProjection) => void
}

const BetsColumn: React.FC<BetsColumnProps> = ({ state, winnerChange }) => {
  const betsUnconfirmed: BetData[] = useAppSelector(
    state => state.bets.betsUnconfirmed
  )

  return (
    <>
      <BetListHeader>
        <HorizontalWrapper>
          <RoundAccent>{betsUnconfirmed.length} </RoundAccent>
          <HighlightText color={TextColor.PRIMARY}>
            bets to confirm
          </HighlightText>
        </HorizontalWrapper>
      </BetListHeader>
      <Droppable droppableId={`1`}>
        {(provided, snapshot) => (
          <DroppableList
            isDraggingOver={snapshot.isDraggingOver}
            listEmpty={state[1].length === 0 ? true : false}
            ref={provided.innerRef}
          >
            {state[1].map((bet: BetData, index: number) => (
              <Draggable
                // expects a string
                draggableId={bet.id.toString()}
                key={bet.id}
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
                      {' '}
                      <BetConfirmation
                        winnerChange={winnerChange}
                        index={index}
                        betData={bet}
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
      <BetRegistration />
      {/* //todo just to check */}
      <UserBetDisplay />
    </>
  )
}
export default BetsColumn
