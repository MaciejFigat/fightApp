import { motion } from 'framer-motion'
import styled from 'styled-components'

// export const AccordionContainer = styled(motion.div)<{ isDragging?: boolean }>`
//   width: 300px;
//   height: 100%;
//   background: var(--background1-main);
// `

export const AccordionSection = styled(motion.div)`
  display: grid;
  place-items: center center;
  /* width: 300px; */
  width: 100%;
  height: 50px;
  /* height: 100%; */
  background: var(--background2-main);
  /* this padding is for smooth closing */
  margin-bottom: 1rem;
`

export const AccordionContent = styled(motion.div)<{ isOpen?: boolean }>`
  /* width: 200px; */
  width: 100%;
  height: 200px;
  background: var(--background2-main);
  /* this margin is for smooth closing */
  margin-top: 1rem;
  display: grid;
  place-items: center center;
`
