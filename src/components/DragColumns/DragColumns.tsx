import React, { useEffect, useState } from 'react'
import { DragColContainer, MainColumn, SideColumn } from './DragColumns.styled'
import EventColumn from './EventColumn'
import BetSlipsColumn from './BetSlipsColumn'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'
import { v4 } from 'uuid'

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
  const { Name: EventName, Fights: currentEventFights } = currentEvent ?? {}
  // state for accordion component, will have value of FightId if expanded
  const [expandedFight, setExpandedFight] = useState<null | number>(null)

  const targetFightIndex =
    currentEventFights?.findIndex(fight => fight.FightId === expandedFight) ?? 0
  const currentFight =
    currentEvent &&
    currentEvent.Fights &&
    currentEvent.Fights[targetFightIndex] &&
    currentEvent.Fights[targetFightIndex]

  const [state, setState] = useState([
    [
      // { id: v4(), name: 'Bet 1212', FightId: 12387621, activated: false },
      {
        id: 12315555,
        name: `Fight id is ${currentFight?.FightId}`,
        FightId: currentFight?.FightId ?? 0,
        activated: false
      },
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

  useEffect(() => {
    setState([
      [
        {
          id: 12315555,
          name: `Fight id is ${currentFight?.FightId}`,
          FightId: 12387621,
          activated: false
        },
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
    // console.log(currentFight)
    // console.log(expandedFight)
  }, [currentFight, betsUnconfirmed, expandedFight])

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

  // const [openedFightId, setOpenedFightId] = useState<number | undefined>(
  //   undefined
  // )
  const accordionIds = [0, 1, 2, 3]

  return (
    <DragColContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <MainColumn as={motion.div} layout>
          <h2>{EventName}</h2>
          {currentEventFights
            ? currentEventFights.map(fight => (
                <Accordion
                  key={fight.FightId}
                  i={fight.FightId}
                  fighters={fight.Fighters}
                  expanded={expandedFight}
                  setExpanded={setExpandedFight}
                >
                  <EventColumn state={state} />
                </Accordion>
              ))
            : accordionIds.map(i => (
                <Accordion
                  key={i}
                  i={i}
                  expanded={expandedFight}
                  setExpanded={setExpandedFight}
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
