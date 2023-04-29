import React, { useState } from 'react'
import { BetData, ConfirmedBet } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import {
  removeUnconfirmedBet,
  addConfirmedBet
} from '../../../reduxState/stateSlices/bets/betsSlice'
import Accordion from '../../../components/Accordion/Accordion'
import NumberInput from '../../../components/Inputs/NumberInput'
import {
  ColorText,
  DraggingIcon,
  HorizontalWrapperSpaceAround,
  HorizontalWrapperSpaceBetween,
  MarginRightBig
} from '../../../styles/misc.styles'
import { ButtonSmall } from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants, TextColor, WinnerProjection } from '../../../consts'
import BetHeader from './BetHeader'
import {
  dateFormatter,
  payoutFormatter
} from '../../utils/helperFunctions/helperFunction'
import {
  BetDetails,
  BlurredFatText,
  BlurredSkinnyText
} from './BetConfirmation.styled'
import AccordionArrow from '../../../components/Accordion/AccordionArrow'
import BetBadges from './BetBadges'

interface BetConfirmationProps {
  // index for Accordion component
  index?: number
  betData: BetData
  winnerChange: (id: string, winnerProjection: WinnerProjection) => void
}
const BetConfirmation: React.FC<BetConfirmationProps> = ({
  index,
  winnerChange,
  betData: {
    moneyline: betMoneyline,
    id: betId,
    name: betName,
    fightName,
    dateTime,
    Fighters,
    projectedWinner
  }
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
        <HorizontalWrapperSpaceBetween>
          <DraggingIcon />
          <BetHeader
            winnerChange={winnerChange}
            Fighters={Fighters}
            projectedWinner={projectedWinner}
            betMoneyline={betMoneyline}
            betName={betName}
            betId={betId}
            noBadgesInHeader
          />{' '}
          <MarginRightBig>
            <AccordionArrow animateOn={expandedBet === index ? true : false} />
          </MarginRightBig>
        </HorizontalWrapperSpaceBetween>
      }
      expanded={expandedBet}
      setExpanded={setExpandedBet}
      noBottomMargin
    >
      <BetDetails>
        <HorizontalWrapperSpaceBetween>
          {betMoneyline ? (
            <ColorText
              color={betMoneyline > 0 ? TextColor.WARNING : TextColor.SUCCESS}
            >
              {betMoneyline > 0 ? 'underdog' : 'favourite'}
            </ColorText>
          ) : (
            <BetBadges
              betMoneyline={betMoneyline}
              betId={betId}
              Fighters={Fighters}
              projectedWinner={projectedWinner}
              winnerChange={winnerChange}
            />
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
            variant={ButtonVariants.SUCCESS_EMPTY}
            onClick={() => handleConfirm()}
          >
            Confirm
          </ButtonSmall>
          <ButtonSmall
            variant={ButtonVariants.DANGER_EMPTY}
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
