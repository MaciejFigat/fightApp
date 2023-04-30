import React from 'react'
import {
  ButtonVariants,
  OptionsHomeMenu,
  OptionsOpen,
  SvgIconVariants
} from '../consts'
import { FooterMobile, FooterMobileSecondary } from './HomePageLayout.styled'
import {
  ButtonSmall,
  ButtonSmallGradient
} from '../components/Buttons/Buttons.styled'
import { useAppSelector } from '../reduxState/reduxHooks'
import { BlurredSkinnyText } from '../modules/Bets/components/BetConfirmation.styled'
import SvgIcon from '../modules/misc/SvgIcon/SvgIcon'
import { BetData, ConfirmedBet } from '../interfaces'

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
          <ButtonSmall
            variant={ButtonVariants.INFO}
            onClick={() => setOpenHome(OptionsHomeMenu.FIGHTS)}
          >
            <BlurredSkinnyText> </BlurredSkinnyText> fights
          </ButtonSmall>{' '}
          <ButtonSmall
            variant={ButtonVariants.INFO}
            onClick={() => setOpenHome(OptionsHomeMenu.BETS_TO_CONFIRM)}
          >
            {betsUnconfirmed.length > 0
              ? `${betsUnconfirmed.length} Bets to confirm`
              : 'No bets to confirm'}
          </ButtonSmall>{' '}
          <ButtonSmall
            variant={ButtonVariants.INFO}
            onClick={() => setOpenHome(OptionsHomeMenu.BETS_TO_REGISTER)}
          >
            {betsConfirmed.length > 0
              ? `${betsConfirmed.length} Bets to register`
              : 'No bets to register'}
          </ButtonSmall>
        </FooterMobileSecondary>
      ) : null}
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
    </>
  )
}
export default MobileFooter
