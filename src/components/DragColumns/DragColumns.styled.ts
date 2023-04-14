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
  height: 50px;
  margin-bottom: 10px;
  border: 1px solid var(--background4-main);
  opacity: ${({ isDragging }) => isDragging && '0.9'};
  background: ${({ isDragging }) => isDragging && 'var(--background2-main)'};
  color: ${({ isDragging }) => isDragging && 'var(--background1-main)'};
`

export const DroppableList = styled.div<{ isDraggingOver?: boolean }>`
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? 'var(--background-blur1)' : 'var(--background1-main)'};

  border-radius: '20px';
`
