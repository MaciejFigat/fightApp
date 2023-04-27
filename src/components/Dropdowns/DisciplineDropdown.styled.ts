import styled from 'styled-components'

export const DropDownContainer = styled.div`
  position: relative;
  min-width: min-content;
  margin: 0 auto;
`

export const ProjectDropDownWrapper = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--background-blur2);
  height: 34px;
  padding: var(--gap-medium);
  font-weight: 800;
  transition: all 0.3s ease-out;
  background: var(--background1-main);
  color: var(--background4-main);
  &:hover {
    color: var(--background5-main);
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
  top: 50px;
  left: -33%;

  transition: all 0.3s ease-out;
  text-align: center;
  background: var(--background1-main);
`
