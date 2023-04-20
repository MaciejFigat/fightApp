import styled from 'styled-components'

export const BlurredFatText = styled.text`
  font-size: var(--font-size-small);
  color: var(--background-blur3);
  font-weight: 600;
`
export const BlurredSkinnyText = styled(BlurredFatText)`
  transform: uppercase;
  font-weight: 400;
`
export const BetDetails = styled.div`
  display: grid;
  place-items: center;
  padding: var(--padding-big);
  background: var(--background-blur0);
  gap: var(--gap-huge);
  width: 100%;
`
