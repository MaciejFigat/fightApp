import { motion, AnimatePresence } from 'framer-motion'
import { AccordionContent, AccordionHeader } from './Accordion.styled'

interface AccordionProps {
  children: React.ReactNode
  i: number
  expanded: null | number
  setExpanded: React.Dispatch<React.SetStateAction<null | number>>
  noBottomMargin?: boolean
  headerContent?: string | React.ReactNode
  opacityTransitionIn?: number
  opacityTransitionOut?: number
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  setExpanded,
  expanded,
  i,
  headerContent,
  noBottomMargin,
  opacityTransitionIn,
  opacityTransitionOut
}) => {
  const isOpen = i === expanded

  const expandHandler = () => {
    setExpanded(isOpen ? null : i)
  }
  return (
    <motion.div>
      <AnimatePresence>
        <AccordionHeader
          $noBottomMargin={noBottomMargin}
          onClick={() => {
            expandHandler()
          }}
        >
          {headerContent ? headerContent : 'Header with no content'}
        </AccordionHeader>

        {isOpen && (
          <AccordionContent
            key={i}
            initial='collapsed'
            animate='open'
            exit='collapsed'
            variants={{
              open: {
                opacity: 1,
                height: 'auto',

                transition: {
                  duration: 0.2,
                  opacity: {
                    duration: opacityTransitionIn ? opacityTransitionIn : 0.3,
                    delay: 0.1
                  },
                  ease: 'linear'
                }
              },
              collapsed: {
                opacity: 0,
                height: '0px',
                transition: {
                  duration: 0.3,
                  opacity: {
                    duration: opacityTransitionOut ? opacityTransitionOut : 0.1
                  },
                  ease: 'linear'
                }
              }
            }}
          >
            {children}
          </AccordionContent>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default Accordion
