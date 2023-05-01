import React from 'react'
import { MainListHeader } from '../DragColumns.styled'
import Accordion from '../../../../components/Accordion/Accordion'
import FightHeader from '../../components/FightHeader'
import { WinnerProjection } from '../../../../consts'
import { BetData, FightAllData } from '../../../../interfaces'
import AvailableBetsMobile from './AvailableBetsMobile'
import { ScrollYWrapper } from '../../../../styles/misc.styles'
import { motion } from 'framer-motion'

interface FightsColumnMobileProps {
  winnerChange: (id: string, winnerProjection: WinnerProjection) => void
  EventName?: string
  setExpandedFight: React.Dispatch<React.SetStateAction<number | null | string>>
  currentEventFights?: FightAllData[]
  expandedFight: number | null | string
  state: BetData[][]
}

const FightsColumnMobile: React.FC<FightsColumnMobileProps> = ({
  winnerChange,
  setExpandedFight,
  EventName,
  currentEventFights,
  expandedFight,
  state
}) => {
  const accordionIds = [0, 1, 2, 3]
  return (
    <ScrollYWrapper>
      <MainListHeader>{EventName}</MainListHeader>
      <motion.div layout>
        {currentEventFights
          ? currentEventFights.map(({ FightId, Fighters }) => (
              <Accordion
                opacityTransitionIn={0.9}
                opacityTransitionOut={0.05}
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
                <AvailableBetsMobile
                  winnerChange={winnerChange}
                  state={state}
                />
              </Accordion>
            ))
          : accordionIds.map(i => (
              <Accordion
                key={i}
                i={i}
                expanded={expandedFight}
                setExpanded={setExpandedFight}
              >
                <AvailableBetsMobile
                  winnerChange={winnerChange}
                  state={state}
                />
              </Accordion>
            ))}
      </motion.div>
    </ScrollYWrapper>
  )
}
export default FightsColumnMobile
