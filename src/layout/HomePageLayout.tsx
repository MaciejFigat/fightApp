import React from 'react'
import {
  HeroArticleSideSection,
  HeroArticleBottomBigSection,
  HeroArticleBottomSmallSection,
  HeroArticleMainSection,
  HeroGridWrapper,
  HeroMainArticle,
  HeroMainContainer,
  HeroNavigation,
  HeroNavOne,
  HeroNavTwo
} from './HomePageLayout.styled'

interface HomePageLayoutProps {
  navigationRight?: React.ReactNode
  navigationLeft?: React.ReactNode
  navigationMiddle?: React.ReactNode
  leftColumn?: React.ReactNode
  rightColumn?: React.ReactNode
  bottomLeft?: React.ReactNode
  bottomRight?: React.ReactNode
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({
  navigationRight,
  navigationMiddle,
  navigationLeft,
  leftColumn,
  rightColumn,
  bottomLeft,
  bottomRight
}) => {
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        <HeroNavOne>{navigationLeft ? navigationLeft : null}</HeroNavOne>
        <HeroNavTwo>{navigationMiddle ? navigationMiddle : null}</HeroNavTwo>
        <HeroNavTwo>{navigationRight ? navigationRight : null}</HeroNavTwo>
      </HeroNavigation>

      <HeroMainContainer>
        <HeroMainArticle>
          <HeroArticleSideSection>
            {leftColumn ? leftColumn : null}
          </HeroArticleSideSection>
          <HeroArticleMainSection>
            {rightColumn ? rightColumn : null}
          </HeroArticleMainSection>

          <HeroArticleBottomBigSection>
            {bottomLeft ? bottomLeft : null}
          </HeroArticleBottomBigSection>
          <HeroArticleBottomSmallSection>
            {bottomRight ? bottomRight : null}
          </HeroArticleBottomSmallSection>
        </HeroMainArticle>
      </HeroMainContainer>
    </HeroGridWrapper>
  )
}
export default HomePageLayout
