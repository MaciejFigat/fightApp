import React from 'react'
import { SportChosen } from '../../interfaces'
import { SportCardWrapper } from './SportCard.styled'
import { BlurredFatText } from '../../modules/Bets/components/BetConfirmation.styled'

interface SportCardProps {
  data: SportChosen
}
// todo coming soon for presentation purposes
const SportCard: React.FC<SportCardProps> = ({ data }) => {
  return (
    <SportCardWrapper>
      <b>
        {data.name === 'MMA' ? (
          data.name
        ) : (
          <BlurredFatText>{data.name} comming soon</BlurredFatText>
        )}
      </b>
    </SportCardWrapper>
  )
}
export default SportCard
