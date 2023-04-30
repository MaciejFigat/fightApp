import React, { useState } from 'react'
import {
  HeroMainArticle,
  HeroMainContainer,
  HeroNavigation,
  HeroNavTwo,
  FooterMobile,
  HeroGridWrapperMobile
} from './HomePageLayout.styled'
import { ButtonSmallGradient } from '../components/Buttons/Buttons.styled'
import { ButtonVariants, OptionsOpen, SvgIconVariants } from '../consts'
import SvgIcon from '../modules/misc/SvgIcon/SvgIcon'

import FightsAndBetsMobile from '../modules/Bets/main/FightsAndBetsMobile'
import { ScrollYWrapper } from '../styles/misc.styles'
import EventsColumnMobile from '../modules/misc/EventsDisplay/EventsColumnMobile'

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
  const [open, setOpen] = useState<OptionsOpen>(OptionsOpen.HOME)
  return (
    <HeroGridWrapperMobile>
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
          {open === OptionsOpen.HOME && (
            <ScrollYWrapper>
              <FightsAndBetsMobile />
            </ScrollYWrapper>
          )}
          {open === OptionsOpen.MY_BETS && 'My bets'}
          {open === OptionsOpen.EVENTS && (
            <ScrollYWrapper>
              <EventsColumnMobile setOpen={setOpen} />
            </ScrollYWrapper>
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
    </HeroGridWrapperMobile>
  )
}
export default HomePageMobileLayout
