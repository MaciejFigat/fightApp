import styled from 'styled-components'

export const HeroGridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 100%;
  margin: 0px;
  max-width: 1400px;
  overflow: hidden;
  @media (max-width: 1040px) {
    display: none;
  }
`
export const HeroGridWrapperMobile = styled(HeroGridWrapper)`
  overflow: hidden;

  ::-webkit-scrollbar {
    width: 0;
  }
  @media (max-width: 1040px) {
    display: flex;
  }
  @media (min-width: 1040px) {
    display: none;
  }
`
export const HeroNavigation = styled.div`
  display: flex;
  width: 100%;
  border-left: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  max-height: 50px;
  min-height: 50px;
`
export const HeroNavOne = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border-left: none;
  flex-basis: calc(100% / 4);
  &:first-of-type {
    justify-content: flex-start;
  }
`
export const HeroNavTwo = styled(HeroNavOne)`
  flex-basis: 0;
  flex-grow: 1;
`
export const HeroNavThree = styled(HeroNavOne)`
  flex-basis: 0;
  flex-grow: 1;

  border-right: 1px solid var(--background-blur2);
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
  border-left: 1px solid var(--background-blur2);
  border-right: 1px solid var(--background-blur2);
  height: 100%;
  min-height: 100%;
  grid-template-columns: 1fr 3fr;

  grid-template-rows: auto 70px;

  max-height: 70vh;

  @media (max-width: 1040px) {
    grid-template-columns: 1fr;
  }
`

export const HeroArticleSection = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  padding: 0;
  margin: 0;
  border-top: 1px solid var(--background-blur2);
`
export const HeroArticleSideSection = styled(HeroArticleSection)`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.2em;
  }
`
export const HeroArticleMainSection = styled(HeroArticleSection)`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0.2em;
  }
  border-left: 1px solid var(--background-blur2);
`

export const HeroArticleBottomBigSection = styled(HeroArticleSection)`
  border-bottom: 1px solid var(--background-blur2);
`
export const HeroArticleBottomSmallSection = styled(HeroArticleSection)`
  border-left: 1px solid var(--background-blur2);
  border-bottom: 1px solid var(--background-blur2);
`

export const FooterMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: var(--gap-small);

  background: var(--background1-main);
  position: sticky;
  bottom: 0;
  height: 70px;
  padding: 0 var(--gap-small);
  @media (max-width: 610px) {
    gap: 2px;
  }
`
export const MobileHomeContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  min-height: 82vh;
`
export const FooterMobileSecondary = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: var(--gap-small);
  position: sticky;
  bottom: 0px;
  height: 62px;
  margin: 0;
  padding: 0 var(--gap-small);
`
export const FooterButtonSecondary = styled.button`
  display: grid;
  place-items: center center;
  cursor: pointer;
  font-size: var(--font-size-medium);
  border: none;
  border-radius: var(--border-radius0);
  color: var(--background4-main);
  background: var(--background-blur0);
  transition: all 0.3s ease-in-out;
  &:hover {
    background: var(--background-blur1);
  }
  &:active {
    background: var(--background-blur2);
  }
`
