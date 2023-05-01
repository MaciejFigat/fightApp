import React, { ReactNode } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface StaggerChildrenWrapperProps {
  children?: ReactNode
}

//todo  both Parent and Child must be a (motion.div)

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    delay: 1.3,
    duration: 1.3,
    transition: {
      delayChildren: 0,
      staggerChildren: 0.12
    }
  }
}

const StaggerChildrenWrapper: React.FC<StaggerChildrenWrapperProps> = ({
  children
}) => {
  return (
    <AnimatePresence>
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
export default StaggerChildrenWrapper
