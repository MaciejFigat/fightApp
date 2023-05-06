import styled from 'styled-components'

export const IconsWrapper = styled.ul`
  list-style: none;
  padding: 0;
`
export const IconsItem = styled.div<{
  contentAfter?: string
  showContent?: boolean
}>`
  position: relative;
  padding: 0;
  font-size: var(--font-size-medium);
  display: grid;
  place-items: center center;
  flex-direction: column;
  max-width: ${props => (props.showContent ? '100%' : '20px')};
  margin-right: 0;

  &:hover {
    &:after {
      opacity: ${contentAfter => (contentAfter ? `1` : `0`)};
    }
  }
  &:after {
    content: '${props => props.contentAfter}';
    position: relative;
    line-height: 1.2;
    padding: var(--gap-small);
    transition: all 0.2s ease-in;
    opacity: ${props => (props.showContent ? '1' : '0')};
    padding-right: var(--gap-medium);
    font-size: var(--font-size-medium);
    font-weight: 600;
    @media (max-width: 610px) {
      font-size: var(--font-size-small);
      /* font-weight: 800; */
      padding: 0;
      width: 55px;
      line-height: 1.05;
      top: 2px;
    }
  }
  @media (max-width: 610px) {
    font-size: var(--font-size-small);
    /* left: -5px; */
    top: -5px;
  }
`
