import styled from 'styled-components'

export const SportCardWrapper = styled.button`
  border: none;
  border-bottom: 1px solid var(--background-blur2);
  background: var(--background3-main);
  padding: 1rem;
  cursor: pointer;

  font-size: var(--font-size-medium);
  color: var(--background4-main);
  width: 190px;
  &:hover {
    transition: var(--transition-one);
    background: var(--background4-main);
    color: var(--background1-main);
  }
`
