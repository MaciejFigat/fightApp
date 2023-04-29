import React from 'react'
import { ButtonSmall } from '../../../components/Buttons/Buttons.styled'
import { ButtonVariants } from '../../../consts'
import { Link } from 'react-router-dom'

interface LoginNavigationLinksProps {}

const LoginNavigationLinks: React.FC<LoginNavigationLinksProps> = () => {
  return (
    <>
      <ButtonSmall variant={ButtonVariants.INFO}>
        <Link to='/login'>Login</Link>
      </ButtonSmall>
      <ButtonSmall variant={ButtonVariants.SUCCESS}>
        <Link to='/register'>Register</Link>
      </ButtonSmall>
    </>
  )
}
export default LoginNavigationLinks
