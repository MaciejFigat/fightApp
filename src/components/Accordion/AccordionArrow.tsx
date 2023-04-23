import React from 'react'
import { ArrowDiv, ArrowSpan } from './Accordion.styled'

interface AccordionArrowProps {
  animateOn: boolean
}

const AccordionArrow: React.FC<AccordionArrowProps> = ({ animateOn }) => {
  return (
    <ArrowDiv>
      <ArrowSpan $animateOn={animateOn}></ArrowSpan>
      <ArrowSpan $animateOn={animateOn}></ArrowSpan>
      <ArrowSpan $animateOn={animateOn}></ArrowSpan>
    </ArrowDiv>
  )
}
export default AccordionArrow
