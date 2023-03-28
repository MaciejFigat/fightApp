import React from 'react'
import SportChoiceScreen from '../screens/SportChoiceScreen'

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
} from './HeroSection.styled'

interface HeroGridProps {}

const HeroGrid: React.FC<HeroGridProps> = () => {
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        <HeroNavOne>Nav one</HeroNavOne>

        <HeroNavTwo> 3</HeroNavTwo>
        <HeroNavTwo>4 </HeroNavTwo>
      </HeroNavigation>

      <HeroMainContainer>
        <HeroMainArticle>
          <HeroArticleSideSection>
            <SportChoiceScreen />
          </HeroArticleSideSection>
          <HeroArticleMainSection>222</HeroArticleMainSection>

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
