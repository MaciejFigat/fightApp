import styled from 'styled-components'

export const EventCardContainer = styled.div`
  display: grid;
  padding: var(--padding-big);
  gap: var(--gap-small);
`
export const EventCardContainerMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: var(--background2-main);
  border-radius: var(--border-radius1);
  margin-top: var(--gap-medium);
  padding: 2rem;
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
    width: 100%;
    padding: var(--gap-small);
  }
`
export const EventCardStyled = styled.button<{ active?: boolean }>`
  display: grid;
  cursor: pointer;
  place-items: flex-start;
  background: var(--background2-main);
  color: var(--background4-main);
  font-size: var(--font-size-medium);
  font-weight: 700;
  padding: var(--padding-big);
  min-height: 68px;
  border-radius: var(--border-radius0);
  border: ${({ active }) =>
    active
      ? '1px solid var(--background2-secondary)'
      : '1px solid var(--background-blur2)'};

  transition: var(--transition-one);
  &:hover {
    border: 1px solid var(--background1-secondary);
  }
  &:active {
    border: 1px solid var(--background2-secondary);
  }
`
