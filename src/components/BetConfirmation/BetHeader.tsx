import React from 'react'
import { BoldText, HorizontalWrapperSpace } from '../../styles/misc.styles'
import { HeaderWrapper } from '../DragColumns/DragColumns.styled'

interface BetHeaderProps {
  betMoneyline: number | undefined
  betName: string
}

const BetHeader: React.FC<BetHeaderProps> = ({ betMoneyline, betName }) => {
  return (
    <HeaderWrapper>
      <HorizontalWrapperSpace>
        <BoldText>{betName}</BoldText> {betMoneyline && `${betMoneyline}`}
      </HorizontalWrapperSpace>
    </HeaderWrapper>
  )
}
export default BetHeader
