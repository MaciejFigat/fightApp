import React from 'react'
import { DragColContainer, MainColumn, SideColumn } from './DragColumns.styled'

interface DragColumnsProps {}

const DragColumns: React.FC<DragColumnsProps> = () => {
  return (
    <DragColContainer>
      <MainColumn>Events & Fights</MainColumn>
      <SideColumn>
        <h1>Bet slips</h1>
      </SideColumn>
    </DragColContainer>
  )
}
export default DragColumns
