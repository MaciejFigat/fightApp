import React, { useState } from 'react'
import { BetData, ConfirmedBet, FightAllData } from '../../interfaces'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'
import {
  removeUnconfirmedBet,
  addConfirmedBet
} from '../../features/bets/betsSlice'
import Accordion from '../Accordion/Accordion'
import NumberInput from '../Inputs/NumberInput'
import { HorizontalWrapper } from '../../styles/misc.styles'
import { ButtonSmall } from '../Buttons/Buttons.styled'
import { ButtonVariants } from '../../consts'
import BetHeader from './BetHeader'
import { payoutFormatter } from '../helperFunctions/helperFunction'

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
    console.log(newExpectedPayout)
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
  return (
    <Accordion
      i={index ?? 0}
      headerContent={
        <BetHeader
          dateTime={dateTime}
          betMoneyline={betMoneyline}
          betName={betName}
          fightName={fightName}
        />
      }
      expanded={expandedBet}
      setExpanded={setExpandedBet}
    >
      <>
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
