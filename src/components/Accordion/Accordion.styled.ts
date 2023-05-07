import { motion } from 'framer-motion'
import styled, { css, keyframes } from 'styled-components'

const animate = keyframes`
  0% {opacity: 1; transform: translateY(0px) scale(1) rotate(45deg) ;}
  25%{opacity: 0; transform: translateY(5px) scale(0.9) rotate(45deg);}
  26%{opacity: 0; transform: translateY(-5px) scale(0.9) rotate(45deg);}
  55% {opacity: 1; transform: translateY(0px) scale(1) rotate(45deg);}
`
// EQUIVALENT TO: css`${animate} 2.4s linear;`
const animationCSS = css(
  ['', ' 2.4s linear;'] as any as TemplateStringsArray,
  animate
)

export const ArrowSpan = styled.span<{ $animateOn: boolean }>`
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  border-bottom: 1.5px solid var(--background4-main);
  border-right: 1.5px solid var(--background4-main);
  transform: rotate(45deg);
  margin: -3px;
  animation: ${({ $animateOn }) => ($animateOn ? animationCSS : 'none')};
`
export const ArrowButton = styled.button`
  border: none;
  display: grid;
  place-items: center;
  cursor: pointer;
  background: var(--background-blur1);
  padding: var(--gap-small);
  border-radius: 50%;
  height: 1.75rem;
  width: 1.75rem;
  overflow: hidden; //todo for now
  &:hover ${ArrowSpan} {
    transition: border-color 0.3s ease;
    border-color: var(--background1-secondary);
  }
  span:nth-of-type(1) {
    border-top: 0.5px solid var(--background-blur3);
    border-left: 0.5px solid var(--background-blur3);
    animation-delay: 0.2s;
  }
  span:nth-of-type(3) {
    animation-delay: 0.4s;
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
  @media (max-width: 1040px) {
    width: 600px;
    min-width: 270px;
  }

  @media (max-width: 610px) {
    width: 100vw;
  }
`

export const AccordionContent = styled(motion.div)<{ isOpen?: boolean }>`
  width: 100%;
  height: 200px;
  display: grid;
  place-items: center center;
`
