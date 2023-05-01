import React from 'react'
import { MainListHeader } from './DragColumns.styled'
import Accordion from '../../../components/Accordion/Accordion'
import FightHeader from '../components/FightHeader'
import AvailableBetsColumn from './AvailableBetsColumn'
import { WinnerProjection } from '../../../consts'
import { BetData, FightAllData } from '../../../interfaces'

interface FightsColumnProps {
  winnerChange: (id: string, winnerProjection: WinnerProjection) => void
  EventName?: string
  setExpandedFight: React.Dispatch<React.SetStateAction<number | null | string>>
  currentEventFights?: FightAllData[]
  expandedFight: number | null | string
  state: BetData[][]
}

const FightsColumn: React.FC<FightsColumnProps> = ({
  winnerChange,
  setExpandedFight,
  EventName,
  currentEventFights,
  expandedFight,
  state
}) => {
  const accordionIds = [0, 1, 2, 3]
  return (
    <>
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
              <AvailableBetsColumn winnerChange={winnerChange} state={state} />
            </Accordion>
          ))
        : accordionIds.map(i => (
            <Accordion
              key={i}
              i={i}
              expanded={expandedFight}
              setExpanded={setExpandedFight}
            >
              <AvailableBetsColumn winnerChange={winnerChange} state={state} />
            </Accordion>
          ))}
    </>
  )
}
export default FightsColumn
