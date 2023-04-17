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
import { WinMethod } from '../../consts'

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

  const [state, setState] = useState([[], betsUnconfirmed])

  useEffect(() => {
    setState([
      [
        {
          id: v4(),
          FightId: currentFight?.FightId ?? 0,
          name: `${currentFight?.Fighters[0].FirstName} ${currentFight?.Fighters[0].LastName} WINS`,
          method: WinMethod.TBD,
          activated: false
        },
        {
          id: v4(),
          FightId: currentFight?.FightId ?? 0,
          name: `${currentFight?.Fighters[1].FirstName} ${currentFight?.Fighters[1].LastName} WINS`,
          method: WinMethod.TBD,
          activated: false
        },
        {
          id: v4(),
          name: 'KO/TKO',
          method: WinMethod.KO_TKO,
          FightId: currentFight?.FightId ?? 0,
          activated: false
        },
        {
          id: v4(),
          name: 'Decision',
          method: WinMethod.DECISION,
          FightId: currentFight?.FightId ?? 0,
          activated: false
        },
        {
          id: v4(),
          name: 'Submission',
          method: WinMethod.SUBMISSION,
          FightId: currentFight?.FightId ?? 0,
          activated: false
        },
        {
          id: v4(),
          name: 'Draw',
          method: WinMethod.DRAW,
          FightId: currentFight?.FightId ?? 0,
          activated: false
        },
        {
          id: v4(),
          name: 'Disqualified, No Contest',
          method: WinMethod.DQ,
          FightId: currentFight?.FightId ?? 0,
          activated: false
        }
      ],
      betsUnconfirmed
    ])
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

  const accordionIds = [0, 1, 2, 3]

  return (
    <DragColContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <MainColumn as={motion.div} layout>
          <h2>{EventName}</h2>
          {currentEventFights
            ? currentEventFights.map(({ FightId, Fighters }) => (
                <Accordion
                  key={FightId}
                  i={FightId}
                  headerContent={
                    Fighters && Fighters.length > 0
                      ? `${Fighters[0].FirstName} ${Fighters[0].LastName} vs ${Fighters[1].FirstName} ${Fighters[1].LastName}`
                      : 'Fighter 1 vs Fighter 2'
                  }
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
