import styled from 'styled-components'
import { TextColor } from '../consts'

export const GridCenterWrapper = styled.div`
  display: grid;
  place-items: center;
`

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
  @media (max-width: 1040px) {
    display: none;
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

// export const Mobile = styled.div``
export const ScrollYWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.2em;
  }
`
export const HorizontalWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: var(--gap-small);
`

export const HorizontalLineBottom = styled.div`
  width: 100%;
  height: 1px;
  padding-bottom: var(--gap-medium);
  border-bottom: 1px solid var(--background-blur1);
`
export const HorizontalWrapperSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
`
export const HorizontalWrapperHeader = styled(HorizontalWrapperSpaceBetween)`
  @media (max-width: 1040px) {
    justify-content: flex-start;
    gap: var(--gap-veryBig);
  }
`
export const RelativeWrapper = styled.div<{ top?: string; left?: string }>`
  top: ${({ top }) => (top ? `${top}` : '0')};
  left: ${({ left }) => (left ? `${left}` : '0')};
  position: relative;
`
export const GeneralWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.2em;
  }
`
export const FlexStartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center
  width: 100%;
  height: 100%;
  min-height: 82vh;
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
    case TextColor.PRIMARY:
      return 'var(--background1-secondary)'
    case TextColor.SECONDARY:
      return 'var(--background4-main)'
    case TextColor.GOLD:
      return 'var(--gold2)'
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
    case TextColor.GOLD:
      return 'var(--gold1)'
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
export const HighlightText = styled.b<TextProps>`
  display: flex;
  align-items: center;
  color: ${({ color }) => getColor(color)};
`
