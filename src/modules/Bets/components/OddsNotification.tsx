import React from 'react'
import {
  HorizontalWrapperEnd,
  HoverColorWrapper,
  RelativeWrapper
} from '../../../styles/misc.styles'
import { BlurredSkinnyText } from './BetConfirmation.styled'
import SvgIcon from '../../misc/SvgIcon/SvgIcon'
import { SvgIconVariants, TextColor } from '../../../consts'

interface OddsNotificationProps {
  contentHeader: string
  noteContent: string
  warningSign?: boolean
}

const OddsNotification: React.FC<OddsNotificationProps> = ({
  contentHeader,
  noteContent,
  warningSign
}) => {
  //   const contentAfterOne =
  //     'Please be advised that the odds provided on this platform are subject to change at any time, and are provided by a third party as an approximation and opinion only. These odds should not be considered legally binding, nor should they be relied upon as a guarantee of any outcome. Any reliance placed on these odds is done so at your own risk, and we strongly encourage you to do your own research before making any decisions. Furthermore, the odds provided on this platform are not intended to create any contractual or legal obligation between any parties, and do not form part of any agreement between you and us. Therefore, we cannot be held responsible for any losses or damages that may result from your use of these odds. Please consult with a qualified legal professional if you have any questions or concerns regarding the legal implications of using these odds.'
  return (
    <>
      {' '}
      <HorizontalWrapperEnd>
        <BlurredSkinnyText>{contentHeader}</BlurredSkinnyText>
        <RelativeWrapper top='1px'>
          <HoverColorWrapper
            color={warningSign ? TextColor.WARNING : TextColor.INFO}
            contentAfter={noteContent}
            contentWidth='100px'
            contentLeft='-120px'
          >
            <SvgIcon
              variant={
                warningSign
                  ? SvgIconVariants.EXCLAMATION
                  : SvgIconVariants.QUESTION
              }
            />
          </HoverColorWrapper>
        </RelativeWrapper>
      </HorizontalWrapperEnd>
    </>
  )
}
export default OddsNotification
