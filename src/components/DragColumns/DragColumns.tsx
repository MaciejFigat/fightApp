import React, { useState } from 'react'
import { DragColContainer, MainColumn, SideColumn } from './DragColumns.styled'
import EventColumn from './EventColumn'
import BetSlipsColumn from './BetSlipsColumn'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'

import {
  handleReorder,
  handleBetDroppedOutside,
  handleMove
} from './dragColumnsFunctions'

import { BetData } from '../../interfaces'
import Accordion from '../Accordion/Accordion'
import { motion } from 'framer-motion'
import { EventAllData } from '../../interfaces'

interface DragColumnsProps {}

const DragColumns: React.FC<DragColumnsProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const betsUnconfirmed: BetData[] = useAppSelector(
    state => state.bets.betsUnconfirmed
  )
  const currentEvent: EventAllData | null = useAppSelector(
    state => state.events.currentEvent
  )
  const { Name: EventName, Fights: CurrentEventFights } = currentEvent ?? {}

  const [state, setState] = useState([
    [
      { id: 2312, name: 'Bet 1212', FightId: 12387621, activated: false },
      { id: 32332, name: 'BETTT SDSD', FightId: 12387621, activated: false },
      {
        id: 31231,
        name: 'I love vetting',
        FightId: 12387621,
        activated: false
      },
      { id: 3231, name: 'fafbet', FightId: 12387621, activated: false },
      { id: 123124, name: 'betrbete', FightId: 12387621, activated: false }
    ],
    betsUnconfirmed
  ])

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result

    if (!destination) {
      handleBetDroppedOutside(source, state, setState, dispatch)
      return
    }

    const sourceIndex = +source.droppableId
    const destinationIndex = +destination.droppableId

    if (sourceIndex === destinationIndex) {
      handleReorder(
        sourceIndex,
        source.index,
        destination.index,
        state,
        setState
      )
    } else {
      handleMove(
        sourceIndex,
        destinationIndex,
        source,
        destination,
        state,
        setState,
        dispatch
      )
    }
  }
  const [expanded, setExpanded] = useState<false | number>(0)
  const accordionIds = [0, 1, 2, 3]

  return (
    <DragColContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <MainColumn as={motion.div} layout>
          {CurrentEventFights
            ? CurrentEventFights.map(fight => (
                <Accordion
                  key={fight.FightId}
                  i={fight.FightId}
                  fighters={fight.Fighters}
                  expanded={expanded}
                  setExpanded={setExpanded}
                >
                  <EventColumn state={state} />
                </Accordion>
              ))
            : accordionIds.map(i => (
                <Accordion
                  key={i}
                  i={i}
                  expanded={expanded}
                  setExpanded={setExpanded}
                >
                  <EventColumn state={state} />
                </Accordion>
              ))}
        </MainColumn>
        <SideColumn>
          <BetSlipsColumn state={state} />
        </SideColumn>
      </DragDropContext>
    </DragColContainer>
  )
}
export default DragColumns
