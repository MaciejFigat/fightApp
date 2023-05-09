import React from 'react'
import { UserInfo } from '../../../interfaces'
import { useAppSelector } from '../../../reduxState/reduxHooks'
import { HighlightText, HorizontalWrapper } from '../../../styles/misc.styles'
import { ButtonVariants, TextColor } from '../../../consts'
import { Link } from 'react-router-dom'
import { BetDetailsSecondary } from './BetConfirmation.styled'
import { ButtonMedium } from '../../../components/Buttons/Buttons.styled'

interface PleaseLoginProps {
  header: string
  subtitle?: string
  noButtons?: boolean
}

const PleaseLogin: React.FC<PleaseLoginProps> = ({
  header,
  subtitle,
  noButtons
}) => {
  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)

  return (
    <>
      {Object.keys(userInfo).length > 0 ? null : (
        <BetDetailsSecondary>
          <HighlightText color={TextColor.PRIMARY}>{header}</HighlightText>
          <HighlightText color={TextColor.SUCCESS}>{subtitle}</HighlightText>
          {noButtons ? null : (
            <HorizontalWrapper>
              <ButtonMedium variant={ButtonVariants.INFO}>
                {' '}
                <Link to='/login'> Log in</Link>
              </ButtonMedium>
              <ButtonMedium variant={ButtonVariants.SUCCESS}>
                {' '}
                <Link to='/register'> Join us</Link>
              </ButtonMedium>
            </HorizontalWrapper>
          )}
          <HorizontalWrapper></HorizontalWrapper>
        </BetDetailsSecondary>
      )}
    </>
  )
}
export default PleaseLogin
