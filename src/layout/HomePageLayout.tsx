import React, { useState } from 'react'
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
  HeroNavTwo,
  HeroNavThree
} from './HomePageLayout.styled'
import { OptionsDesktopMenu } from '../consts'
import { GridCenterWrapper } from '../styles/misc.styles'

import HomePageNavButtons from './HomePageNavButtons'

interface HomePageLayoutProps {
  navigationRight?: React.ReactNode
  navigationLeft?: React.ReactNode
  navigationMiddle?: React.ReactNode
  leftColumn?: React.ReactNode
  rightColumn?: React.ReactNode
  rightColumnOptionOne?: React.ReactNode
  rightColumnOptionTwo?: React.ReactNode
  rightColumnOptionThree?: React.ReactNode
  bottomLeft?: React.ReactNode
  bottomRight?: React.ReactNode
  optionOneName?: string
  optionTwoName?: string
  optionThreeName?: string
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({
  navigationRight,
  navigationMiddle,
  navigationLeft,
  leftColumn,
  rightColumn,
  bottomLeft,
  bottomRight,
  rightColumnOptionOne,
  rightColumnOptionTwo,
  rightColumnOptionThree,
  optionOneName,
  optionTwoName,
  optionThreeName
}) => {
  const [open, setOpen] = useState<OptionsDesktopMenu>(
    OptionsDesktopMenu.OPTION_ONE
  )
  return (
    <GridCenterWrapper>
      <HeroGridWrapper>
        <HeroNavigation>
          <HeroNavOne>{navigationLeft ? navigationLeft : null}</HeroNavOne>
          <HeroNavThree>
            <HomePageNavButtons
              open={open}
              setOpen={setOpen}
              optionOneName={optionOneName}
              optionTwoName={optionTwoName}
              optionThreeName={optionThreeName}
            />
          </HeroNavThree>
          <HeroNavThree>
            {navigationMiddle ? navigationMiddle : null}
          </HeroNavThree>
          <HeroNavTwo>{navigationRight ? navigationRight : null}</HeroNavTwo>
        </HeroNavigation>

        <HeroMainContainer>
          <HeroMainArticle>
            <HeroArticleSideSection>
              {leftColumn ? leftColumn : null}
            </HeroArticleSideSection>
            <HeroArticleMainSection>
              {rightColumn ? rightColumn : null}
              {rightColumnOptionOne && open === OptionsDesktopMenu.OPTION_ONE
                ? rightColumnOptionOne
                : null}
              {rightColumnOptionTwo && open === OptionsDesktopMenu.OPTION_TWO
                ? rightColumnOptionTwo
                : null}
              {rightColumnOptionThree &&
              open === OptionsDesktopMenu.OPTION_THREE
                ? rightColumnOptionThree
                : null}
            </HeroArticleMainSection>

            <HeroArticleBottomBigSection>
              {bottomLeft ? bottomLeft : null}
            </HeroArticleBottomBigSection>
            <HeroArticleBottomSmallSection>
              {bottomRight ? bottomRight : ''}
            </HeroArticleBottomSmallSection>
          </HeroMainArticle>
        </HeroMainContainer>
      </HeroGridWrapper>
    </GridCenterWrapper>
  )
}
export default HomePageLayout
