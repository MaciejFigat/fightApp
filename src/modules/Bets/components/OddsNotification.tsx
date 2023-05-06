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
