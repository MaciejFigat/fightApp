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
  display: grid;
  place-items: center center;
  flex-direction: column;
  max-width: ${props => (props.showContent ? '100%' : '20px')};
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
    content: '${props => props.contentAfter}';
    position: relative;
    line-height: 1.2;
    padding: var(--gap-small);
    transition: all 0.2s ease-in;
    opacity: ${props => (props.showContent ? '1' : '0')};
    padding-right: var(--gap-medium);
    font-size: var(--font-size-medium);
    font-weight: 600;
    color: var(--background4-main);
  }
`
