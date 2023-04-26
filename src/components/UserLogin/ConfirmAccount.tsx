import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { activateUser } from '../../features/users/userSlice'
import { Wrapper, LoginContainer } from './UserLogin.styled'
import { RotatingLines } from 'react-loader-spinner'
import useRedirectLoggedListener from '../../hooks/useRedirectListenerLogged'
import { ButtonBig } from '../Buttons/Buttons.styled'
import { useNavigate } from 'react-router-dom'
import { ButtonVariants } from '../../consts'
import { HorizontalWrapperCenter } from '../../styles/misc.styles'

interface ConfirmAccountProps {}

const ConfirmAccount: React.FC<ConfirmAccountProps> = () => {
  const dispatch = useAppDispatch()
  let navigate = useNavigate()

  const errorMessage = useAppSelector(state => state.user.error)
  const { token: confirmationToken } = useParams()

  useRedirectLoggedListener()

  const [timeoutSeconds, setTimeoutSeconds] = useState<number>(5)

  useEffect(() => {
    const tokenObject = {
      confirmationCode: confirmationToken
    }
    if (confirmationToken) {
      dispatch(activateUser(tokenObject))
    }
  }, [confirmationToken, dispatch])

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeoutSeconds >= 0)
        setTimeoutSeconds((timeoutSeconds: number) => timeoutSeconds - 1)
    }, 1000)
    if (errorMessage === 'User status changed' && timeoutSeconds === -1) {
      navigate('/login')
    }
    return () => clearTimeout(timer)
  }, [errorMessage, navigate, timeoutSeconds])

  return (
    <LoginContainer>
      <Wrapper>
        <h2>Welcome to FightBet</h2>

        {errorMessage === 'User status changed' && (
          <>
            {' '}
            <h4>Authorization complete</h4>
            <h4>
              automatic redirect in {timeoutSeconds}{' '}
              {timeoutSeconds !== 1 && 'seconds'}{' '}
              {timeoutSeconds === 1 && 'second'}
            </h4>
            <ButtonBig variant={ButtonVariants.successEmpty}>
              Log in now or wait for redirect
            </ButtonBig>
          </>
        )}
        {errorMessage === '' && (
          <>
            {' '}
            <h4>Za chwilę zostaniesz przekierowany do ekranu logowania</h4>
            <h4>Trwa autoryzacja twojego emaila</h4>{' '}
            <HorizontalWrapperCenter>
              <RotatingLines
                strokeColor='var(--background2-secondary)'
                strokeWidth='3'
                animationDuration='1.25'
                ariaLabel='progress-bar-loading'
                width='58'
                visible={true}
              />
            </HorizontalWrapperCenter>
          </>
        )}
      </Wrapper>
    </LoginContainer>
  )
}
export default ConfirmAccount
