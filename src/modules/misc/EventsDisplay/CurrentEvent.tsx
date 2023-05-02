import React from 'react'
import { useAppSelector } from '../../../reduxState/reduxHooks'
import { BlurredFatText } from '../../Bets/components/BetConfirmation.styled'
import { EventAllData } from '../../../interfaces'
interface CurrentEventProps {}

const CurrentEvent: React.FC<CurrentEventProps> = () => {
  const currentEvent: EventAllData | null = useAppSelector(
    state => state.events.currentEvent
  )

  return (
    <>
      {currentEvent ? (
        <BlurredFatText>Event: {currentEvent.ShortName}</BlurredFatText>
      ) : (
        'Events'
      )}
    </>
  )
}
export default CurrentEvent
