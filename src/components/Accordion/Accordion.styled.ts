import { motion } from 'framer-motion'
import styled, { css, keyframes } from 'styled-components'

const animate = keyframes`
  0% {
    opacity: 0;
    transform: rotate(45deg) translate(-3px, -3px);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(45deg) translate(3px, 3px);
  }
`

// EQUIVALENT TO: css`${animate} 2s infinite;`

const animationCSS = css(
  ['', ' 2s linear;'] as any as TemplateStringsArray,
  animate
)
export const ArrowSpan = styled.span<{ $animateOn: boolean }>`
  display: block;
  width: 1vw;
  height: 1vw;
  border-bottom: 1.5px solid white;
  border-right: 1.5px solid white;
  transform: rotate(45deg);
  margin: -6px;

  animation: ${({ $animateOn }) => ($animateOn ? animationCSS : 'none')};
`
export const ArrowDiv = styled.div`
  transform: translate(-50%, -50%);
  /* transform: rotate(180deg); */
  cursor: pointer;

  &:nth-child(2) {
    animation-delay: -0.2s;
  }
  &:nth-child(3) {
    animation-delay: -0.4s;
  }
`

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
