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

export const DraggableDiv = styled.div<{ isDragging?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  width: 100%;
  min-height: 50px;
  height: 100%;
  margin-bottom: 10px;
  border: 1px solid var(--background1-blur);
  opacity: ${({ isDragging }) => isDragging && '0.9'};
  background: ${({ isDragging }) => isDragging && 'var(--background2-main)'};
  color: ${({ isDragging }) => isDragging && 'var(--background2-secondary)'};
  /* background: var(--background1-blur); */
`

export const DroppableList = styled.div<{
  isDraggingOver?: boolean
  listEmpty?: boolean
}>`
  min-height: 150px;
  ${({ listEmpty }) =>
    listEmpty &&
    `
      &::after {
        content: 'Drop your bets here';
        display: block;
        text-align: center;
        margin-top: 10px;
        color: var(--background1-secondary);
        font-weight: bold;
        padding: 1rem;
        border: 1px dashed var(--background2-secondary);
      }
    `};

  background: ${({ isDraggingOver }) =>
    isDraggingOver ? 'var(--background-blur1)' : 'var(--background1-main)'};

  border-radius: '20px';
`
