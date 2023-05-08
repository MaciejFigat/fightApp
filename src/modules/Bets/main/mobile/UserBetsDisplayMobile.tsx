import React, { useState } from 'react'
import UserCreatedBets from '../UserCreatedBets'
import UserAcceptedBets from '../UserAcceptedBets'
import {
  FlexStartWrapper,
  HorizontalWrapper,
  HorizontalWrapperCenter
} from '../../../../styles/misc.styles'
import {
  ButtonInconspicuousSecondary,
  ButtonUnderlineSecondary,
  ButtonUnderlineTransparentSecondary
} from '../../../../components/Buttons/Buttons.styled'
import { TextColor } from '../../../../consts'
import { MainListHeaderInconspicuous } from '../DragColumns.styled'

interface UserBetsDisplayMobileProps {}

const UserBetsDisplayMobile: React.FC<UserBetsDisplayMobileProps> = () => {
  enum BetsChosen {
    CREATED,
    ACCEPTED
  }
  const [betFilter, setBetFilter] = useState<BetsChosen>(BetsChosen.CREATED)

  return (
    <FlexStartWrapper>
      {' '}
      <MainListHeaderInconspicuous>
        <HorizontalWrapperCenter>
          {' '}
          <HorizontalWrapper>
            <ButtonInconspicuousSecondary
              color={TextColor.SUCCESS}
              onClick={() => setBetFilter(BetsChosen.CREATED)}
              $active={betFilter === BetsChosen.CREATED}
            >
              Created
            </ButtonInconspicuousSecondary>
            {betFilter === BetsChosen.CREATED ? (
              <ButtonUnderlineSecondary
                color={TextColor.SUCCESS}
                layoutId='chosenBetFilterSupreme'
              />
            ) : (
              <ButtonUnderlineTransparentSecondary layoutId='notVisibleBetFilterSupreme' />
            )}
          </HorizontalWrapper>{' '}
          <HorizontalWrapper>
            <ButtonInconspicuousSecondary
              color={TextColor.INFO}
              onClick={() => setBetFilter(BetsChosen.ACCEPTED)}
              $active={betFilter === BetsChosen.ACCEPTED}
            >
              Accepted
            </ButtonInconspicuousSecondary>
            {betFilter === BetsChosen.ACCEPTED ? (
              <ButtonUnderlineSecondary
                color={TextColor.INFO}
                layoutId='chosenBetFilterSupreme'
              />
            ) : (
              <ButtonUnderlineTransparentSecondary layoutId='notVisibleBetFilterSupreme' />
            )}
          </HorizontalWrapper>{' '}
        </HorizontalWrapperCenter>
      </MainListHeaderInconspicuous>
      {betFilter === BetsChosen.CREATED ? (
        <UserCreatedBets />
      ) : (
        <UserAcceptedBets />
      )}
    </FlexStartWrapper>
  )
}
export default UserBetsDisplayMobile
