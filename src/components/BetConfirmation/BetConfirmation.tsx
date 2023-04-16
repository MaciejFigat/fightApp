import React, { useState } from 'react'
import { BetData, ConfirmedBet } from '../../interfaces'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'
import {
  removeUnconfirmedBet,
  addConfirmedBet,
  removeConfirmedBet
} from '../../features/bets/betsSlice'
import Accordion from '../Accordion/Accordion'
interface BetConfirmationProps {
  betName: string
  betId: string
  //   I'm passing index for Accordion component
  index?: number
}
const BetConfirmation: React.FC<BetConfirmationProps> = ({
  betName,
  betId,
  index
}) => {
  const dispatch: AppDispatch = useAppDispatch()
  const betsUnconfirmed: BetData[] = useAppSelector(
    state => state.bets.betsUnconfirmed
  )
  const [expandedBet, setExpandedBet] = useState<null | number>(null)
  const [amountBet, setAmountBet] = useState<number>()
  const [expectedPayout, setExpectedPayout] = useState<number>()
  //   amountBet: number
  //   expectedPayout: number

  const handleAmountBetChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newAmountBet = Number(event.target.value)
    setAmountBet(newAmountBet)

    // calculate the expected payout based on the amount bet
    const payoutMultiplier = 2 //todo for simplicity later moneyline
    const newExpectedPayout = newAmountBet * payoutMultiplier
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
      headerContent={`${betName}`}
      expanded={expandedBet}
      setExpanded={setExpandedBet}
    >
      {/* <h2>Confirm this bet</h2> */}
      <ul>
        <div>
          <label htmlFor='amountBetInput'>Enter amount to bet:</label>
          <input
            id='amountBetInput'
            type='number'
            value={amountBet}
            onChange={handleAmountBetChange}
          />
          <label htmlFor='amountBetInput'>Expected payout</label>
          <input
            id='amountBetInput'
            type='number'
            value={expectedPayout}
            onChange={handleExpectedAmountChange}
          />

          <button onClick={() => handleConfirm()}>Confirm</button>
        </div>
      </ul>
    </Accordion>
  )
}

export default BetConfirmation
