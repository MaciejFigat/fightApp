import React, {
  useState,
  ChangeEvent,
  MouseEvent,
  FormEvent,
  useEffect
} from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../reduxState/reduxHooks'
import {
  logout,
  sendUserId,
  sendEmailToResetPassword
} from '../../reduxState/stateSlices/users/userSlice'
import {
  Wrapper,
  Form,
  Input,
  LoginContainer,
  LoginTextWrapper,
  LoginWrapper,
  FormLabel,
  LoginTitleHeader,
  LoginInputsWrapper,
  LoginTextLink
} from './UserLogin.styled'
import useRedirectLoggedListener from '../utils/customHooks/useRedirectListenerLogged'
import { UserInfo } from '../../interfaces'
import { ButtonBig } from '../../components/Buttons/Buttons.styled'
import { ButtonVariants, TextColor } from '../../consts'
import { AppDispatch } from '../../reduxState/store'
import {
  HighlightText,
  HorizontalLineBottomLight,
  HorizontalWrapper
} from '../../styles/misc.styles'
import { validateEmail, validatePassword } from './functions/validateForm'

interface UserLoginProps {}

const UserLogin: React.FC<UserLoginProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const userInfoRedux: UserInfo = useAppSelector(state => state.user.userInfo)

  useRedirectLoggedListener()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userInfo = { email, password }

  const [emailError, setEmailError] = useState<string | null>(null)
  const [passwordError, setPasswordError] = useState<string | null>(null)

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (emailError === '' && passwordError === '') {
      dispatch(sendUserId(userInfo))
      setEmail('')
      setPassword('')
    }
  }

  const logoutHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(logout())
  }
  const userEmail = { email }

  const resetPasswordHandler = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    dispatch(sendEmailToResetPassword(userEmail))
  }
  useEffect(() => {
    if (email !== '') {
      setEmailError(validateEmail(email))
    }
  }, [email])

  useEffect(() => {
    if (password !== '') {
      setPasswordError(validatePassword(password))
    }
  }, [password])

  return (
    <LoginContainer>
      <Wrapper>
        <LoginWrapper>
          <LoginTitleHeader>Log in to FightBet</LoginTitleHeader>
          <Form onSubmit={submitHandler}>
            <LoginInputsWrapper>
              {' '}
              <FormLabel
                htmlFor='email'
                $hasError={emailError ? true : false}
                $isApproved={emailError === '' ? true : false}
              >
                {emailError === '' ? 'Email address is valid' : emailError}
                {emailError === null ? 'Email address' : null}
              </FormLabel>
              <Input
                type='email'
                name='email'
                required
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                autoComplete='email'
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </LoginInputsWrapper>
            <LoginInputsWrapper>
              <FormLabel
                htmlFor='password'
                $hasError={passwordError ? true : false}
                $isApproved={passwordError === '' ? true : false}
              >
                {' '}
                {passwordError === '' ? 'Password is valid' : passwordError}
                {passwordError === null ? 'Password' : null}
              </FormLabel>
              <Input
                type='password'
                autoComplete='current-password'
                placeholder=''
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </LoginInputsWrapper>
            <ButtonBig
              type='submit'
              variant={ButtonVariants.SUCCESS}
              data-testid='login-account-button'
            >
              Log in
            </ButtonBig>
          </Form>

          <LoginTextWrapper>
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

            <HorizontalLineBottomLight />
            <LoginTextLink>
              <HorizontalWrapper>
                {' '}
                Enter email to
                <HighlightText
                  color={TextColor.INFO}
                  onClick={resetPasswordHandler}
                >
                  reset password{' '}
                </HighlightText>
              </HorizontalWrapper>
            </LoginTextLink>
            <HorizontalLineBottomLight />
            <LoginTextLink>
              <HorizontalWrapper>
                {Object.keys(userInfoRedux).length > 0 ? (
                  <>
                    <HighlightText
                      color={TextColor.WARNING}
                      onClick={logoutHandler}
                    >
                      Log out
                    </HighlightText>
                  </>
                ) : (
                  <>
                    Don't have an account?
                    <Link to='/register'>
                      <HighlightText color={TextColor.INFO}>
                        Sign up here
                      </HighlightText>
                    </Link>
                  </>
                )}
              </HorizontalWrapper>
            </LoginTextLink>
          </LoginTextWrapper>
        </LoginWrapper>
      </Wrapper>
    </LoginContainer>
  )
}
export default UserLogin
