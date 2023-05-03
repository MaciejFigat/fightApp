import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: grid;
  place-items: center;
  width: 420px;
  height: 560px;
  padding: var(--gap-huge);
  border-radius: var(--border-radius1);
  background: var(--background-gradient3);
  color: var(--background3-main);
  background: var(--background4-main);
  @media screen and (max-width: 760px) {
    max-width: 100%;
    width: 100%;
    margin: 0;
    padding: var(--gap-medium);
  }
`
export const LoginContainer = styled.div`
  display: grid;
  place-items: center center;
  height: 89vh;
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: var(--gap-huge);
  @media screen and (max-width: 760px) {
    max-width: 90%;
    padding: var(--gap-medium);
  }
`

export const Input = styled.input`
  max-width: 100%;
  padding: var(--padding-medium-large);
  width: 100%;
  outline: 0;
  font-size: var(--font-size-medium);
  border: none;
  background: none;
  border-radius: var(--border-radius1);
  transition: all 0.3s ease-out;
`
export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  max-width: 414px;
  display: flex;
  flex-direction: column;
  position: relative;
  /* &:has(:invalid) {
    color: var(--danger1);
    color: red;
  }

  &:has(:valid) {
    color: var(--success1);
  } */
  @media screen and (max-width: 760px) {
    max-width: 90vw;
  }
`

export const InputAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

export const FormLabel = styled.label<{ $hasError?: boolean }>`
  margin-bottom: var(--gap-small);
  width: 100%;
  text-transform: uppercase;
  color: ${({ $hasError }) =>
    $hasError ? 'var(--danger2)' : 'var(--background3-main)'};
  font-size: var(--font-size-verySmall);
  padding: 16px 16px 0;
`
export const LoginTextLink = styled.div`
  text-align: center;
  cursor: pointer;
  padding: 12px 16px 0;
  font-size: var(--font-size-small);
`
export const LoginTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  width: 100%;
  gap: var(--gap-medium);
`
export const LoginInputsWrapper = styled.div`
  display: grid;
  place-items: center;
  background: var(--background4-main);
  border: 1px solid var(--background1-secondary);
  border-radius: 0 0 var(--border-radius1) var(--border-radius1);
  &:first-of-type {
    border-radius: var(--border-radius1) var(--border-radius1) 0 0;
    border-bottom: none;
  }
  &:nth-of-type(2) {
    border-radius: 0;
    border-bottom: none;
  }
  &:last-of-type {
    margin-bottom: var(--gap-medium);
    border-radius: 0 0 var(--border-radius1) var(--border-radius1);
    border-bottom: 1px solid var(--background1-secondary);
  }
`

export const LoginTitleHeader = styled.h3`
  font-size: var(--font-size-bigger);
  font-weight: 400;
`
