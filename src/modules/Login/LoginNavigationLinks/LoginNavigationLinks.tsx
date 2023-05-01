import React from 'react'
import { ButtonVerySmall } from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../../../consts'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { UserInfo } from '../../../interfaces'
import { AppDispatch } from '../../../reduxState/store'
import { logout } from '../../../reduxState/stateSlices/users/userSlice'

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
        <ButtonVerySmall
          variant={ButtonVariants.INFO_EMPTY}
          onClick={logoutHandler}
        >
          Logout
        </ButtonVerySmall>
      ) : (
        <>
          {' '}
          <ButtonVerySmall variant={ButtonVariants.INFO_EMPTY}>
            <Link to='/login'>Login</Link>
          </ButtonVerySmall>
          <ButtonVerySmall variant={ButtonVariants.SUCCESS_EMPTY}>
            <Link to='/register'>Register</Link>
          </ButtonVerySmall>
        </>
      )}
    </>
  )
}
export default LoginNavigationLinks
