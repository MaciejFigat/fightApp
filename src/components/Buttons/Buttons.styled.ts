import styled from 'styled-components'
import { handleButtonColor } from './utilsButtons'
import { ButtonVariants, TextColor } from '../../consts'
import { motion } from 'framer-motion'

export const ButtonBig = styled.button<{
  variant: ButtonVariants
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1.1rem 1.5rem;
  border-radius: var(--border-radius0);
  font-size: var(--font-size-big);
  font-weight: 600;
  border-left: 1px solid var(--background-blur1);
  border-bottom: 1px solid var(--background-blur1);
  border-right: 1px solid var(--background-blur2);
  border-top: 1px solid var(--background-blur2);

  border-color: ${props =>
    handleButtonColor(props.variant).buttonBorder
      ? handleButtonColor(props.variant).buttonBorder
      : null};

  background: ${props => handleButtonColor(props.variant).buttonBackground};
  color: ${props => handleButtonColor(props.variant).buttonColor};
  transition: all 0.3s ease-out;

  a {
    text-decoration: none;

    color: ${props => handleButtonColor(props.variant).buttonColor};
  }

  &:hover {
    background: ${props =>
      handleButtonColor(props.variant).buttonBackgroundHover};

    border-color: ${props =>
      handleButtonColor(props.variant).buttonBorderHover};
    color: ${props => handleButtonColor(props.variant).buttonColorHover};
    a {
      color: ${props => handleButtonColor(props.variant).buttonColorHover};
    }
  }
  &:active {
    border-color: ${props =>
      handleButtonColor(props.variant).buttonBorderActive};
    background: ${props =>
      handleButtonColor(props.variant).buttonBackgroundActive};
    color: ${props => handleButtonColor(props.variant).buttonColorActive};
    a {
      color: ${props => handleButtonColor(props.variant).buttonColorActive};
    }
  }
`

export const ButtonMedium = styled(ButtonBig)`
  padding: 0.75rem 1.85rem 0.75rem;
  font-size: var(--font-size-medium-plus);
`
export const ButtonSmall = styled(ButtonBig)`
  padding: 0.65rem 1.25rem 0.6rem;
  font-size: var(--font-medium);
`
export const ButtonVerySmall = styled(ButtonBig)`
  padding: 0.275rem 0.55rem;
  font-size: var(--font-size-small-plus);
`
export const ButtonSmallGradient = styled.button<{
  variant: ButtonVariants
  $active?: boolean
}>`
  display: flex;
  align-items: center;
  font-size: var(--font-size-medium);
  justify-content: center;
  cursor: pointer;
  padding: 0.65rem 1.25rem 0.6rem;
  color: ${props => handleButtonColor(props.variant).buttonColor};
  border: 1px solid var(--background-blur1);
  border-radius: var(--border-radius0);
  --p: 10%;
  background: linear-gradient(
      ${props => handleButtonColor(props.variant).buttonBackgroundHover} 0 0
    )
    left / var(--p, 0%) no-repeat;

  background-image: conic-gradient(
      from -135deg at 100% 50%,
      ${props => handleButtonColor(props.variant).buttonBackgroundHover} 90deg,
      ${props => handleButtonColor(props.variant).buttonBackgroundActive} 0
    ),
    conic-gradient(
      from -135deg at 1.2em 50%,
      ${props => handleButtonColor(props.variant).buttonBackgroundHover} 90deg,
      ${props => handleButtonColor(props.variant).buttonBackgroundActive} 0
    );

  background-position: ${({ $active }) =>
    $active ? '0% 50%, 100% 50%' : '0 100%, 100% 100%'};
  background-size: ${({ $active }) =>
    $active ? 'calc(50% + 1.1em) 100%' : '62% 10%'};

  background-repeat: no-repeat;

  transition: background-size 0.4s, background-position 0.4s;

  &:hover {
    background-position: 0% 50%, 100% 50%;
    a {
      color: ${props => handleButtonColor(props.variant).buttonColorHover};
    }
  }
  &:active {
    background-size: calc(50% + 1.1em) 100%;
    --p: 100%;
  }
  a {
    text-decoration: none;

    color: ${props => handleButtonColor(props.variant).buttonColor};
  }
  @media (max-width: 610px) {
    padding: var(--gap-small);
  }
`

export const ButtonInconspicuous = styled.button<{
  $active?: boolean
}>`
  display: flex;
  align-items: center;
  font-size: var(--font-size-medium);
  font-weight: 600;
  justify-content: center;
  cursor: pointer;
  padding: var(--padding-small);
  padding: 0;
  border: none;
  border-radius: var(--border-radius0);
  background: transparent;
  width: 125px;
  color: ${({ $active }) =>
    $active ? `var(--background1-secondary)` : 'var(--background4-main)'};

  transition: all 0.2s ease-out;
  &:hover {
    svg {
      transition: all 0.3s ease-out;
      color: var(--background1-secondary);
    }
  }
  &:active {
    color: var(--background1-secondary);
  }
  a {
    text-decoration: none;
    color: var(--background-secondary);
  }
`
interface TextProps {
  color: TextColor
}
const getColor = (color: TextColor): string => {
  switch (color) {
    case TextColor.SUCCESS:
      return 'var(--success1)'
    case TextColor.INFO:
      return 'var(--info1)'
    case TextColor.WARNING:
      return 'var(--warning1)'
    case TextColor.DANGER:
      return 'var(--danger1)'
    case TextColor.PRIMARY:
      return 'var(--background4-main)'
    case TextColor.SECONDARY:
      return 'var(--background2-main)'
    case TextColor.GOLD:
      return 'var(--gold2)'
    default:
      return 'inherit'
  }
}
export const ButtonInconspicuousSecondary = styled(
  ButtonInconspicuous
)<TextProps>`
  width: 105px;
  font-weight: 600;
  font-size: var(--font-size-medium);
  color: ${({ $active, color }) =>
    $active ? getColor(color) : 'var(--background4-main)'};
  &:active {
    color: ${({ color }) =>
      color ? getColor(color) : 'var(--background4-main)'};
  }
  @media screen and (max-width: 1300px) and (min-width: 1040px) {
    width: 72px;
    font-size: var(--font-size-small-plus);
  }
`

// needs a layoutId='whatever'
export const ButtonUnderline = styled(motion.div)`
  position: absolute;
  position: relative;
  left: -10px;
  z-index: 12;
  height: 20px;
  width: 20px;
  border-radius: 50%;

  background: transparent;
  border: 3px solid var(--background1-secondary);
  background: linear-gradient(
    90deg,
    transparent,
    var(--background-blur0),
    transparent
  );
`
export const ButtonUnderlineSecondary = styled(ButtonUnderline)<TextProps>`
  border-color: ${({ color }) => getColor(color)};
  height: 15px;
  width: 15px;
  @media screen and (max-width: 1300px) and (min-width: 1040px) {
    top: -1px;
    left: -7px;
    width: 10px;
    height: 10px;
  }
`
export const ButtonUnderlineTransparent = styled(ButtonUnderline)`
  background: transparent;
  border-color: transparent;
`
export const ButtonUnderlineTransparentSecondary = styled(
  ButtonUnderlineTransparent
)`
  height: 15px;
  width: 15px;
  @media screen and (max-width: 1300px) and (min-width: 1040px) {
    top: -1px;
    left: -7px;
    width: 10px;
    height: 10px;
  }
`
