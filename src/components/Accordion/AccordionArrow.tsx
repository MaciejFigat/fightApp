import React from 'react'
import { ArrowButton, ArrowSpan } from './Accordion.styled'

interface AccordionArrowProps {
  animateOn: boolean
}

const AccordionArrow: React.FC<AccordionArrowProps> = ({ animateOn }) => {
  return (
    <ArrowButton>
      <ArrowSpan $animateOn={animateOn}></ArrowSpan>
      <ArrowSpan $animateOn={animateOn}></ArrowSpan>
      <ArrowSpan $animateOn={animateOn}></ArrowSpan>
    </ArrowButton>
  )
}
export default AccordionArrow
