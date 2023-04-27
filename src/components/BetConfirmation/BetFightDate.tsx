import React from 'react'
import { HorizontalWrapperSpaceBetween } from '../../styles/misc.styles'
import { BlurredFatText, BlurredSkinnyText } from './BetConfirmation.styled'
import { dateFormatter } from '../helperFunctions/helperFunction'

interface BetFightDateProps {
  fightName: string
  dateTime: string
}

const BetFightDate: React.FC<BetFightDateProps> = ({ fightName, dateTime }) => {
  return (
    <>
      <HorizontalWrapperSpaceBetween>
        {' '}
        <BlurredFatText>{fightName} </BlurredFatText>{' '}
        <BlurredSkinnyText>{dateFormatter(dateTime, false)}</BlurredSkinnyText>
      </HorizontalWrapperSpaceBetween>
    </>
  )
}
export default BetFightDate
