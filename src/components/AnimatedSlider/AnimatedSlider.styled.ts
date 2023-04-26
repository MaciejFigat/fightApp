import { motion } from 'framer-motion'
import styled from 'styled-components'

export const SliderContainer = styled(motion.div)<{
  $confirmed: boolean
}>`
  display: grid;

  color: ${({ $confirmed }) =>
    $confirmed ? 'var(--success1)' : 'var(--warning1)'};
  place-items: flex-start center;
  user-select: none;
  cursor: pointer;
  height: 50px;
  border-radius: var(--border-radius1);
  border: 2px solid
    ${({ $confirmed }) => ($confirmed ? 'var(--success1)' : 'var(--warning1)')};
  width: 50px;
  padding-top: 0.25rem;
`

export const DragConstraints = styled(motion.div)<{
  $confirmed: boolean
}>`
  border: 2px solid
    ${({ $confirmed }) =>
      $confirmed ? 'var(--success1)' : 'var(--background-blur2)'};
  display: grid;
  place-items: center center;
  height: 54.5px;
  width: calc(125px + 2 * var(--gap-small));
  /* padding: var(--gap-small); */

  /* background: var(--background-blur2); */
  border-radius: var(--border-radius1);
`
