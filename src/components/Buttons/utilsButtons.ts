import { ButtonVariants } from '../../consts'

interface StyleVariant {
  buttonColor: string
  buttonBackground: string
  buttonBackgroundHover: string
  buttonBackgroundActive: string
  buttonColorHover: string
  buttonBorder?: string
  buttonBorderHover?: string
  buttonColorActive?: string
  buttonBorderActive?: string
}

const primaryStyle: StyleVariant = {
  buttonColor: 'var(--background1-main)',
  buttonBackground: 'var(--background4-main)',
  buttonBackgroundHover: 'var(--background-blur2)',
  buttonBackgroundActive: 'var(--background-blur2)',
  buttonColorHover: 'var(--background1-secondary)',
  buttonColorActive: 'var(--background3-main)',
  buttonBorderActive: 'var(--background3-main)'
}
const emptyPrimaryStyle: StyleVariant = {
  buttonColor: 'var(--background4-main)',
  buttonBackground: 'var(--background-gradient1)',
  buttonBackgroundHover: 'var(--background-gradient2)',
  buttonBackgroundActive: 'var(--background-gradient2)',
  buttonColorHover: 'var(--background5-main)',
  buttonColorActive: 'var(--background3-main)',
  buttonBorderActive: 'var(--background4-main)'
}

const secondaryStyle: StyleVariant = {
  buttonColor: 'var(--background4-main)',
  buttonBackground: 'var(--background-blur1)',
  buttonBackgroundHover: 'var(--background1-main)',
  buttonBackgroundActive: 'var(--background1-main)',
  buttonColorHover: 'var(--background1-secondary)',
  buttonColorActive: 'var(--background3-main)',
  buttonBorderActive: 'var(--background3-main)'
}
const emptySecondaryStyle: StyleVariant = {
  buttonColor: 'var(--background4-main)',
  buttonBackground: 'var(--background-blur1)',
  buttonBackgroundHover: 'var(--background1-main)',
  buttonBackgroundActive: 'var(--background1-main)',
  buttonColorHover: 'var(--background3-secondary)',
  buttonColorActive: 'var(--background3-main)',
  buttonBorderActive: 'var(--background3-main)'
}

const successEmptyStyle: StyleVariant = {
  buttonColor: 'var(--success1);',
  buttonBackground: 'transparent;',
  buttonBorder: 'var(--success1);',
  buttonBorderHover: 'var(--success2);',
  buttonBackgroundHover: 'transparent;',
  buttonBackgroundActive: 'transparent;',
  buttonColorHover: 'var(--success2);',
  buttonColorActive: 'var(--success3);',
  buttonBorderActive: 'var(--success3);'
}

const successStyle: StyleVariant = {
  buttonColor: 'var(--background4-main);',
  buttonBackground: 'var(--success1);',
  buttonBorder: 'var(--success1);',
  buttonBorderHover: 'var(--success2);',
  buttonBackgroundHover: 'var(--success2);',
  buttonBackgroundActive: 'var(--success2);',
  buttonColorHover: 'var(--background4-main);',
  buttonColorActive: 'var(--background4-secondary);',
  buttonBorderActive: 'var(--success3);'
}
const infoStyle: StyleVariant = {
  buttonColor: 'var(--background4-main);',
  buttonBackground: 'var(--info1)',
  buttonBackgroundHover: 'var(--info2);',
  buttonBackgroundActive: 'var(--info2);',
  buttonColorHover: 'var(--background4-main);',
  buttonBorder: 'var(--info2);',
  buttonBorderHover: 'var(--info2);',
  buttonColorActive: 'var(--background4-main);',
  buttonBorderActive: 'var(--info3);'
}
const infoEmptyStyle: StyleVariant = {
  buttonColor: 'var(--info1);',
  buttonBackground: 'transparent;',
  buttonBorder: 'var(--info1);',
  buttonBorderHover: 'var(--info3);',
  buttonBackgroundHover: 'transparent;',
  buttonBackgroundActive: 'transparent;',
  buttonColorHover: 'var(--info3);',
  buttonColorActive: 'var(--info2);',
  buttonBorderActive: 'var(--info2);'
}

