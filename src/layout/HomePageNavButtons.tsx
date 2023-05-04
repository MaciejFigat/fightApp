import React from 'react'
import {
  HorizontalWrapper,
  HorizontalWrapperCenter
} from '../styles/misc.styles'
import {
  ButtonInconspicuous,
  ButtonUnderline,
  ButtonUnderlineTransparent
} from '../components/Buttons/Buttons.styled'
import { OptionsDesktopMenu } from '../consts'

interface HomePageNavButtonsProps {
  setOpen: React.Dispatch<React.SetStateAction<OptionsDesktopMenu>>
  open: OptionsDesktopMenu
  optionOneName?: string
  optionTwoName?: string
  optionThreeName?: string
}

const HomePageNavButtons: React.FC<HomePageNavButtonsProps> = ({
  open,
  setOpen,
  optionOneName,
  optionTwoName,
  optionThreeName
}) => {
  return (
    <HorizontalWrapperCenter>
      <HorizontalWrapper>
        <ButtonInconspicuous
          onClick={() => setOpen(OptionsDesktopMenu.OPTION_ONE)}
          $active={open === OptionsDesktopMenu.OPTION_ONE}
        >
          {optionOneName ? optionOneName : 'Option 1'}
        </ButtonInconspicuous>{' '}
        {open === OptionsDesktopMenu.OPTION_ONE ? (
          <ButtonUnderline layoutId='chosen' />
        ) : (
          <ButtonUnderlineTransparent layoutId='notVisible' />
        )}
      </HorizontalWrapper>
      <HorizontalWrapper>
        {' '}
        <ButtonInconspicuous
          onClick={() => setOpen(OptionsDesktopMenu.OPTION_TWO)}
          $active={open === OptionsDesktopMenu.OPTION_TWO}
        >
          {optionTwoName ? optionTwoName : 'Option 2'}
        </ButtonInconspicuous>{' '}
        {open === OptionsDesktopMenu.OPTION_TWO ? (
          <ButtonUnderline layoutId='chosen' />
        ) : (
          <ButtonUnderlineTransparent layoutId='notVisible' />
        )}
      </HorizontalWrapper>
      <HorizontalWrapper>
        <ButtonInconspicuous
          onClick={() => setOpen(OptionsDesktopMenu.OPTION_THREE)}
          $active={open === OptionsDesktopMenu.OPTION_THREE}
        >
          {optionThreeName ? optionThreeName : 'Option 3'}
        </ButtonInconspicuous>{' '}
        {open === OptionsDesktopMenu.OPTION_THREE ? (
          <ButtonUnderline layoutId='chosen' />
        ) : (
          <ButtonUnderlineTransparent layoutId='notVisible' />
        )}
      </HorizontalWrapper>
    </HorizontalWrapperCenter>
  )
}
export default HomePageNavButtons
