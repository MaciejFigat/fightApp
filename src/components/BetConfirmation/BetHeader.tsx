import React from 'react'
import {
  BoldText,
  ColorBadge,
  HorizontalWrapperSpaceBetween
} from '../../styles/misc.styles'
import { HeaderWrapper } from '../DragColumns/DragColumns.styled'
import { TextColor } from '../../consts'

interface BetHeaderProps {
  betMoneyline: number | undefined
  betName: string
}

const BetHeader: React.FC<BetHeaderProps> = ({ betMoneyline, betName }) => {
  return (
    <HeaderWrapper>
      <HorizontalWrapperSpaceBetween>
        <BoldText>{betName}</BoldText>

        {betMoneyline && (
          <ColorBadge
            color={betMoneyline > 0 ? TextColor.WARNING : TextColor.SUCCESS}
          >
            {betMoneyline}
          </ColorBadge>
        )}
      </HorizontalWrapperSpaceBetween>
    </HeaderWrapper>
  )
}
export default BetHeader
