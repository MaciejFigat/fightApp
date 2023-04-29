import styled from 'styled-components'

export const IconsWrapper = styled.ul`
  list-style: none;
  padding: 0;
`
export const IconsItem = styled.div<{
  contentAfter?: string
  showContent?: boolean
}>`
  padding: 0;
  font-size: 1em;
  display: flex;

  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 20px;
  margin-right: 0;
  @media (max-width: 500px) {
    max-width: 30px;
  }
  &:hover {
    &:after {
      opacity: ${contentAfter => (contentAfter ? `1` : `0`)};
    }
  }
  &:after {
    content: ${contentAfter => (contentAfter ? `${contentAfter}` : null)};
    position: relative !important;
    line-height: 1.2;
    padding: var(--gap-small);
    border-radius: 5px;
    transition: all 0.2s ease-in;
    opacity: 0;
    padding-right: var(--gap-medium);
    font-size: min(max(1rem, 4vw), 12px);
    font-size: var(--font-size-small);
    line-height: 1.2;
    left: 20px;
    top: 0px;
  }
`
