import React, { useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { SliderContainer } from './AnimatedSlider.styled'
import { ArrowsSVG_D, NoSVG_D, YesSVG_D } from './svgAssets'

interface AnimatedSliderProps {
  header: [string, string]
}

const AnimatedSlider: React.FC<AnimatedSliderProps> = ({ header }) => {
  const [confirmed, setConfirmed] = useState<boolean>(false)

  const x = useMotionValue(0)

  const xInput = [-100, 0, 100]

  // const background = useTransform(x, xInput, [
  //   'linear-gradient(180deg, #671140 0%, rgb(92, 28, 77) 100%)',
  //   'linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)',
  //   'linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)'
  // ])
  const color = useTransform(x, xInput, [
    // framer-motion problem with animating css variables
    'var(--background5-main)',
    'var(--background5-main)',
    '#009670'
  ])
  const xRange = [-80, -30, 30, 80]
  const opacityRange = [0, 1, 1, 0]
  const opacity = useTransform(x, xRange, opacityRange)
  const tickPath = useTransform(x, [10, 100], [0, 1])

  const crossPathA = useTransform(x, [-50, -150], [0, 1])

  const onDragEndHandler = () => {
    if (x.get() > 0) {
      setConfirmed(true)
    } else {
      setConfirmed(false)
    }
  }

  return (
    <SliderContainer
      style={{ x }}
      //   style={{ x, borderColor: background }}
      confirmed={confirmed}
      drag='x'
      onDragEnd={onDragEndHandler}
      dragConstraints={{ left: 0, right: 0 }}
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
  )
}
export default AnimatedSlider
