import React from 'react'
import AnimatedSlider from '../AnimatedSlider/AnimatedSlider'
import { useAppSelector } from '../../app/reduxHooks'
import { ConfirmedBet } from '../../interfaces'
import { BetListHeader } from '../DragColumns/DragColumns.styled'
import {
  HighlightText,
  HorizontalWrapper,
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
        <div key={bet.id}>
          {bet.name} bet: {bet.amountBet} hoping for: {bet.expectedPayout}
          <AnimatedSlider header={['Yes', 'No']} />
        </div>
      ))}
    </>
  )
}
export default BetRegistration
