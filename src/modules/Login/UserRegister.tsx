import React, { useState, ChangeEvent, FormEvent } from 'react'
import {
  Wrapper,
  Form,
  Input,
  LoginContainer,
  LoginTextWrapper,
  Title,
  LoginWrapper,
  FormLabel
} from './UserLogin.styled'
import { useAppDispatch } from '../../reduxState/reduxHooks'
import { createUser } from '../../reduxState/stateSlices/users/userSlice'
import useRedirectLoggedListener from '../utils/customHooks/useRedirectListenerLogged'
import { Link } from 'react-router-dom'
import { ButtonBig, ButtonSmall } from '../../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../../consts'
import { AppDispatch } from '../../reduxState/store'
interface UserRegisterProps {}

const UserRegister: React.FC<UserRegisterProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  useRedirectLoggedListener()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setUser(prevUser => ({ ...prevUser, [name]: value }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    dispatch(createUser(user))
  }

  return (
    <LoginContainer>
      <Wrapper>
        <LoginWrapper>
          <h3>Welcome!</h3>
          <Form onSubmit={handleSubmit}>
            <FormLabel htmlFor='name'>Name</FormLabel>
            <Input
              type='name'
              name='name'
              id='name'
              placeholder='Enter your name'
              value={user.name}
              onChange={handleInputChange}
            />
            <FormLabel htmlFor='email'>Email</FormLabel>
            <Input
              type='email'
              name='email'
              id='email'
              placeholder='Enter your email'
              value={user.email}
              onChange={handleInputChange}
            />
            <FormLabel htmlFor='password'>Password</FormLabel>
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Enter your password'
              value={user.password}
              onChange={handleInputChange}
            />
            <ButtonBig
              type='submit'
              variant={ButtonVariants.SUCCESS_EMPTY}
              data-testid='create-account-button'
            >
              Create account
            </ButtonBig>
          </Form>
          <LoginTextWrapper>
            <Title>
              <ButtonSmall variant={ButtonVariants.INFO_EMPTY}>
                <Link to='/login'>Back to login screen</Link>{' '}
              </ButtonSmall>
              <ButtonSmall variant={ButtonVariants.WARNING_EMPTY}>
                <Link to='/'>Home</Link>{' '}
              </ButtonSmall>
            </Title>
            <Title>
              After filling out the above form, an email with instructions on
              how to activate your account will be sent
            </Title>
          </LoginTextWrapper>
        </LoginWrapper>
      </Wrapper>
    </LoginContainer>
  )
}
export default UserRegister
