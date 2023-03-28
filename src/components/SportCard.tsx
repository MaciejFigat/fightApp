import React from 'react'
import { SportsData } from '../interface'
import { SportCardWrapper } from './SportCard.styled'

interface SportCardProps {
  data: SportsData
}

const SportCard: React.FC<SportCardProps> = ({ data }) => {
  return (
    <SportCardWrapper>
      <b>{data.name}</b>
      <p>{data.organization}</p>
      <p>{data.rules}</p>
    </SportCardWrapper>
  )
}
export default SportCard
