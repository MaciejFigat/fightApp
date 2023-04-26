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
  height: 40px;
  border-radius: var(--border-radius1);
  border: 2px solid
    ${({ $confirmed }) => ($confirmed ? 'var(--success1)' : 'var(--info1)')};
  width: 50px;
  padding-top: 0.25rem;
`

export const DragConstraints = styled(motion.div)<{
  $confirmed: boolean
}>`
  border: 2px solid
    ${({ $confirmed }) =>
      $confirmed ? 'var(--success4)' : 'var(--background-blur2)'};
  display: grid;
  place-items: center center;

  width: calc(125px + 2 * var(--gap-small));

  background: var(--background-blur0);
  border-radius: var(--border-radius1);
`
