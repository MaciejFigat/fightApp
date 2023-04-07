import React from 'react'
import HomeScreen from '../screens/HomeScreen'
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
import EventsScreen from '../screens/EventsScreen'
import DragColumns from '../components/DragColumns/DragColumns'

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
          <HeroArticleMainSection>
            {/* <HomeScreen /> */}
            <DragColumns />
            {/* <EventsScreen /> */}
          </HeroArticleMainSection>

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
