import React from 'react'
import {
  BoldText,
  HorizontalWrapperSpaceBetween
} from '../../styles/misc.styles'
import { HeaderWrapper } from '../DragColumns/DragColumns.styled'

interface BetHeaderProps {
  betMoneyline: number | undefined
  betName: string
}

const BetHeader: React.FC<BetHeaderProps> = ({ betMoneyline, betName }) => {
  return (
    <HeaderWrapper>
      <HorizontalWrapperSpaceBetween>
        <BoldText>{betName}</BoldText> {betMoneyline && `${betMoneyline}`}
      </HorizontalWrapperSpaceBetween>
    </HeaderWrapper>
  )
}
export default BetHeader
