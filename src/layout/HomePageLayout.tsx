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
import { ButtonVariants, OptionsDesktopMenu, SvgIconVariants } from '../consts'
import { GridCenterWrapper, HorizontalWrapper } from '../styles/misc.styles'
import { ButtonSmallGradient } from '../components/Buttons/Buttons.styled'
import SvgIcon from '../modules/misc/SvgIcon/SvgIcon'

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
              {bottomRight ? (
                bottomRight
              ) : (
                <>
                  <HorizontalWrapper>
                    <ButtonSmallGradient
                      variant={ButtonVariants.PRIMARY_EMPTY}
                      onClick={() => setOpen(OptionsDesktopMenu.OPTION_ONE)}
                      $active={open === OptionsDesktopMenu.OPTION_ONE}
                    >
                      <SvgIcon
                        variant={SvgIconVariants.HOME}
                        contentAfter={
                          optionOneName ? optionOneName : 'Option 1'
                        }
                        showContent
                      />{' '}
                    </ButtonSmallGradient>
                    <ButtonSmallGradient
                      variant={ButtonVariants.PRIMARY}
                      onClick={() => setOpen(OptionsDesktopMenu.OPTION_TWO)}
                      $active={open === OptionsDesktopMenu.OPTION_TWO}
                    >
                      <SvgIcon
                        variant={SvgIconVariants.SEARCH}
                        contentAfter={
                          optionTwoName ? optionTwoName : 'Option 2'
                        }
                        showContent
                      />{' '}
                    </ButtonSmallGradient>
                    <ButtonSmallGradient
                      variant={ButtonVariants.SECONDARY_EMPTY}
                      onClick={() => setOpen(OptionsDesktopMenu.OPTION_THREE)}
                      $active={open === OptionsDesktopMenu.OPTION_THREE}
                    >
                      <SvgIcon
                        variant={SvgIconVariants.COINS}
                        contentAfter={
                          optionThreeName ? optionThreeName : 'Option 3'
                        }
                        showContent
                      />{' '}
                    </ButtonSmallGradient>
                  </HorizontalWrapper>
                </>
              )}
            </HeroArticleBottomSmallSection>
          </HeroMainArticle>
        </HeroMainContainer>
      </HeroGridWrapper>
    </GridCenterWrapper>
  )
}
export default HomePageLayout
