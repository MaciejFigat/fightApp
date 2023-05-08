import React from 'react'
import {
  ColorText,
  HighlightText,
  HorizontalWrapperSpaceBetween
} from '../../../styles/misc.styles'
import {
  BetVisualisationLeft,
  BetVisualisationLimiter,
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
    <BetVisualisationLimiter>
      <HorizontalWrapperSpaceBetween>
        {' '}
        <BetVisualisationLeft>
          <HighlightText color={TextColor.GOLD}>
            Bet {amountBet.toFixed(2)}
          </HighlightText>
        </BetVisualisationLeft>
        <BetVisualisationMiddle>
          <ColorText color={TextColor.INFO}>Win</ColorText>
        </BetVisualisationMiddle>
        <BetVisualisationRight>
          <HighlightText color={TextColor.SUCCESS}>
            +{expectedPayout.toFixed(2)}
          </HighlightText>
        </BetVisualisationRight>
      </HorizontalWrapperSpaceBetween>
    </BetVisualisationLimiter>
  )
}
export default BetVisualisation
