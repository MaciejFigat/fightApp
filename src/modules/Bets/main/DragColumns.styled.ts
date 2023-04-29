import styled from 'styled-components'

export const DragColContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  overflow: hidden;
  max-width: 1280px;
  gap: var(--gap-big);
  grid-template-columns: minmax(380px, 600px) 400px;
`
export const MainColumn = styled.div`
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  /* border-right: 1px solid var(--background-blur2); */
`
export const SideColumn = styled.div`
  /* border-right: 1px solid var(--background-blur2); */
  ::-webkit-scrollbar {
    display: none;
  }
  overflow-y: scroll;
  background: var(--background2-main);
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
  margin-bottom: var(--gap-big);
  &:first-of-type {
    /* margin-top: var(--gap-big); */
  }
  border: 1px solid var(--background-blur1);
  transition: 0.2s ease;
  transition: border-color 0.3s ease;
  border-color: ${({ isDragging }) => isDragging && 'var(--background-blur3)'};
  opacity: ${({ isDragging }) => isDragging && '0.9'};
  background: ${({ isDragging }) => isDragging && 'var(--background2-main)'};
  color: ${({ isDragging }) => isDragging && 'var(--background1-secondary)'};
`

export const DroppableList = styled.div<{
  isDraggingOver?: boolean
  listEmpty?: boolean
  width?: string
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => (width ? width : null)};
  @media (max-width: 1220px) {
    width: ${({ width }) => (width ? '100%' : null)};
  }
  min-height: 150px;

  padding-top: var(--padding-small);
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

  transition: background 0.3s ease;
  background: ${({ isDraggingOver }) =>
    isDraggingOver ? 'var(--background-blur0)' : 'var(--background2-main)'};

  /* border-radius: var(--border-radius1); */
  border-bottom-left-radius: var(--border-radius1);
  border-bottom-right-radius: var(--border-radius1);
  /* background: red; */
  padding-top: var(--gap-big);
`
export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 370px;
  padding: var(--padding-big-sides);
`

export const BetListHeader = styled.div`
  border-bottom: 1px solid var(--background-blur2);
  margin-top: var(--gap-big);
  padding: var(--padding-big);
  font-size: var(--font-size-big);
  border-top-left-radius: var(--border-radius1);
  border-top-right-radius: var(--border-radius1);
  background: var(--background3-main);
  @media (max-width: 1040px) {
    font-size: var(--font-size-medium);
  }
`
export const FightListHeader = styled(BetListHeader)`
  border-top-left-radius: var(--border-radius0);
  border-top-right-radius: var(--border-radius0);
  width: 100%;
  max-width: 600px;
  font-weight: 500;
`
export const MainListHeader = styled(FightListHeader)`
  background: var(--background5-main);
  margin-bottom: var(--gap-small);

  font-weight: 700;
`