const warningStyle: StyleVariant = {
  buttonColor: 'var(--warning1);',
  buttonBackground: 'transparent;',
  buttonBorder: 'var(--warning1);',
  buttonBorderHover: 'var(--warning2);',
  buttonBackgroundHover: 'var(--warning1);',
  buttonBackgroundActive: 'var(--warning1);',
  buttonColorHover: 'var(--background1-main);',
  buttonColorActive: 'var(--warning2);',
  buttonBorderActive: 'var(--warning2);'
}
const dangerStyle: StyleVariant = {
  buttonColor: 'var(--background4-main);',
  buttonBackground: 'var(--danger1);',
  buttonBorder: 'var(--danger1);',
  buttonBorderHover: 'var(--danger2);',
  buttonBackgroundHover: 'var(--danger2);',
  buttonBackgroundActive: 'var(--danger2);',
  buttonColorHover: 'var(--background4-main);',
  buttonColorActive: 'var(--background2-main);',
  buttonBorderActive: 'var(--danger3);'
}
const warningEmptyStyle: StyleVariant = {
  buttonColor: 'var(--warning1);',
  buttonBackground: 'transparent;',
  buttonBorder: 'var(--warning1);',
  buttonBorderHover: 'var(--warning2);',
  buttonBackgroundHover: 'transparent;',
  buttonBackgroundActive: 'transparent;',
  buttonColorHover: 'var(--warning2);',
  buttonColorActive: 'var(--warning1);',
  buttonBorderActive: 'var(--warning3);'
}
const dangerEmptyStyle: StyleVariant = {
  buttonColor: 'var(--danger1);',
  buttonBackground: 'transparent;',
  buttonBorder: 'var(--danger1);',
  buttonBorderHover: 'var(--danger2);',
  buttonBackgroundHover: 'transparent;',
  buttonBackgroundActive: 'transparent;',
  buttonColorHover: 'var(--danger2);',
  buttonColorActive: 'var(--danger3);',
  buttonBorderActive: 'var(--danger3);'
}

const defaultStyle: StyleVariant = {
  buttonColor: 'var(--background4-main)',
  buttonBackground: 'var(--background-gradient1)',
  buttonBackgroundHover: 'var(--background-gradient2)',
  buttonBackgroundActive: 'var(--background-gradient2)',
  buttonColorHover: 'var(--background5-main)',
  buttonColorActive: 'var(--background3-main)',
  buttonBorderActive: 'var(--background4-main)'
}

export const handleButtonColor: (
  props: ButtonVariants
) => StyleVariant = props => {
  let style
  switch (props) {
    case ButtonVariants.primary:
      style = primaryStyle
      break

    case ButtonVariants.primaryEmpty:
      style = emptyPrimaryStyle
      break

    case ButtonVariants.secondary:
      style = secondaryStyle
      break

    case ButtonVariants.secondaryEmpty:
      style = emptySecondaryStyle
      break

    case ButtonVariants.success:
      style = successStyle
      break

    case ButtonVariants.successEmpty:
      style = successEmptyStyle
      break

    case ButtonVariants.info:
      style = infoStyle
      break

    case ButtonVariants.infoEmpty:
      style = infoEmptyStyle
      break

    case ButtonVariants.warning:
      style = warningStyle
      break
    case ButtonVariants.warningEmpty:
      style = warningEmptyStyle
      break
    case ButtonVariants.danger:
      style = dangerStyle
      break
    case ButtonVariants.dangerEmpty:
      style = dangerEmptyStyle
      break

    default:
      style = defaultStyle
      break
  }
  return {
    buttonColor: `${style.buttonColor}`,
    buttonBackground: `${style.buttonBackground}`,
    buttonBackgroundHover: `${style.buttonBackgroundHover}`,
    buttonColorHover: `${style.buttonColorHover}`,
    buttonBorder: `${style.buttonBorder}`,
    buttonBorderHover: `${style.buttonBorderHover}`,
    buttonColorActive: `${style.buttonColorActive}`,
    buttonBorderActive: `${style.buttonBorderActive}`,
    buttonBackgroundActive: `${style.buttonBackgroundActive}`
  }
}
