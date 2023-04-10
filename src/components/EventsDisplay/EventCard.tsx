import React from 'react'
import { AvailableEventSimpleData, EventAllData } from '../../interfaces'
import {
  editCurrentEvent,
  fetchEvent
} from '../../features/sportEvents/eventsSlice'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'

interface EventCardProps {
  chosenEvent: AvailableEventSimpleData
}

const EventCard: React.FC<EventCardProps> = ({ chosenEvent }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const eventsPreviouslyFetched: EventAllData[] = useAppSelector(
    state => state.events.eventsPreviouslyFetched
  )
  //   I check if the event has been fetched before, if it has, I dispatch the editCurrentEvent action with event data with matching EventId, if not, I dispatch the fetchEvent action
  const chosenEventHandler = (EventId: number) => {
    const eventAlreadyFetched = eventsPreviouslyFetched.find(
      eventMatchingId => eventMatchingId.EventId === EventId
    )
    if (eventAlreadyFetched) {
      dispatch(editCurrentEvent(eventAlreadyFetched))
    } else {
      dispatch(fetchEvent(EventId))
    }
  }

  return (
    <div onClick={() => chosenEventHandler(chosenEvent.EventId)}>
      {chosenEvent.Name}
    </div>
  )
}
export default EventCard
