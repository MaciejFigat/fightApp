import React, { useState } from 'react'
import {
  HeroMainArticle,
  HeroMainContainer,
  HeroNavigation,
  HeroNavTwo,
  HeroGridWrapperMobile
} from './HomePageLayout.styled'

import { OptionsHomeMenu, OptionsOpen } from '../consts'

import FightsAndBetsMobile from '../modules/Bets/main/mobile/FightsAndBetsMobile'
import EventsColumnMobile from '../modules/misc/EventsDisplay/EventsColumnMobile'

import MobileFooter from './MobileFooter'

interface HomePageMobileLayoutProps {
  navigationRight?: React.ReactNode
  navigationLeft?: React.ReactNode
  navigationMiddle?: React.ReactNode
  optionOneContent?: React.ReactNode
  optionTwoContent?: React.ReactNode
}

const HomePageMobileLayout: React.FC<HomePageMobileLayoutProps> = ({
  navigationLeft,
  navigationMiddle,
  navigationRight,
  optionOneContent,
  optionTwoContent
}) => {
  const [open, setOpen] = useState<OptionsOpen>(OptionsOpen.HOME)
  const [openHome, setOpenHome] = useState<OptionsHomeMenu>(
    OptionsHomeMenu.FIGHTS
  )
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
          {open === OptionsOpen.SEARCH && optionTwoContent}
          {open === OptionsOpen.HOME && <FightsAndBetsMobile open={openHome} />}

          {open === OptionsOpen.MY_BETS && optionOneContent}
          {open === OptionsOpen.EVENTS && (
            <EventsColumnMobile setOpen={setOpen} />
          )}
          <MobileFooter
            setOpen={setOpen}
            open={open}
            setOpenHome={setOpenHome}
          />
        </HeroMainArticle>
      </HeroMainContainer>
    </HeroGridWrapperMobile>
  )
}
export default HomePageMobileLayout
