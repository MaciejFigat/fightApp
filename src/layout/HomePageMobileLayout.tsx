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
  FooterMobile,
  FooterMobileSecondary,
  HomeContainer
} from './HomePageLayout.styled'
import {
  ButtonSmall,
  ButtonSmallGradient
} from '../components/Buttons/Buttons.styled'
import { ButtonVariants, SvgIconVariants } from '../consts'
import SvgIcon from '../modules/misc/SvgIcon/SvgIcon'

interface HomePageMobileLayoutProps {
  navigationRight?: React.ReactNode
  navigationLeft?: React.ReactNode
  navigationMiddle?: React.ReactNode
}

const HomePageMobileLayout: React.FC<HomePageMobileLayoutProps> = ({
  navigationLeft,
  navigationMiddle,
  navigationRight
}) => {
  enum OptionsOpen {
    HOME,
    EVENTS,
    SEARCH,
    MY_BETS
  }

  const [open, setOpen] = useState<OptionsOpen>(OptionsOpen.HOME)
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        <HeroNavTwo>
          {' '}
          {navigationLeft ? navigationLeft : null}
          {navigationMiddle ? navigationMiddle : null}{' '}
          {navigationRight ? navigationRight : null}
        </HeroNavTwo>
      </HeroNavigation>
      <HeroMainContainer>
        <HeroMainArticle>
          {open === OptionsOpen.SEARCH && 'search'}
          {open === OptionsOpen.HOME && <HomeContainer>'Home'</HomeContainer>}
          {open === OptionsOpen.MY_BETS && 'My bets'}
          {open === OptionsOpen.EVENTS && 'Events'}
          {open === OptionsOpen.HOME && (
            <FooterMobileSecondary>
              <ButtonSmall variant={ButtonVariants.INFO}>fights</ButtonSmall>{' '}
              <ButtonSmall variant={ButtonVariants.WARNING}>
                Bets to confirm{' '}
              </ButtonSmall>{' '}
              <ButtonSmall variant={ButtonVariants.INFO}>
                Bets to register{' '}
              </ButtonSmall>
            </FooterMobileSecondary>
          )}
          <FooterMobile>
            <ButtonSmallGradient
              variant={ButtonVariants.PRIMARY_EMPTY}
              onClick={() => setOpen(OptionsOpen.HOME)}
            >
              <SvgIcon
                variant={SvgIconVariants.HOME}
                contentAfter='Home'
                showContent
              />
            </ButtonSmallGradient>
            <ButtonSmallGradient
              variant={ButtonVariants.SECONDARY_EMPTY}
              onClick={() => setOpen(OptionsOpen.EVENTS)}
            >
              <SvgIcon
                variant={SvgIconVariants.STORE}
                contentAfter='Events'
                showContent
              />
            </ButtonSmallGradient>
            <ButtonSmallGradient
              variant={ButtonVariants.PRIMARY}
              onClick={() => setOpen(OptionsOpen.SEARCH)}
            >
              <SvgIcon
                variant={SvgIconVariants.SEARCH}
                contentAfter='Search'
                showContent
              />
            </ButtonSmallGradient>
            <ButtonSmallGradient
              variant={ButtonVariants.SECONDARY}
              onClick={() => setOpen(OptionsOpen.MY_BETS)}
            >
              <SvgIcon
                variant={SvgIconVariants.COINS}
                contentAfter='My Bets'
                showContent
              />
            </ButtonSmallGradient>
          </FooterMobile>
        </HeroMainArticle>
      </HeroMainContainer>
    </HeroGridWrapper>
  )
}
export default HomePageMobileLayout
