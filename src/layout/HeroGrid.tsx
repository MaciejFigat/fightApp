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
} from './HeroSection.styled'
import EventsScreen from '../screens/EventsScreen'
import DragColumns from '../components/DragColumns/DragColumns'
import DisciplineDropdown from '../components/Dropdowns/DisciplineDropdown'
import { Link } from 'react-router-dom'
import { ButtonSmall } from '../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../consts'
import CoinDisplay from '../components/CoinDisplay/CoinDisplay'

interface HeroGridProps {}

const HeroGrid: React.FC<HeroGridProps> = () => {
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        <HeroNavOne>
          <DisciplineDropdown />
        </HeroNavOne>

        <HeroNavTwo>
          <CoinDisplay />
        </HeroNavTwo>
        <HeroNavTwo>
          <ButtonSmall variant={ButtonVariants.info}>
            <Link to='/login'>Login</Link>
          </ButtonSmall>{' '}
          <ButtonSmall variant={ButtonVariants.success}>
            <Link to='/register'>Register</Link>
          </ButtonSmall>{' '}
        </HeroNavTwo>
      </HeroNavigation>

      <HeroMainContainer>
        <HeroMainArticle>
          {/* Left side section */}
          <HeroArticleSideSection>
            <EventsScreen />
          </HeroArticleSideSection>
          <HeroArticleMainSection>
            <DragColumns />
          </HeroArticleMainSection>

          <HeroArticleBottomBigSection>
            {' '}
            {/* HeroArticleBottomBigSection 1 */}
          </HeroArticleBottomBigSection>
          <HeroArticleBottomSmallSection>
            {' '}
            {/* HeroArticleBottomSmallSection 2 */}
          </HeroArticleBottomSmallSection>
        </HeroMainArticle>
      </HeroMainContainer>
    </HeroGridWrapper>
  )
}
export default HeroGrid
