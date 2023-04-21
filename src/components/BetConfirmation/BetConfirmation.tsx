import React, { useState } from 'react'
import { BetData, ConfirmedBet } from '../../interfaces'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'
import {
  removeUnconfirmedBet,
  addConfirmedBet
} from '../../features/bets/betsSlice'
import Accordion from '../Accordion/Accordion'
import NumberInput from '../Inputs/NumberInput'
import {
  ColorText,
  HorizontalWrapperSpaceAround,
  HorizontalWrapperSpaceBetween
} from '../../styles/misc.styles'
import { ButtonSmall } from '../Buttons/Buttons.styled'
import { ButtonVariants, TextColor } from '../../consts'
import BetHeader from './BetHeader'
import {
  dateFormatter,
  payoutFormatter
} from '../helperFunctions/helperFunction'
import {
  BetDetails,
  BlurredFatText,
  BlurredSkinnyText
} from './BetConfirmation.styled'

interface BetConfirmationProps {
  betName: string
  fightName: string
  betId: string
  // index for Accordion component
  index?: number
  betMoneyline?: number
  dateTime: string
}
const BetConfirmation: React.FC<BetConfirmationProps> = ({
  betName,
  fightName,
  betId,
  betMoneyline,
  dateTime,
  index
}) => {
  const dispatch: AppDispatch = useAppDispatch()
  const betsUnconfirmed: BetData[] = useAppSelector(
    state => state.bets.betsUnconfirmed
  )

  const [expandedBet, setExpandedBet] = useState<null | number>(null)
  const [amountBet, setAmountBet] = useState<number>(1)
  const [expectedPayout, setExpectedPayout] = useState<number>(1)

  const handleAmountBetChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newAmountBet = Number(event.target.value)
    setAmountBet(newAmountBet)

    // calculate the expected payout based on the amount bet

    const newExpectedPayout = payoutFormatter(newAmountBet, betMoneyline)

    setExpectedPayout(newExpectedPayout)
  }
  const betToConfirm: BetData | undefined =
    betsUnconfirmed && betsUnconfirmed.find(bet => bet.id === betId)

  const handleExpectedAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newExpectedPayout = Number(event.target.value)
    setExpectedPayout(newExpectedPayout)
  }
  const handleConfirm = () => {
    if (betToConfirm) {
      const confirmedBet: ConfirmedBet = {
        ...betToConfirm,
        amountBet: amountBet ?? 0,
        expectedPayout: expectedPayout ?? 0
      }
      dispatch(removeUnconfirmedBet(betToConfirm.id))
      dispatch(addConfirmedBet(confirmedBet))
    }
  }
  const handleRemove = () => {
    if (betToConfirm) {
      dispatch(removeUnconfirmedBet(betToConfirm.id))
    }
  }
  const formattedDate = dateFormatter(dateTime, false)

  return (
    <Accordion
      i={index ?? 0}
      headerContent={
        <BetHeader betMoneyline={betMoneyline} betName={betName} />
      }
      expanded={expandedBet}
      setExpanded={setExpandedBet}
      noBottomMargin
    >
      <BetDetails>
        <HorizontalWrapperSpaceBetween>
          {betMoneyline && (
            <ColorText
              color={betMoneyline > 0 ? TextColor.WARNING : TextColor.SUCCESS}
            >
              {betMoneyline > 0 ? 'underdog' : 'favourite'}
            </ColorText>
          )}
          <i>info</i>
        </HorizontalWrapperSpaceBetween>
        <HorizontalWrapperSpaceBetween>
          {' '}
          <BlurredFatText>{fightName} </BlurredFatText>{' '}
          <BlurredSkinnyText>{formattedDate}</BlurredSkinnyText>
        </HorizontalWrapperSpaceBetween>
        <HorizontalWrapperSpaceBetween>
          <NumberInput
            label={'Wager'}
            value={amountBet}
            changeHandler={handleAmountBetChange}
          />
          <NumberInput
            label={'To win'}
            value={expectedPayout}
            changeHandler={handleExpectedAmountChange}
          />
        </HorizontalWrapperSpaceBetween>
        <HorizontalWrapperSpaceAround>
          <ButtonSmall
            variant={ButtonVariants.successEmpty}
            onClick={() => handleConfirm()}
          >
            Confirm
          </ButtonSmall>
          <ButtonSmall
            variant={ButtonVariants.dangerEmpty}
            onClick={() => handleRemove()}
          >
            Remove
          </ButtonSmall>
        </HorizontalWrapperSpaceAround>
      </BetDetails>
    </Accordion>
  )
}

export default BetConfirmation
