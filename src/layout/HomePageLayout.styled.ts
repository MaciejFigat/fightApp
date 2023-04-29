import styled from 'styled-components'

// ? new Hero section - the grid

export const HeroGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100%;

  margin: 0px;
  overflow: hidden;
  @media (max-width: 1040px) {
    overflow: visible;
  }
`
export const HeroNavigation = styled.div`
  display: flex;
  width: 100%;
  /* border-top: 1px solid var(--background-blur2); */
`
export const HeroNavOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-left: none;
  flex-basis: calc(100% / 5);
  &:first-of-type {
    justify-content: flex-start;
  }
`
export const HeroNavTwo = styled(HeroNavOne)`
  flex-basis: 0;
  flex-grow: 1;
  border-left: 1px solid var(--background-blur2);
`
export const HeroNavOneBig = styled(HeroNavOne)`
  border-left: none;
  flex-basis: calc(100% * 2 / 3);
`

export const HeroMainContainer = styled.div`
  /* it grows into remaining vertical space */
  flex-grow: 1;
`
export const HeroMainArticle = styled.div`
  display: grid;
  /* min-height: 100%; */
  height: 100%;
  min-height: 100%;
  grid-template-columns: 1fr 4fr;
  /* grid-template-rows: 9fr 1fr; */
  grid-template-rows: auto 70px;

  max-height: 70vh;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
    /* grid-template-rows: auto; */
  }
`

export const HeroArticleSection = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--background-blur2);
  /* border-bottom: 1px solid var(--background-blur2); */
  &:first-of-type {
    /* border-bottom: none; */
  }
  &:last-of-type {
    /* border-bottom: 1px solid var(--background-blur2); */
  }
`
export const HeroArticleSideSection = styled(HeroArticleSection)`
  overflow-y: scroll;
  /* max-height: 100%; */

  ::-webkit-scrollbar {
    width: 0.2em;
  }
  /* border-top: 1px solid var(--background-blur2); */
`
export const HeroArticleMainSection = styled(HeroArticleSection)`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.2em;
  }
  border-left: 1px solid var(--background-blur2);
`

export const HeroArticleBottomBigSection = styled(HeroArticleSection)`
  /* border-top: 1px solid var(--background-blur2); */
  border-bottom: 1px solid var(--background-blur2);
  /* border-right: 1px solid var(--background-blur2); */
`
export const HeroArticleBottomSmallSection = styled(HeroArticleSection)`
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
`
export const FooterMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--gap-small);
  /* border-top: 1px solid var(--background-blur2); */
  /* background: var(--background-gradient2); */

  position: sticky;
  bottom: 0;
  height: 62px;
  padding: 0 var(--gap-small);
`
