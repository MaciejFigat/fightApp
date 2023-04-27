import React from 'react'
import {
  ColorText,
  HighlightText,
  HorizontalWrapperSpaceBetween
} from '../../../styles/misc.styles'
import {
  BetVisualisationLeft,
  BetVisualisationMiddle,
  BetVisualisationRight
} from './BetConfirmation.styled'
import { TextColor } from '../../../consts'

interface BetVisualisationProps {
  amountBet: number
  expectedPayout: number
}

const BetVisualisation: React.FC<BetVisualisationProps> = ({
  expectedPayout,
  amountBet
}) => {
  return (
    <>
      <HorizontalWrapperSpaceBetween>
        {' '}
        <BetVisualisationLeft>
          <HighlightText color={TextColor.GOLD}>Bet {amountBet}</HighlightText>
        </BetVisualisationLeft>
        <BetVisualisationMiddle>
          <ColorText color={TextColor.INFO}>To Win</ColorText>
        </BetVisualisationMiddle>
        <BetVisualisationRight>
          <HighlightText color={TextColor.SUCCESS}>
            +{expectedPayout}
          </HighlightText>
        </BetVisualisationRight>
      </HorizontalWrapperSpaceBetween>
    </>
  )
}
export default BetVisualisation
