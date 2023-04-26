import React, { Dispatch, SetStateAction, useRef } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { DragConstraints, SliderContainer } from './AnimatedSlider.styled'
import { ArrowsSVG_D, NoSVG_D, YesSVG_D } from './svgAssets'

interface AnimatedSliderProps {
  setAccepted: Dispatch<SetStateAction<boolean>>
  accepted: boolean
}

const AnimatedSlider: React.FC<AnimatedSliderProps> = ({
  setAccepted,
  accepted
}) => {
  const x = useMotionValue(0)

  const xInput = [-30, 0, 30]

  const background = useTransform(x, xInput, [
    'linear-gradient(90deg, var(--background-blur0) 10%, var(--background2-main) 56%, , var(--background2-main) 100%)',
    'linear-gradient(90deg, var(--background3-main) 0%, var(--background2-main) 100%)',
    'linear-gradient(90deg, var(--background3-main) 0%, var(--background2-main) 75%, var(--background-blur1) 100%)'
  ])
  const color = useTransform(x, xInput, [
    // framer-motion problem with animating css variables
    'var(--background5-main)',
    'var(--background5-main)',
    '#00bc8c'
  ])
  const xRange = [-20, -5, 5, 20]
  const opacityRange = [0, 1, 1, 0]
  const opacity = useTransform(x, xRange, opacityRange)
  const tickPath = useTransform(x, [10, 70], [0, 1])

  const crossPathA = useTransform(x, [-30, -45], [0, 1])

  const onDragEndHandler = () => {
    if (x.get() > 0) {
      setAccepted(true)
    } else {
      setAccepted(false)
    }
  }
  const constraintsRef = useRef(null)
  return (
    <DragConstraints $confirmed={accepted} ref={constraintsRef}>
      <SliderContainer
        style={{ x, background }}
        // transient props
        dragTransition={{ bounceStiffness: 1200, bounceDamping: 123 }}
        $confirmed={accepted}
        drag='x'
        onDragEnd={onDragEndHandler}
        dragConstraints={constraintsRef}
      >
        <svg viewBox='0 0 50 50'>
          <motion.path
            fill='none'
            strokeWidth='1.5'
            stroke={color}
            d={ArrowsSVG_D}
            style={{ translateX: 15, translateY: 14, opacity }}
          />
          <motion.path
            fill='none'
            strokeWidth='1'
            stroke={color}
            d={YesSVG_D}
            strokeDasharray='0 1'
            style={{ translateX: 10, translateY: 9, pathLength: tickPath }}
          />
          <motion.path
            fill='none'
            strokeWidth='1'
            stroke={color}
            d={NoSVG_D}
            strokeDasharray='0 1'
            style={{ translateX: 10, translateY: 9, pathLength: crossPathA }}
          />
        </svg>
      </SliderContainer>
    </DragConstraints>
  )
}
export default AnimatedSlider
