import { motion } from 'framer-motion'
import styled from 'styled-components'

// export const SliderContainer = styled(motion.div)<{
//   backgroundColor: MotionValue<string>
// }>`
export const SliderContainer = styled(motion.div)<{
  confirmed: boolean
}>`
  display: grid;

  color: ${({ confirmed }) =>
    confirmed ? 'var(--success)' : 'var(--warning)'};
  /* color: red; */
  place-items: flex-start center;
  user-select: none;
  cursor: pointer;
  height: 50px;
  border-radius: var(--border-radius1);
  border: 1px solid
    ${({ confirmed }) => (confirmed ? 'var(--success)' : 'var(--warning)')};
  width: 50px;
  margin-left: 6rem;
  padding-top: 0.25rem;
`
