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
import DisciplineDropdown from '../components/Dropdowns/DisciplineDropdown'

interface HeroGridProps {}

const HeroGrid: React.FC<HeroGridProps> = () => {
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        <HeroNavOne>
          <DisciplineDropdown />
        </HeroNavOne>

        <HeroNavTwo> 3</HeroNavTwo>
        {/* <HeroNavTwo>4 </HeroNavTwo> */}
      </HeroNavigation>

      <HeroMainContainer>
        <HeroMainArticle>
          <HeroArticleSideSection>
            <EventsScreen />
          </HeroArticleSideSection>
          <HeroArticleMainSection>
            {/* <HomeScreen /> */}
            <DragColumns />
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
