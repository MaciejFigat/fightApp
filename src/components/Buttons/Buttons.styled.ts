import styled from 'styled-components'
import { handleButtonColor } from './utilsButtons'
import { ButtonVariants } from '../../consts'

export const ButtonBig = styled.button<{
  variant: ButtonVariants
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 1.1rem 1.5rem;
  border-radius: var(--border-radius0);
  font-size: 1.25rem;
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
  font-size: 1.1rem;
`
export const ButtonSmall = styled(ButtonBig)`
  padding: 0.65rem 1.25rem 0.6rem;
  font-size: 1rem;
`
export const ButtonVerySmall = styled(ButtonBig)`
  padding: 0.275rem 0.55rem;
  font-size: 0.85rem;
`
export const ButtonSmallGradient = styled.button<{
  variant: ButtonVariants
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
  /* background-position: 0% 50%, 100% 50%; */
  background-position: 0 100%, 100% 100%;
  background-size: 62% 10%;
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
`
