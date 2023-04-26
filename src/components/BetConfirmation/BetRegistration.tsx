import React, { useState } from 'react'
import AnimatedSlider from '../AnimatedSlider/AnimatedSlider'
import { useAppSelector } from '../../app/reduxHooks'
import { ConfirmedBet } from '../../interfaces'
import { BetListHeader } from '../DragColumns/DragColumns.styled'
import {
  ColorText,
  HighlightText,
  HorizontalLineBottom,
  HorizontalWrapper,
  HorizontalWrapperSpaceBetween,
  RoundAccent
} from '../../styles/misc.styles'
import { ButtonVariants, TextColor, WinMethod } from '../../consts'
import { ButtonSmall } from '../Buttons/Buttons.styled'
import {
  BetDetails,
  BetVisualisationLeft,
  BetVisualisationMiddle,
  BetVisualisationRight,
  BlurredFatText,
  BlurredSkinnyText
} from './BetConfirmation.styled'
import StaggerChildrenWrapper from '../utils/AnimationWrappers/StaggerChildrenWrapper'
import { motion } from 'framer-motion'
import { dateFormatter } from '../helperFunctions/helperFunction'
interface BetRegistrationProps {}

const BetRegistration: React.FC<BetRegistrationProps> = () => {
  const betsConfirmed: ConfirmedBet[] = useAppSelector(
    state => state.bets.betsConfirmed
  )
  const [accepted, setAccepted] = useState<boolean>(false)

  return (
    <>
      {betsConfirmed.length > 0 ? (
        <>
          <BetListHeader>
            <HorizontalWrapper>
              <RoundAccent>{betsConfirmed.length} </RoundAccent>
              <HighlightText color={TextColor.SUCCESS}>
                bets to register
              </HighlightText>
            </HorizontalWrapper>
          </BetListHeader>
          {betsConfirmed.map((bet: ConfirmedBet) => (
            <BetDetails key={bet.id}>
              <HorizontalWrapperSpaceBetween>
                {' '}
                {bet.method === WinMethod.TBD && (
                  <HighlightText color={TextColor.GOLD}>
                    {bet.name} WINS
                  </HighlightText>
                )}
                {bet.method !== WinMethod.TBD &&
                  typeof bet.projectedWinner === 'number' &&
                  bet.Fighters && (
                    <HighlightText color={TextColor.GOLD}>
                      {bet.Fighters[bet.projectedWinner].FirstName}
                      {bet.Fighters[bet.projectedWinner].LastName} WINS by
                      {bet.method}
                    </HighlightText>
                  )}
                {bet.method !== WinMethod.TBD &&
                  typeof bet.projectedWinner !== 'number' && (
                    <HighlightText color={TextColor.GOLD}>
                      Fight is decided by a {bet.method}
                    </HighlightText>
                  )}
              </HorizontalWrapperSpaceBetween>

              <HorizontalWrapperSpaceBetween>
                {' '}
                <BlurredFatText>{bet.fightName} </BlurredFatText>{' '}
                <BlurredSkinnyText>
                  {dateFormatter(bet.dateTime, false)}
                </BlurredSkinnyText>
              </HorizontalWrapperSpaceBetween>

              <HorizontalWrapperSpaceBetween>
                {' '}
                <BetVisualisationLeft>
                  <HighlightText color={TextColor.GOLD}>
                    Bet {bet.amountBet}
                  </HighlightText>
                </BetVisualisationLeft>
                <BetVisualisationMiddle>
                  <ColorText color={TextColor.INFO}>To Win</ColorText>
                </BetVisualisationMiddle>
                <BetVisualisationRight>
                  <HighlightText color={TextColor.SUCCESS}>
                    +{bet.expectedPayout}
                  </HighlightText>
                </BetVisualisationRight>
              </HorizontalWrapperSpaceBetween>
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
                        variant={ButtonVariants.successEmpty}
                        // onClick={() => handleRemove()}
                      >
                        Register bet
                      </ButtonSmall>
                    </motion.div>
                  ) : (
                    <motion.div
                      key='notAccepted'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <HighlightText color={TextColor.SECONDARY}>
                        Do you accept?
                      </HighlightText>{' '}
                    </motion.div>
                  )}
                </StaggerChildrenWrapper>
                <AnimatedSlider accepted={accepted} setAccepted={setAccepted} />
              </HorizontalWrapperSpaceBetween>
              <HorizontalWrapperSpaceBetween>
                <ButtonSmall
                  variant={ButtonVariants.dangerEmpty}
                  // onClick={() => handleRemove()}
                >
                  Remove
                </ButtonSmall>
              </HorizontalWrapperSpaceBetween>
              <HorizontalLineBottom />
            </BetDetails>
          ))}
        </>
      ) : null}
    </>
  )
}
export default BetRegistration
