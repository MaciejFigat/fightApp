import React from 'react'
import { SportChosen } from '../../interfaces'
import { SportCardWrapper } from './SportCard.styled'

interface SportCardProps {
  data: SportChosen
}

const SportCard: React.FC<SportCardProps> = ({ data }) => {
  return (
    <SportCardWrapper>
      <b>{data.name}</b>
    </SportCardWrapper>
  )
}
export default SportCard
