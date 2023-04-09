import React from 'react'
import { AvailableEventSimpleData } from '../../interfaces'

interface EventCardProps {
  chooseEventHandler: (eventId: number) => Promise<void>
  chosenEvent: AvailableEventSimpleData
}

const EventCard: React.FC<EventCardProps> = ({
  chooseEventHandler,
  chosenEvent
}) => {
  return (
    <div onClick={() => chooseEventHandler(chosenEvent.EventId)}>
      {chosenEvent.Name}
    </div>
  )
}
export default EventCard
