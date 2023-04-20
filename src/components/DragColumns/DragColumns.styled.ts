import styled from 'styled-components'

export const DragColContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  overflow: hidden;
  grid-template-columns: 1fr 380px;
`
export const MainColumn = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  background: var(--background1-main);
  border-right: 1px solid var(--background-blur2);
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
  min-width: 370px;
  max-width: 370px;

  min-height: 50px;
  height: 100%;
  margin-bottom: 10px;
  border: 1px solid var(--background-blur1);
  border-color: ${({ isDragging }) => isDragging && 'var(--background-blur3)'};
  opacity: ${({ isDragging }) => isDragging && '0.9'};
  background: ${({ isDragging }) => isDragging && 'var(--background2-main)'};
  color: ${({ isDragging }) => isDragging && 'var(--background1-secondary)'};
  /* background: var(--background-blur0); */
`

export const DroppableList = styled.div<{
  isDraggingOver?: boolean
  listEmpty?: boolean
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    isDraggingOver ? 'var(--background-blur0)' : 'var(--background1-main)'};

  /* color: ${({ isDraggingOver }) =>
    isDraggingOver && 'var(--background2-secondary)'}; */

  border-radius: var(--border-radius2);
`
export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 370px;
  padding: var(--padding-big-sides);
`
