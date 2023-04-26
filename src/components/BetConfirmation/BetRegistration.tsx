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
import { ButtonVariants, TextColor, WinMethod } from '../../consts'
import { ButtonSmall } from '../Buttons/Buttons.styled'
import { BetDetails } from './BetConfirmation.styled'
interface BetRegistrationProps {}

const BetRegistration: React.FC<BetRegistrationProps> = () => {
  const betsConfirmed: ConfirmedBet[] = useAppSelector(
    state => state.bets.betsConfirmed
  )
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
              <HeaderWrapper>
                <HorizontalWrapperSpaceBetween>
                  {' '}
                  {bet.method === WinMethod.TBD && `${bet.name} WINS`}
                  {bet.method !== WinMethod.TBD &&
                    typeof bet.projectedWinner === 'number' &&
                    bet.Fighters &&
                    `${bet.Fighters[bet.projectedWinner].FirstName} ${
                      bet.Fighters[bet.projectedWinner].LastName
                    } WINS by ${bet.method}`}
                  {bet.method !== WinMethod.TBD &&
                    typeof bet.projectedWinner !== 'number' &&
                    `Fight is decided by ${bet.method}`}
                </HorizontalWrapperSpaceBetween>
                <HorizontalWrapperSpaceBetween>
                  {' '}
                  <HighlightText color={TextColor.INFO}>
                    -{bet.amountBet}
                  </HighlightText>
                  <HighlightText color={TextColor.SUCCESS}>
                    +{bet.expectedPayout}
                  </HighlightText>
                </HorizontalWrapperSpaceBetween>
                <HorizontalWrapperSpaceBetween>
                  <AnimatedSlider header={['Yes', 'No']} />{' '}
                  <h4>Do you accept the rules?</h4>
                </HorizontalWrapperSpaceBetween>
                <HorizontalWrapperSpaceBetween>
                  <ButtonSmall
                    variant={ButtonVariants.successEmpty}
                    // onClick={() => handleRemove()}
                  >
                    Register bet
                  </ButtonSmall>
                  <ButtonSmall
                    variant={ButtonVariants.warningEmpty}
                    // onClick={() => handleRemove()}
                  >
                    Remove
                  </ButtonSmall>
                </HorizontalWrapperSpaceBetween>
              </HeaderWrapper>
            </BetDetails>
          ))}
        </>
      ) : null}
    </>
  )
}
export default BetRegistration
