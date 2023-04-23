import React, { useEffect, useState } from 'react'
import {
  DragColContainer,
  MainColumn,
  MainListHeader,
  SideColumn
} from './DragColumns.styled'
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
import { WinMethod, WinnerProjection } from '../../consts'
import { editUnconfirmedBet } from '../../features/bets/betsSlice'
import FightsColumn from './FightColumn'
import FightHeader from './FightHeader'

interface DragColumnsProps {}

const DragColumns: React.FC<DragColumnsProps> = () => {
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
    DateTime
  } = currentEvent ?? {}
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
    const fighter1 = currentFight?.Fighters?.[0]
    const fighter2 = currentFight?.Fighters?.[1]
    const name1 = fighter1?.FirstName ?? 'No data :-('
    const name2 = fighter2?.FirstName ?? 'No data :-('
    const lastName1 = fighter1?.LastName ?? ''
    const lastName2 = fighter2?.LastName ?? ''
    const fightName = `${name1} ${lastName1} vs ${name2} ${lastName2}`

    setState([
      [
        {
          id: v4(),
          FightId: currentFight?.FightId ?? 0,
          name: `${name1} ${lastName1}`,
          fightName: fightName,
          method: WinMethod.TBD,
          projectedWinner: WinnerProjection.FIGHTER1,
          moneyline: currentFight?.Fighters[0]?.Moneyline ?? 0,
          dateTime: DateTime ?? '',
          activated: false
        },
        {
          id: v4(),
          FightId: currentFight?.FightId ?? 0,
          name: `${name2} ${lastName2}`,
          fightName: fightName,
          moneyline: currentFight?.Fighters[1]?.Moneyline ?? 0,
          method: WinMethod.TBD,
          projectedWinner: WinnerProjection.FIGHTER2,
          dateTime: DateTime ?? '',
          activated: false
        },
        {
          id: v4(),
          name: 'KO/TKO',
          fightName: fightName,
          method: WinMethod.KO_TKO,
          projectedWinner: WinnerProjection.ANY,
          FightId: currentFight?.FightId ?? 0,
          dateTime: DateTime ?? '',
          Fighters: currentFight?.Fighters ?? [],
          activated: false
        },
        {
          id: v4(),
          name: 'Decision',
          fightName: fightName,
          method: WinMethod.DECISION,
          projectedWinner: WinnerProjection.ANY,
          FightId: currentFight?.FightId ?? 0,
          dateTime: DateTime ?? '',
          Fighters: currentFight?.Fighters ?? [],
          activated: false
        },
        {
          id: v4(),
          name: 'Submission',
          fightName: fightName,
          method: WinMethod.SUBMISSION,
          projectedWinner: WinnerProjection.ANY,
          FightId: currentFight?.FightId ?? 0,
          dateTime: DateTime ?? '',
          Fighters: currentFight?.Fighters ?? [],
          activated: false
        },
        {
          id: v4(),
          name: 'Draw',
          fightName: fightName,
          method: WinMethod.DRAW,
          projectedWinner: WinnerProjection.ANY,
          FightId: currentFight?.FightId ?? 0,
          dateTime: DateTime ?? '',
          Fighters: currentFight?.Fighters ?? [],
          activated: false
        },
        {
          id: v4(),
          name: 'No Contest',
          fightName: fightName,
          method: WinMethod.DQ,
          projectedWinner: WinnerProjection.ANY,
          FightId: currentFight?.FightId ?? 0,
          dateTime: DateTime ?? '',
          Fighters: currentFight?.Fighters ?? [],
          activated: false
        }
      ],
      betsUnconfirmed
    ])
  }, [currentFight, betsUnconfirmed, expandedFight, DateTime])

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

  const winnerChange = (id: string, winnerProjection: WinnerProjection) => {
    const betInArrayOne = state[0].find(bet => bet.id === id)

    const betInArrayTwo = state[1].find(bet => bet.id === id)

    const indexUnconfirmedBet = betsUnconfirmed.findIndex(bet => bet.id === id)

    if (betInArrayOne) {
      const updatedState = state[0].map(bet =>
        bet.id === id ? { ...bet, projectedWinner: winnerProjection } : bet
      )

      setState([updatedState, state[1]])
    }
    if (betInArrayTwo) {
      const updatedState = state[1].map(bet =>
        bet.id === id ? { ...bet, projectedWinner: winnerProjection } : bet
      )
      setState([state[0], updatedState])

      const betUnconfirmedChanged = {
        itemIndex: indexUnconfirmedBet,
        betData: { ...betInArrayTwo, projectedWinner: winnerProjection }
      }

      dispatch(editUnconfirmedBet(betUnconfirmedChanged))
    }
  }

  const accordionIds = [0, 1, 2, 3]

  return (
    <DragColContainer>
      <DragDropContext onDragEnd={onDragEnd}>
        <MainColumn as={motion.div} layout>
          <MainListHeader>{EventName}</MainListHeader>
          {currentEventFights
            ? currentEventFights.map(({ FightId, Fighters }) => (
                <Accordion
                  key={FightId}
                  i={FightId}
                  headerContent={
                    <FightHeader
                      open={expandedFight === FightId ? true : false}
                      Fighters={Fighters}
                    />
                  }
                  expanded={expandedFight}
                  setExpanded={setExpandedFight}
                >
                  <FightsColumn winnerChange={winnerChange} state={state} />
                </Accordion>
              ))
            : accordionIds.map(i => (
                <Accordion
                  key={i}
                  i={i}
                  expanded={expandedFight}
                  setExpanded={setExpandedFight}
                >
                  <FightsColumn winnerChange={winnerChange} state={state} />
                </Accordion>
              ))}
        </MainColumn>
        <SideColumn>
          <BetSlipsColumn winnerChange={winnerChange} state={state} />
        </SideColumn>
      </DragDropContext>
    </DragColContainer>
  )
}
export default DragColumns
