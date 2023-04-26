import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { DragConstraints, SliderContainer } from './AnimatedSlider.styled'
import { ArrowsSVG_D, NoSVG_D, YesSVG_D } from './svgAssets'

interface AnimatedSliderProps {
  header: [string, string]
}

const AnimatedSlider: React.FC<AnimatedSliderProps> = ({ header }) => {
  const [confirmed, setConfirmed] = useState<boolean>(false)

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
    '#009670'
  ])
  const xRange = [-20, -5, 5, 20]
  const opacityRange = [0, 1, 1, 0]
  const opacity = useTransform(x, xRange, opacityRange)
  const tickPath = useTransform(x, [10, 70], [0, 1])

  const crossPathA = useTransform(x, [-30, -45], [0, 1])

  const onDragEndHandler = () => {
    if (x.get() > 0) {
      setConfirmed(true)
    } else {
      setConfirmed(false)
    }
  }
  const constraintsRef = useRef(null)
  return (
    <DragConstraints $confirmed={confirmed} ref={constraintsRef}>
      <SliderContainer
        style={{ x, background }}
        // transient props
        dragTransition={{ bounceStiffness: 1200, bounceDamping: 123 }}
        $confirmed={confirmed}
        drag='x'
        onDragEnd={onDragEndHandler}
        dragConstraints={constraintsRef}
      >
        {confirmed ? header[0] : header[1]}
        <svg viewBox='0 0 50 50'>
          <motion.path
            fill='none'
            strokeWidth='1'
            stroke={color}
            d={ArrowsSVG_D}
            style={{ translateX: 15, translateY: 10, opacity }}
          />
          <motion.path
            fill='none'
            strokeWidth='1'
            stroke={color}
            d={YesSVG_D}
            strokeDasharray='0 1'
            style={{ translateX: 10, translateY: 5, pathLength: tickPath }}
          />
          <motion.path
            fill='none'
            strokeWidth='1'
            stroke={color}
            d={NoSVG_D}
            strokeDasharray='0 1'
            style={{ translateX: 10, translateY: 5, pathLength: crossPathA }}
          />
        </svg>
      </SliderContainer>
    </DragConstraints>
  )
}
export default AnimatedSlider
