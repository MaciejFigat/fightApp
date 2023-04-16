import React from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { SliderContainer } from './AnimatedSlider.styled'
import { NoSVG_D, YesSVG_D } from './svgAssets'

interface AnimatedSliderProps {}

const AnimatedSlider: React.FC<AnimatedSliderProps> = () => {
  const x = useMotionValue(0)
  const xInput = [-100, 0, 100]
  const background = useTransform(x, xInput, [
    'linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)',
    'linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)',
    'linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)'
  ])
  const color = useTransform(x, xInput, [
    'rgb(211, 9, 225)',
    'rgb(68, 0, 255)',
    'rgb(3, 209, 0)'
  ])
  const tickPath = useTransform(x, [10, 100], [0, 1])
  const crossPathB = useTransform(x, [-10, -55], [0, 1])
  const crossPathA = useTransform(x, [-50, -150], [0, 2])

  return (
    <SliderContainer style={{ background }}>
      <motion.div
        className='box'
        style={{ x }}
        drag='x'
        dragConstraints={{ left: 0, right: 0 }}
      >
        <div>Confirm</div>
        <svg viewBox='0 0 50 50'>
          <motion.path
            fill='none'
            strokeWidth='2'
            stroke={color}
            d='M 0, 10 a 10, 10 0 1,0 20,0 a 10, 10 0 1,0 -20,0'
            style={{ translateX: 15, translateY: 15 }}
          />
          <motion.path
            fill='none'
            strokeWidth='2'
            stroke={color}
            d={YesSVG_D}
            strokeDasharray='0 1'
            style={{ pathLength: tickPath }}
          />
          <motion.path
            fill='none'
            strokeWidth='2'
            stroke={color}
            d={NoSVG_D}
            strokeDasharray='0 1'
            style={{ pathLength: crossPathA }}
          />
        </svg>
      </motion.div>
    </SliderContainer>
  )
}
export default AnimatedSlider
