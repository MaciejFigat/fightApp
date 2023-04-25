import styled from 'styled-components'

export const LoginWrapper = styled.div`
  display: grid;
  place-items: center;
  border-top: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
  width: 600px;
  padding: var(--gap-huge);
  border-radius: var(--border-radius1);
  background: linear-gradient(
    120deg,
    var(--background-blur1) 0%,
    transparent 30%,
    transparent 70%,
    var(--background-blur1)
  );
  @media screen and (max-width: 960px) {
    max-width: 80vw;
  }
`
export const LoginContainer = styled.div`
  display: grid;
  place-items: center center;
  height: 89vh;
  background: var(--background1-main);

  color: var(--background4-main);
  @media screen and (max-width: 760px) {
    /* max-width: 90%; */
  }
`

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: 1rem;
  @media screen and (max-width: 760px) {
    max-width: 90%;
  }
`

export const Input = styled.input`
  max-width: 100%;
  padding: var(--padding-medium);

  /* color: var(--background1-main); */
  margin-bottom: var(--gap-veryBig);
  border-radius: var(--border-radius0);
  outline: 0;
  font-size: var(--font-size-medium);
  border-top: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur1);
  border-left: 1px solid var(--background-blur1);
  transition: all 0.3s ease-out;
  &:focus,
  &:hover {
    border-bottom: 1px solid var(--background-blur1);
    border-left: 1px solid var(--background-blur1);
    border-top: 1px solid transparent;
    border-right: 1px solid transparent;
  }

  &::placeholder {
    color: var(--background3-main);
  }
`
export const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  z-index: 1;
  max-width: 414px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 760px) {
    max-width: 90%;
  }
`

export const InputAndLabelWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`

export const Title = styled.div`
  font-weight: normal;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: var(--gap-veryBig);
  margin-bottom: var(--gap-veryBig);
  width: 50%;
`

export const FormLabel = styled.label`
  color: var(--background4-main);
  margin-bottom: var(--gap-small);
`
export const LoginTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  width: 100%;
  margin-bottom: var(--gap-huge);
`
