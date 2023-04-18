import React from 'react'
import { dateFormatter } from '../helperFunctions/helperFunction'

interface BetHeaderProps {
  betMoneyline: number | undefined
  betName: string
  dateTime: string
  fightName: string
}

const BetHeader: React.FC<BetHeaderProps> = ({
  betMoneyline,
  betName,
  fightName,
  dateTime
}) => {
  const formattedDate = dateFormatter(dateTime, false)

  return (
    <div>
      {betName} {fightName}
      {betMoneyline &&
        (betMoneyline > 0
          ? `underdog ${betMoneyline}`
          : `favourite ${betMoneyline}`)}
      <div>{formattedDate}</div>
    </div>
  )
}
export default BetHeader
