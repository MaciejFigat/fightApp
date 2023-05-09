import React from 'react'
import { DragColContainer, MainColumn, SideColumn } from './DragColumns.styled'
import AllRegisteredBets from './AllRegisteredBets'

interface AllRegisteredBetsDesktopProps {}

const AllRegisteredBetsDesktop: React.FC<
  AllRegisteredBetsDesktopProps
> = () => {
  return (
    <DragColContainer>
      {' '}
      <MainColumn>
        {' '}
        <AllRegisteredBets />
      </MainColumn>
      <SideColumn> </SideColumn>
    </DragColContainer>
  )
}
export default AllRegisteredBetsDesktop
