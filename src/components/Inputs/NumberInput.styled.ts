import styled from 'styled-components'

export const Input = styled.input`
  outline: 0;
  background-color: transparent;
  color: var(--background4-main);
  border: none;
  font-weight: 400;
  font-size: var(--font-size-medium);
  &:focus {
    border: none;
    outline: 0;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background1-main);
  font-weight: 600;
  border: 1px solid var(--background-blur2);
  border-radius: var(--border-radius0);
  padding: var(--padding-medium);
  width: 140px;
  transition: all 0.3s ease-out;
  /* ${Input}:hover {
    color: var(--background1-secondary);
  } */
  &:focus-within {
    border-color: var(--background1-secondary);
  }
  &:hover {
    border-color: var(--background1-secondary);
  }
`
