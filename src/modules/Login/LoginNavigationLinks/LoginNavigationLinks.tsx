import React from 'react'
import { ButtonInconspicuous } from '../../../components/Buttons/Buttons.styled'
import { TextColor } from '../../../consts'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { UserInfo } from '../../../interfaces'
import { AppDispatch } from '../../../reduxState/store'
import { logout } from '../../../reduxState/stateSlices/users/userSlice'
import { HighlightText } from '../../../styles/misc.styles'

interface LoginNavigationLinksProps {}

const LoginNavigationLinks: React.FC<LoginNavigationLinksProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)
  const logoutHandler = (e: any) => {
    e.preventDefault()
    dispatch(logout())
  }
  return (
    <>
      {Object.keys(userInfo).length > 0 ? (
        <ButtonInconspicuous onClick={logoutHandler}>
          <HighlightText color={TextColor.INFO} hoverEffect>
            Logout
          </HighlightText>
        </ButtonInconspicuous>
      ) : (
        <>
          {' '}
          <ButtonInconspicuous>
            <Link to='/login'>
              <HighlightText color={TextColor.INFO} hoverEffect>
                Login
              </HighlightText>
            </Link>
          </ButtonInconspicuous>
          <ButtonInconspicuous>
            <Link to='/register'>
              <HighlightText color={TextColor.SUCCESS} hoverEffect>
                Register
              </HighlightText>
            </Link>
          </ButtonInconspicuous>
        </>
      )}
    </>
  )
}
export default LoginNavigationLinks
