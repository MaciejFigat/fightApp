import React, { useState } from 'react'
import {
  HighlightText,
  HorizontalWrapperSpaceBetween
} from '../../../styles/misc.styles'
import StaggerChildrenWrapper from '../../utils/AnimationWrappers/StaggerChildrenWrapper'
import { motion } from 'framer-motion'
import { ButtonSmall } from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants, TextColor } from '../../../consts'
import AnimatedSlider from '../../../components/AnimatedSlider/AnimatedSlider'
import { ConfirmedBet } from '../../../interfaces'

interface BetRegisterConfirmProps {
  bet: ConfirmedBet
  handleBet: (bet: ConfirmedBet) => void
  buttonLabel?: string
  customMessage?: string
}

const BetRegisterConfirm: React.FC<BetRegisterConfirmProps> = ({
  handleBet,
  bet,
  buttonLabel,
  customMessage
}) => {
  const [accepted, setAccepted] = useState<boolean>(false)

  return (
    <>
      <HorizontalWrapperSpaceBetween>
        <StaggerChildrenWrapper key='acceptedWrapper'>
          {' '}
          {accepted ? (
            <motion.div
              key='accepted'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ButtonSmall
                variant={ButtonVariants.SUCCESS_EMPTY}
                onClick={() => handleBet(bet)}
              >
                {buttonLabel ? buttonLabel : 'I accept'}
              </ButtonSmall>
            </motion.div>
          ) : (
            <motion.div
              key='notAccepted'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HighlightText color={TextColor.INFO}>
                {customMessage ? customMessage : 'Do you accept?'}
              </HighlightText>{' '}
            </motion.div>
          )}
        </StaggerChildrenWrapper>
        <AnimatedSlider accepted={accepted} setAccepted={setAccepted} />
      </HorizontalWrapperSpaceBetween>
    </>
  )
}
export default BetRegisterConfirm
