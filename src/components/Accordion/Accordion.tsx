import { motion, AnimatePresence } from 'framer-motion'
import { AccordionContent, AccordionSection } from './Accordion.styled'
import { FighterProfile } from '../../interfaces'

interface AccordionProps {
  children: React.ReactNode
  i: number
  expanded: false | number
  setExpanded: React.Dispatch<React.SetStateAction<false | number>>
  fighters?: FighterProfile[]
}

const Accordion: React.FC<AccordionProps> = ({
  children,
  setExpanded,
  expanded,
  i,
  fighters
}) => {
  //   const [isOpen, setIsOpen] = useState(false)
  const isOpen = i === expanded
  return (
    <motion.div>
      <AnimatePresence>
        {/* <AccordionSection key='question' onClick={() => setIsOpen(!isOpen)}> */}
        <AccordionSection
          key='question'
          onClick={() => setExpanded(isOpen ? false : i)}
        >
          <motion.div>
            {fighters
              ? `${fighters[0].FirstName} ${fighters[0].LastName} vs ${fighters[1].FirstName} ${fighters[1].LastName}`
              : 'Fight'}{' '}
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
                  duration: 0.2
                }
              },
              collapsed: {
                opacity: 0,
                height: 0,
                transition: {
                  duration: 0.2
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
