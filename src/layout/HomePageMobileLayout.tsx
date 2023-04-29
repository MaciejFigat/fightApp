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
  FooterMobile
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
  leftColumn?: React.ReactNode
  rightColumn?: React.ReactNode
  bottomLeft?: React.ReactNode
  bottomRight?: React.ReactNode
}

const HomePageMobileLayout: React.FC<HomePageMobileLayoutProps> = ({
  navigationRight,
  navigationMiddle,
  navigationLeft,
  leftColumn,
  rightColumn,
  bottomLeft,
  bottomRight
}) => {
  const [open, setOpen] = useState(false)
  return (
    <HeroGridWrapper>
      <HeroNavigation>
        <HeroNavTwo>
          {navigationLeft ? navigationLeft : null}
          {navigationMiddle ? navigationMiddle : null}{' '}
          {navigationRight ? navigationRight : null}
        </HeroNavTwo>
      </HeroNavigation>
      <HeroMainContainer>
        <HeroMainArticle>
          {open && rightColumn ? rightColumn : null}
          {!open && leftColumn ? leftColumn : null}

          <FooterMobile>
            <ButtonSmallGradient
              variant={ButtonVariants.PRIMARY_EMPTY}
              onClick={() => setOpen(!open)}
            >
              <SvgIcon variant={SvgIconVariants.HOME} />

              {/* {open ? 'O.O' : 'T.T'} */}
            </ButtonSmallGradient>
            <ButtonSmallGradient
              variant={ButtonVariants.SECONDARY_EMPTY}
              onClick={() => setOpen(!open)}
            >
              <SvgIcon variant={SvgIconVariants.STORE} />
              {/* {open ? 'O.O' : 'T.T'} */}
            </ButtonSmallGradient>
            <ButtonSmallGradient
              variant={ButtonVariants.PRIMARY}
              onClick={() => setOpen(!open)}
            >
              <SvgIcon variant={SvgIconVariants.SEARCH} />
            </ButtonSmallGradient>
            <ButtonSmallGradient
              variant={ButtonVariants.SECONDARY}
              onClick={() => setOpen(!open)}
            >
              <SvgIcon
                variant={SvgIconVariants.COINS}
                contentAfter='Hello'
                showContent
              />
              {/* {open ? 'O.O' : 'T.T'} */}
            </ButtonSmallGradient>
          </FooterMobile>
        </HeroMainArticle>
      </HeroMainContainer>

      {bottomLeft ? bottomLeft : null}
      {bottomRight ? bottomRight : null}
    </HeroGridWrapper>
  )
}
export default HomePageMobileLayout
