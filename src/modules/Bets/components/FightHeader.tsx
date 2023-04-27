import React from 'react'
import { FighterProfile } from '../../../interfaces'
import { FightListHeader } from '../main/DragColumns.styled'
import { HorizontalWrapperSpaceBetween } from '../../../styles/misc.styles'
import AccordionArrow from '../../../components/Accordion/AccordionArrow'

interface FightHeaderProps {
  Fighters?: FighterProfile[]
  open: boolean
}

const FightHeader: React.FC<FightHeaderProps> = ({ Fighters, open }) => {
  return (
    <FightListHeader>
      <HorizontalWrapperSpaceBetween>
        {Fighters && Fighters.length > 0
          ? `${Fighters[0].FirstName} ${Fighters[0].LastName} vs ${Fighters[1].FirstName} ${Fighters[1].LastName}`
          : 'Fighter 1 vs Fighter 2'}{' '}
        <AccordionArrow animateOn={open ? true : false} />
      </HorizontalWrapperSpaceBetween>
    </FightListHeader>
  )
}
export default FightHeader
