import React from 'react'
import UserCreatedBets from './UserCreatedBets'
import UserAcceptedBets from './UserAcceptedBets'
import { DragColContainer, MainColumn, SideColumn } from './DragColumns.styled'

interface BetsDisplayDesktopProps {}

const BetsDisplayDesktop: React.FC<BetsDisplayDesktopProps> = () => {
  return (
    <DragColContainer>
      {' '}
      <MainColumn>
        {' '}
        <UserCreatedBets />
      </MainColumn>
      <SideColumn>
        {' '}
        <UserAcceptedBets />{' '}
      </SideColumn>
    </DragColContainer>
  )
}
export default BetsDisplayDesktop
