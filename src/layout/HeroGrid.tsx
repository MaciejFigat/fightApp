import React from 'react'

import {
  HeroArticleBigSection,
  HeroArticleBottomBigSection,
  HeroArticleBottomSmallSection,
  HeroArticleSmallSection,
  HeroGridWrapper,
  HeroMainArticle,
  HeroMainContainer,
  HeroNavigation,
  HeroNavOne,
  HeroNavTwo
} from './HeroSection.styled'

interface HeroGridProps {}

const HeroGrid: React.FC<HeroGridProps> = () => {
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        <HeroNavOne>Nav one</HeroNavOne>
        {/* <HeroNavOne>2 </HeroNavOne> */}
        <HeroNavTwo> 3</HeroNavTwo>
        <HeroNavTwo>4 </HeroNavTwo>
      </HeroNavigation>

      <HeroMainContainer>
        <HeroMainArticle>
          <HeroArticleBigSection>Big Section</HeroArticleBigSection>
          <HeroArticleSmallSection>222</HeroArticleSmallSection>
          {/* <HeroArticleSmallSection>222</HeroArticleSmallSection> */}
          <HeroArticleBottomBigSection>
            {' '}
            HeroArticleBottomBigSection 1
          </HeroArticleBottomBigSection>
          <HeroArticleBottomSmallSection>
            {' '}
            HeroArticleBottomSmallSection 2
          </HeroArticleBottomSmallSection>
        </HeroMainArticle>
      </HeroMainContainer>
    </HeroGridWrapper>
  )
}
export default HeroGrid
