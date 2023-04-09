import styled from 'styled-components'

export const DropDownContainer = styled.div`
  min-width: min-content;
  margin: 0 auto;
`

export const ProjectDropDownWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border: 1px solid var(--background-blur2);
  height: 34px;
  padding: 0.2rem 0.4rem 0.2rem 0.5rem;

  &:hover {
    color: var(--background4-main);
  }

  width: 130px;
  gap: 0.5rem;
  font-size: 0.75rem;
`
export const DropDownHeader = styled.div`
  display: grid;
  place-items: center;

  font-weight: 500;
  font-size: 1rem;
  color: var(--background4-main);

  text-align: center;
`
export const DropDownListContainer = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  z-index: 10;
  border: 1px solid var(--background-blur1);
  padding: 0.75rem;
  width: 166px;
  min-width: fit-content;
  border-radius: 12px;
  top: 60px;
  /* top: 60px;
  right: 0%; */
  /* right: 140px; */

  transition: all 0.3s ease-out;
  text-align: center;
  background: var(--background1-main);
`
