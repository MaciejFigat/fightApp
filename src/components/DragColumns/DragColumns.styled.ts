import styled from 'styled-components'

export const DragColContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  overflow: hidden;
  grid-template-columns: 1fr 375px;
`
export const MainColumn = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  background: var(--background3-main);
`
export const SideColumn = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  background: var(--background1-main);
`
