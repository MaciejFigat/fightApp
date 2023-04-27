import React from 'react'
import { AvailableEventSimpleData, EventAllData } from '../../../interfaces'
import {
  editCurrentEvent,
  fetchEvent
} from '../../../reduxState/stateSlices/sportEvents/eventsSlice'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { EventCardStyled } from './EventCard.styled'

interface EventCardProps {
  chosenEvent: AvailableEventSimpleData
}

const EventCard: React.FC<EventCardProps> = ({ chosenEvent }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const eventsPreviouslyFetched: EventAllData[] = useAppSelector(
    state => state.events.eventsPreviouslyFetched
  )
  //   I check if the event has been fetched before, if true => currentEvent = machingEvent from eventsPreviouslyFetched if false => fetchEvent
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
    <EventCardStyled onClick={() => chosenEventHandler(chosenEvent.EventId)}>
      {chosenEvent.Name}
    </EventCardStyled>
  )
}
export default EventCard
