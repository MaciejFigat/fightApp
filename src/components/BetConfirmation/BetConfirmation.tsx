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
  HorizontalWrapper,
  HorizontalWrapperSpace
} from '../../styles/misc.styles'
import { ButtonSmall } from '../Buttons/Buttons.styled'
import { ButtonVariants, TextColor } from '../../consts'
import BetHeader from './BetHeader'
import {
  dateFormatter,
  payoutFormatter
} from '../helperFunctions/helperFunction'

interface BetConfirmationProps {
  betName: string
  fightName: string
  betId: string
  //   I'm passing index for Accordion component
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
  const formattedDate = dateFormatter(dateTime, false)

  return (
    <Accordion
      i={index ?? 0}
      headerContent={
        <BetHeader betMoneyline={betMoneyline} betName={betName} />
      }
      expanded={expandedBet}
      setExpanded={setExpandedBet}
    >
      <>
        <HorizontalWrapperSpace>
          {' '}
          {betMoneyline &&
            (betMoneyline > 0 ? (
              <ColorText color={TextColor.WARNING}>underdog</ColorText>
            ) : (
              <ColorText color={TextColor.SUCCESS}>favourite</ColorText>
            ))}{' '}
          <i>info</i>
        </HorizontalWrapperSpace>
        <HorizontalWrapperSpace>
          {' '}
          {fightName} {formattedDate}
        </HorizontalWrapperSpace>
        <HorizontalWrapper>
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
        </HorizontalWrapper>

        <ButtonSmall
          variant={ButtonVariants.warningEmpty}
          onClick={() => handleConfirm()}
        >
          Confirm
        </ButtonSmall>
      </>
    </Accordion>
  )
}

export default BetConfirmation
