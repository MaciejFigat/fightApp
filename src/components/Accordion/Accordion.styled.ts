import { motion } from 'framer-motion'
import styled from 'styled-components'

export const AccordionContainer = styled(motion.div)<{ isDragging?: boolean }>`
  width: 300px;
  height: 100%;
  background: var(--background2-main);
`

export const AccordionSection = styled(motion.div)`
  width: 300px;
  height: 100px;
  background: var(--background3-main);
`

export const AccordionContent = styled(motion.div)<{ isOpen?: boolean }>`
  width: 200px;
  height: 200px;
  background: var(--background2-main);
`
