import React from 'react'
import AnimatedSlider from '../AnimatedSlider/AnimatedSlider'
import { useAppSelector } from '../../app/reduxHooks'
import { ConfirmedBet } from '../../interfaces'
import { BetListHeader, HeaderWrapper } from '../DragColumns/DragColumns.styled'
import {
  HighlightText,
  HorizontalWrapper,
  HorizontalWrapperSpaceBetween,
  RoundAccent
} from '../../styles/misc.styles'
import { TextColor } from '../../consts'
interface BetRegistrationProps {}

const BetRegistration: React.FC<BetRegistrationProps> = () => {
  const betsConfirmed: ConfirmedBet[] = useAppSelector(
    state => state.bets.betsConfirmed
  )
  return (
    <>
      <BetListHeader>
        <HorizontalWrapper>
          <RoundAccent>{betsConfirmed.length} </RoundAccent>
          <HighlightText color={TextColor.SUCCESS}>
            bets to register
          </HighlightText>
        </HorizontalWrapper>
      </BetListHeader>
      {/* {betsConfirmed.length > 0 && <h3>confirmed fight bets </h3>} */}
      {betsConfirmed.map((bet: ConfirmedBet) => (
        <HeaderWrapper key={bet.id}>
          <HorizontalWrapperSpaceBetween>
            {' '}
            {bet.name} bet: {bet.amountBet} hoping for: {bet.expectedPayout}
          </HorizontalWrapperSpaceBetween>
          <AnimatedSlider header={['Yes', 'No']} />
        </HeaderWrapper>
      ))}
    </>
  )
}
export default BetRegistration
