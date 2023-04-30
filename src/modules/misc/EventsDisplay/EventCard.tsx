import React from 'react'
import { AvailableEventSimpleData, EventAllData } from '../../../interfaces'
import {
  editCurrentEvent,
  fetchEvent
} from '../../../reduxState/stateSlices/sportEvents/eventsSlice'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { EventCardStyled } from './EventCard.styled'
import { BlurredSkinnyText } from '../../Bets/components/BetConfirmation.styled'
import { dateFormatter } from '../../utils/helperFunctions/helperFunction'
import { OptionsOpen } from '../../../consts'

interface EventCardProps {
  chosenEvent: AvailableEventSimpleData
  setOpen?: React.Dispatch<React.SetStateAction<OptionsOpen>>
}

const EventCard: React.FC<EventCardProps> = ({ chosenEvent, setOpen }) => {
  const dispatch: AppDispatch = useAppDispatch()
  const eventsPreviouslyFetched: EventAllData[] = useAppSelector(
    state => state.events.eventsPreviouslyFetched
  )
  const currentEventId: number | undefined = useAppSelector(
    state => state.events.currentEvent?.EventId
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
    if (setOpen) setOpen(OptionsOpen.HOME)
  }

  return (
    <EventCardStyled
      active={currentEventId === chosenEvent.EventId}
      onClick={() => chosenEventHandler(chosenEvent.EventId)}
    >
      {chosenEvent.Name}{' '}
      <BlurredSkinnyText>
        {dateFormatter(chosenEvent.DateTime, false)}
      </BlurredSkinnyText>
    </EventCardStyled>
  )
}
export default EventCard
