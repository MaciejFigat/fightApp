import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import {
  Wrapper,
  Form,
  Input,
  LoginContainer,
  LoginTextWrapper,
  LoginWrapper,
  FormLabel,
  LoginTextLink,
  LoginTitleHeader,
  LoginInputsWrapper
} from './UserLogin.styled'
import { useAppDispatch } from '../../reduxState/reduxHooks'
import { createUser } from '../../reduxState/stateSlices/users/userSlice'
import useRedirectLoggedListener from '../utils/customHooks/useRedirectListenerLogged'
import { Link } from 'react-router-dom'
import { ButtonBig } from '../../components/Buttons/Buttons.styled'
import { ButtonVariants, TextColor } from '../../consts'
import { AppDispatch } from '../../reduxState/store'
import {
  HighlightText,
  HorizontalLineBottomLight,
  HorizontalWrapper
} from '../../styles/misc.styles'
import {
  validateEmail,
  validatePassword,
  validateUsername
} from './functions/validateForm'
interface UserRegisterProps {}

const UserRegister: React.FC<UserRegisterProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  useRedirectLoggedListener()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [usernameError, setUsernameError] = useState('')

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setUser(prevUser => ({ ...prevUser, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    dispatch(createUser(user))
  }
  useEffect(() => {
    setUsernameError(validateUsername(user.name))
  }, [user.name])
  useEffect(() => {
    setEmailError(validateEmail(user.email))
  }, [user.email])

  useEffect(() => {
    setPasswordError(validatePassword(user.password))
  }, [user.password])
  return (
    <LoginContainer>
      <Wrapper>
        <LoginWrapper>
          <LoginTitleHeader>Create a FightBet account</LoginTitleHeader>
          <Form onSubmit={handleSubmit}>
            <LoginInputsWrapper>
              <FormLabel
                htmlFor='name'
                $hasError={usernameError ? true : false}
              >
                {usernameError === '' ? 'Username' : usernameError}
              </FormLabel>
              <Input
                type='name'
                name='name'
                id='name'
                value={user.name}
                onChange={handleInputChange}
              />
            </LoginInputsWrapper>
            <LoginInputsWrapper>
              <FormLabel htmlFor='email' $hasError={emailError ? true : false}>
                {' '}
                {emailError === '' ? 'Email address' : emailError}
              </FormLabel>
              <Input
                type='email'
                name='email'
                id='email'
                value={user.email}
                onChange={handleInputChange}
              />
            </LoginInputsWrapper>
            <LoginInputsWrapper>
              <FormLabel
                htmlFor='password'
                $hasError={passwordError ? true : false}
              >
                {passwordError === '' ? 'Password' : passwordError}
              </FormLabel>
              <Input
                type='password'
                name='password'
                id='password'
                value={user.password}
                onChange={handleInputChange}
              />
            </LoginInputsWrapper>
            <ButtonBig
              type='submit'
              variant={ButtonVariants.SUCCESS}
              data-testid='create-account-button'
            >
              Create account
            </ButtonBig>
          </Form>
          <LoginTextWrapper>
            <HorizontalLineBottomLight />
            <LoginTextLink>
              <HorizontalWrapper>
                Back to
                <Link to='/login'>
                  <HighlightText color={TextColor.INFO}>
                    login screen
                  </HighlightText>
                </Link>
              </HorizontalWrapper>
            </LoginTextLink>

            <HorizontalLineBottomLight />
            <LoginTextLink>
              <HorizontalWrapper>
                <Link to='/'>
                  {' '}
                  <HighlightText color={TextColor.INFO}>
                    Back to home page
                  </HighlightText>
                </Link>
              </HorizontalWrapper>
            </LoginTextLink>
            <LoginTextLink>
              After filling out the above form, an email with instructions on
              how to activate your account will be sent
            </LoginTextLink>
          </LoginTextWrapper>
        </LoginWrapper>
      </Wrapper>
    </LoginContainer>
  )
}
export default UserRegister
