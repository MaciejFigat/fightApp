import React from 'react'
import { BetData } from '../../../../interfaces'
import {
  BetContentContainerMobile,
  BetListHeader,
  DraggableDiv
} from '../DragColumns.styled'
import BetConfirmation from '../../components/BetConfirmation'
import { useAppSelector } from '../../../../reduxState/reduxHooks'
import { TextColor, WinnerProjection } from '../../../../consts'
import {
  HighlightText,
  HorizontalWrapper,
  RoundAccent,
  ScrollYWrapper
} from '../../../../styles/misc.styles'
import {
  MobileBetContainer,
  MobileHomeContainer
} from '../../../../layout/HomePageLayout.styled'

interface BetsColumnMobileProps {
  state: BetData[][]
  winnerChange: (id: string, winnerProjection: WinnerProjection) => void
}

const BetsColumnMobile: React.FC<BetsColumnMobileProps> = ({
  state,
  winnerChange
}) => {
  const betsUnconfirmed: BetData[] = useAppSelector(
    state => state.bets.betsUnconfirmed
  )

  return (
    <ScrollYWrapper>
      <MobileHomeContainer>
        <MobileBetContainer>
          <BetListHeader>
            <HorizontalWrapper>
              <RoundAccent>{betsUnconfirmed.length} </RoundAccent>
              <HighlightText color={TextColor.PRIMARY}>
                bets to confirm
              </HighlightText>
            </HorizontalWrapper>
          </BetListHeader>
          <BetContentContainerMobile>
            {state[1].map((bet: BetData, index: number) => (
              <DraggableDiv key={bet.id}>
                {' '}
                <BetConfirmation
                  winnerChange={winnerChange}
                  index={index}
                  betData={bet}
                />
              </DraggableDiv>
            ))}
          </BetContentContainerMobile>
        </MobileBetContainer>
      </MobileHomeContainer>
    </ScrollYWrapper>
  )
}
export default BetsColumnMobile
