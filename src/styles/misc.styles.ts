import styled from 'styled-components'
import { TextColor } from '../consts'

export const DraggingIcon = styled.span`
  width: 20px;
  height: 20px;
  &:before {
    content: '.';
    position: relative;
    left: 10px;
    top: -11px;
    font-size: 20px;
    line-height: 20px;
    color: var(--background-blur3);
    text-shadow: 0 5px var(--background-blur3), 0 10px var(--background-blur3),
      5px 0 var(--background-blur3), 5px 5px var(--background-blur3),
      5px 10px var(--background-blur3), 10px 0 var(--background-blur3),
      10px 5px var(--background-blur3), 10px 10px var(--background-blur3);
  }
`

export const RoundAccent = styled.b`
  display: grid;
  width: 38px;
  height: 38px;
  place-items: center;
  padding: var(--gap-medium);
  background-color: var(--background-blur2);
  border-radius: 50%;
`
export const HighlightText = styled.b`
  color: var(--background1-secondary);
`
export const HorizontalWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: var(--gap-small);
`

export const HorizontalWrapperSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`
export const HorizontalWrapperSpaceAround = styled(
  HorizontalWrapperSpaceBetween
)`
  justify-content: space-around;
`
export const HorizontalWrapperCenter = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`
export const HorizontalWrapperEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  gap: var(--gap-small);
`
export const BoldText = styled.b`
  color: var(--background-secondary1);
  font-weight: 700;
  font-size: var(--font-size-medium);
`
export const MarginRightBig = styled.div`
  margin-right: var(--gap-big);
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
const getAccentColor = (color: TextColor): string => {
  switch (color) {
    case TextColor.SUCCESS:
      return 'var(--success2)'
    case TextColor.INFO:
      return 'var(--info2)'
    case TextColor.WARNING:
      return 'var(--warning2)'
    case TextColor.DANGER:
      return 'var(--danger2)'
    default:
      return 'inherit'
  }
}

export const ColorText = styled.span<TextProps>`
  color: ${({ color }) => getColor(color)};
  font-weight: 600;
`
export const ColorBadge = styled.span<TextProps>`
  display: grid;
  place-items: center;
  width: 55px;
  letter-spacing: 0.075em;
  padding: var(--padding-small);
  font-size: var(--font-size-small);
  font-weight: 800;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  background-color: ${({ color }) => getColor(color)};
  color: var(--background4-main);
`
export const ColorBadgeEmpty = styled(ColorBadge)<TextProps>`
  background-color: var(--background1-main);
  border: 1px solid ${({ color }) => getColor(color)};
  color: ${({ color }) => getColor(color)};
  &:hover {
    border-color: ${({ color }) => getAccentColor(color)};
    color: ${({ color }) => getAccentColor(color)};
  }
`
export const ColorBadgeLong = styled(ColorBadge)<TextProps>`
  width: fit-content;
`
