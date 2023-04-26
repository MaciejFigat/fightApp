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
    transition: all 0.3s ease-out;
    color: ${props => handleButtonColor(props.variant).buttonColor};
  }

  &:hover {
    background: ${props =>
      handleButtonColor(props.variant).buttonBackgroundHover};
    transition: all 0.3s ease-out;
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
