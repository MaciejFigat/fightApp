import { motion, AnimatePresence } from 'framer-motion'
import { AccordionContent, AccordionSection } from './Accordion.styled'

interface AccordionProps {
  children: React.ReactNode
  i: number
  expanded: null | number
  setExpanded: React.Dispatch<React.SetStateAction<null | number>>

  headerContent?: string | React.ReactNode
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  setExpanded,
  expanded,
  i,
  headerContent
}) => {
  const isOpen = i === expanded

  const expandHandler = () => {
    setExpanded(isOpen ? null : i)
  }
  return (
    <motion.div>
      <AnimatePresence>
        <AccordionSection
          onClick={() => {
            expandHandler()
          }}
        >
          <motion.div>
            {headerContent ? headerContent : 'Header with no content'}
          </motion.div>
        </AccordionSection>

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
                  ease: 'linear'
                }
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.3,
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
