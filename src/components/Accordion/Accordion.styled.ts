import { motion } from 'framer-motion'
import styled from 'styled-components'

export const AccordionHeader = styled(motion.div)`
  display: grid;
  place-items: center center;
  min-width: 370px;
  width: 100%;

  /* height: 100%; */

  height: 50px;

  /* this padding is for smooth closing */
  margin-bottom: 1rem;
`

export const AccordionContent = styled(motion.div)<{ isOpen?: boolean }>`
  width: 100%;
  height: 200px;
  /* background: var(--background1-main); */
  /* this margin is for smooth closing */
  margin-top: 1rem;
  display: grid;
  place-items: center center;
`
