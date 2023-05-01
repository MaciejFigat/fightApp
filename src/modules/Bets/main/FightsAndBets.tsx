import React, { useState } from 'react'
import { DragColContainer, MainColumn, SideColumn } from './DragColumns.styled'
import { DragDropContext, DropResult } from '@hello-pangea/dnd'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import {
  handleReorder,
  handleBetDroppedOutside,
  handleMove
} from '../functions/dragColumnsFunctions'
import { BetData } from '../../../interfaces'
import { motion } from 'framer-motion'
import { EventAllData } from '../../../interfaces'
import { WinnerProjection } from '../../../consts'
import BetsColumn from './BetsColumn'
import FightsColumn from './FightsColumn'
import { useInitialFighterBets } from '../functions/useInitialBets'
import { winnerChange } from '../functions/winnerChange'

interface FightsAndBetsProps {}

const FightsAndBets: React.FC<FightsAndBetsProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const betsUnconfirmed: BetData[] = useAppSelector(
    state => state.bets.betsUnconfirmed
  )
  const currentEvent: EventAllData | null = useAppSelector(
    state => state.events.currentEvent
  )
  const {
    Name: EventName,
    Fights: currentEventFights,
    DateTime,
    EventId
  } = currentEvent ?? {}
  // state for accordion component, will have value of FightId if expanded
  const [expandedFight, setExpandedFight] = useState<null | number | string>(
    null
  )

  const targetFightIndex =
    currentEventFights?.findIndex(fight => fight.FightId === expandedFight) ?? 0
  const currentFight =
    currentEvent &&
    currentEvent.Fights &&
    currentEvent.Fights[targetFightIndex] &&
    currentEvent.Fights[targetFightIndex]

  const [state, setState] = useInitialFighterBets(
    currentFight,
    betsUnconfirmed,
    expandedFight,
    DateTime,
    EventId
  )

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
        destination.index,
        destinationIndex,
        source,
        destination,
        state,
        setState,
        dispatch
      )
    }
  }
  const winnerChangeHandler = (
    id: string,
    winnerProjection: WinnerProjection
  ) => {
    winnerChange(
      id,
      winnerProjection,
      state,
      setState,
      dispatch,
      betsUnconfirmed
    )
  }

  return (
    <DragColContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <MainColumn as={motion.div} layout>
          <FightsColumn
            state={state}
            winnerChange={winnerChangeHandler}
            EventName={EventName}
            currentEventFights={currentEventFights}
            setExpandedFight={setExpandedFight}
            expandedFight={expandedFight}
          />
        </MainColumn>
        <SideColumn>
          <BetsColumn winnerChange={winnerChangeHandler} state={state} />
        </SideColumn>
      </DragDropContext>
    </DragColContainer>
  )
}
export default FightsAndBets
