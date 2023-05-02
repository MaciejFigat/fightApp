import styled from 'styled-components'

export const DragColContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* background: brown; */
  max-width: 1280px;
  gap: var(--gap-big);
  /* gap: 100px; */
  padding: var(--padding-big);
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
  @media (max-width: 1040px) {
    max-width: 600px;
    justify-content: space-around;
    width: 600px;
    /* background: brown; */
  }
  @media (max-width: 610px) {
    max-width: 100%;
    padding: var(--gap-medium) 0;
  }
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
  border-bottom-left-radius: var(--border-radius1);
  border-bottom-right-radius: var(--border-radius1);

  padding-top: var(--gap-big);
  @media (max-width: 1040px) {
    min-height: 150px;
  }
`
export const HeaderWrapper = styled.div`
  width: 100%;
  max-width: 370px;
  padding: var(--padding-big-sides);
`

export const BetListHeader = styled.div<{ minHeight?: string }>`
  border-bottom: 1px solid var(--background-blur2);
  margin-top: var(--gap-big);
  padding: var(--padding-big);
  font-size: var(--font-size-medium);
  border-top-left-radius: var(--border-radius1);
  border-top-right-radius: var(--border-radius1);
  background: var(--background3-main);
  min-height: ${({ minHeight }) => (minHeight ? minHeight : 'fit-content')};

  @media (max-width: 610px) {
    width: 100vw;
    font-size: var(--font-size-small);
    padding-left: var(--gap-small);
    padding-right: var(--gap-small);
    gap: var(--gap-small);
  }
`
export const FightListHeader = styled(BetListHeader)`
  display: grid;
  place-items: center;
  gap: var(--gap-big);
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
export const MainListHeaderGrey = styled(MainListHeader)`
  background: var(--background2-main);

  @media (min-width: 1040px) {
    min-width: 600px;
  }
`
export const BetContainerMobile = styled.div`
  gap: var(--gap-medium);
  @media (max-width: 760px) {
    width: 100%;
  }
`
