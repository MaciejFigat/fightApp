import React, { useState, ChangeEvent, MouseEvent, FormEvent } from 'react'
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
  Title,
  LoginContainer,
  LoginTextWrapper,
  LoginWrapper,
  FormLabel
} from './UserLogin.styled'
import useRedirectLoggedListener from '../utils/customHooks/useRedirectListenerLogged'
import { UserInfo } from '../../interfaces'
import {
  ButtonBig,
  ButtonMedium,
  ButtonSmall
} from '../../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../../consts'
import { AppDispatch } from '../../reduxState/store'

interface UserLoginProps {}

const UserLogin: React.FC<UserLoginProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const userInfoRedux: UserInfo = useAppSelector(state => state.user.userInfo)

  useRedirectLoggedListener()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const userInfo = { email, password }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(sendUserId(userInfo))
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

  return (
    <LoginContainer>
      <Wrapper>
        <LoginWrapper>
          <h3>Welcome</h3>
          <Form onSubmit={submitHandler}>
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              type='email'
              name='email'
              placeholder='Enter your email'
              autoComplete='email'
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              type='password'
              autoComplete='current-password'
              placeholder='Enter your password'
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />

            <ButtonBig
              type='submit'
              variant={ButtonVariants.SUCCESS}
              data-testid='login-account-button'
            >
              Log in
            </ButtonBig>
          </Form>
          {Object.keys(userInfoRedux).length > 0 && (
            <ButtonMedium
              variant={ButtonVariants.WARNING}
              onClick={logoutHandler}
            >
              Log out
            </ButtonMedium>
          )}
          <LoginTextWrapper>
            <ButtonBig variant={ButtonVariants.INFO}>
              <Link to='/register'>Register</Link>
            </ButtonBig>

            <Title>Enter email and click to reset password</Title>
            <ButtonSmall variant={ButtonVariants.WARNING}>
              <div onClick={resetPasswordHandler}>&nbsp;reset password</div>
            </ButtonSmall>
          </LoginTextWrapper>
        </LoginWrapper>
      </Wrapper>
    </LoginContainer>
  )
}
export default UserLogin
