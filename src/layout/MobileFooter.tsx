import React from 'react'
import {
  ButtonVariants,
  OptionsHomeMenu,
  OptionsOpen,
  SvgIconVariants,
  TextColor
} from '../consts'
import {
  FooterButtonSecondary,
  FooterMobile,
  FooterMobileSecondary
} from './HomePageLayout.styled'
import { ButtonSmallGradient } from '../components/Buttons/Buttons.styled'
import { useAppSelector } from '../reduxState/reduxHooks'
import SvgIcon from '../modules/misc/SvgIcon/SvgIcon'
import { BetData, ConfirmedBet, EventAllData } from '../interfaces'
import {
  HighlightText,
  HorizontalWrapper,
  RoundAccent
} from '../styles/misc.styles'
import { motion } from 'framer-motion'

interface MobileFooterProps {
  setOpenHome: React.Dispatch<React.SetStateAction<OptionsHomeMenu>>
  setOpen: React.Dispatch<React.SetStateAction<OptionsOpen>>
  open: OptionsOpen
}

const MobileFooter: React.FC<MobileFooterProps> = ({
  setOpen,
  setOpenHome,
  open
}) => {
  const currentEvent: EventAllData | null = useAppSelector(
    state => state.events.currentEvent
  )
  const { Fights } = currentEvent || ({} as EventAllData)

  const betsUnconfirmed: BetData[] = useAppSelector(
    state => state.bets.betsUnconfirmed
  )

  const betsConfirmed: ConfirmedBet[] = useAppSelector(
    state => state.bets.betsConfirmed
  )
  return (
    <>
      {open === OptionsOpen.HOME ? (
        <FooterMobileSecondary>
          <FooterButtonSecondary
            onClick={() => setOpenHome(OptionsHomeMenu.FIGHTS)}
            disabled={Fights && Fights.length > 0 ? false : true}
          >
            <HighlightText color={TextColor.INFO}>
              <HorizontalWrapper>
                <RoundAccent
                  $invisible={Fights && Fights.length > 0 ? false : true}
                >
                  {' '}
                  {Fights && Fights.length > 0 ? `${Fights.length}` : null}{' '}
                </RoundAccent>
                {Fights && Fights.length > 0
                  ? `Fights in the event`
                  : 'No fights in the event'}
              </HorizontalWrapper>
            </HighlightText>
          </FooterButtonSecondary>
          <FooterButtonSecondary
            onClick={() => setOpenHome(OptionsHomeMenu.BETS_TO_CONFIRM)}
            disabled={betsUnconfirmed.length > 0 ? false : true}
          >
            <HighlightText color={TextColor.WARNING}>
              <HorizontalWrapper as={motion.div} layout='preserve-aspect'>
                <RoundAccent
                  as={motion.div}
                  layout
                  $invisible={betsUnconfirmed.length > 0 ? false : true}
                >
                  {' '}
                  {betsUnconfirmed.length > 0
                    ? `${betsUnconfirmed.length}`
                    : null}{' '}
                </RoundAccent>
                {betsUnconfirmed.length > 0
                  ? `Bets to confirm`
                  : 'No bets to confirm'}
              </HorizontalWrapper>
            </HighlightText>
          </FooterButtonSecondary>
          <FooterButtonSecondary
            onClick={() => setOpenHome(OptionsHomeMenu.BETS_TO_REGISTER)}
            disabled={betsConfirmed.length > 0 ? false : true}
          >
            <HighlightText color={TextColor.SUCCESS}>
              <HorizontalWrapper as={motion.div} layout='preserve-aspect'>
                <RoundAccent
                  as={motion.div}
                  layout
                  $invisible={betsConfirmed.length > 0 ? false : true}
                >
                  {' '}
                  {betsConfirmed.length > 0
                    ? `${betsConfirmed.length}`
                    : null}{' '}
                </RoundAccent>
                {betsConfirmed.length > 0
                  ? `Bets to register`
                  : 'No bets to register'}
              </HorizontalWrapper>
            </HighlightText>
          </FooterButtonSecondary>
        </FooterMobileSecondary>
      ) : null}
      <FooterMobile>
        <ButtonSmallGradient
          variant={ButtonVariants.PRIMARY_EMPTY}
          onClick={() => setOpen(OptionsOpen.HOME)}
          $active={open === OptionsOpen.HOME}
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
          $active={open === OptionsOpen.EVENTS}
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
          $active={open === OptionsOpen.SEARCH}
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
          $active={open === OptionsOpen.MY_BETS}
        >
          <SvgIcon
            variant={SvgIconVariants.COINS}
            contentAfter='My Bets'
            showContent
          />
        </ButtonSmallGradient>
      </FooterMobile>
    </>
  )
}
export default MobileFooter
