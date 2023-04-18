import styled from 'styled-components'
import { TextColor } from '../consts'

export const HighlightText = styled.b`
  color: var(--background-secondary1);
`
export const HorizontalWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: var(--gap-small);
`

export const HorizontalWrapperSpace = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
`
export const HorizontalWrapperCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`
export const BoldText = styled.b`
  color: var(--background-secondary1);
  font-weight: 700;
  font-size: var(--font-size-medium);
`

interface TextProps {
  color: TextColor
}

const getColor = (color: TextColor): string => {
  switch (color) {
    case TextColor.SUCCESS:
      return 'var(--success1)'
    case TextColor.INFO:
      return 'var(--info1)'
    case TextColor.WARNING:
      return 'var(--warning1)'
    case TextColor.DANGER:
      return 'var(--danger1)'
    default:
      return 'inherit'
  }
}

export const ColorText = styled.span<TextProps>`
  color: ${({ color }) => getColor(color)};
`
