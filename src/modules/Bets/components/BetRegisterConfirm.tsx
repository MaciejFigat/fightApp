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
import { ConfirmedBet, UserInfo } from '../../../interfaces'
import { useAppSelector } from '../../../reduxState/reduxHooks'

interface BetRegisterConfirmProps {
  bet?: ConfirmedBet
  handleBet?: (bet: ConfirmedBet) => void
  deleteBet?: (id: string, amountBet: number) => void
  betId?: string
  buttonLabel?: string
  customMessage?: string
}

const BetRegisterConfirm: React.FC<BetRegisterConfirmProps> = ({
  handleBet,
  deleteBet,
  betId,
  bet,
  buttonLabel,
  customMessage
}) => {
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)

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
              {deleteBet && betId && bet && bet.amountBet ? (
                <ButtonSmall
                  variant={ButtonVariants.DANGER_EMPTY}
                  onClick={() => deleteBet(betId, bet?.amountBet)}
                >
                  {buttonLabel ? buttonLabel : 'I accept'}
                </ButtonSmall>
              ) : (
                handleBet &&
                bet && (
                  <ButtonSmall
                    variant={
                      Object.keys(userInfo).length > 0
                        ? ButtonVariants.SUCCESS_EMPTY
                        : ButtonVariants.DISABLED
                    }
                    onClick={() => handleBet(bet)}
                  >
                    {buttonLabel ? buttonLabel : 'I accept'}
                  </ButtonSmall>
                )
              )}
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
