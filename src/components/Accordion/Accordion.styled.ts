import { motion } from 'framer-motion'
import styled from 'styled-components'

export const AccordionHeader = styled(motion.div)<{
  $noBottomMargin?: boolean
}>`
  display: grid;
  place-items: center center;
  min-width: 370px;
  width: 100%;
  height: 50px;
  margin-bottom: ${({ $noBottomMargin }) => ($noBottomMargin ? '0' : '1rem')};
`

export const AccordionContent = styled(motion.div)<{ isOpen?: boolean }>`
  width: 100%;
  height: 200px;
  display: grid;
  place-items: center center;
`
