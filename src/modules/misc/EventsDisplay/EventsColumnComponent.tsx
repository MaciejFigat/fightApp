import React, { useEffect, useMemo } from 'react'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import {
  SportEventData,
  SportChosen,
  AvailableEventSimpleData
} from '../../../interfaces'
import { AppDispatch } from '../../../reduxState/store'
import {
  editSportEvents,
  fetchEvent,
  fetchMMAData
} from '../../../reduxState/stateSlices/sportEvents/eventsSlice'
// import { eventsBJJ } from '../../../mockData/mockBJJEvents'
import { eventsMMA } from '../../../mockData/mockMMAEvents'
// import { eventsBoxing } from '../../../mockData/mockBoxingEvents'
// import { eventsSubmission } from '../../../mockData/mockSubmissionEvents'
import EventCard from './EventCard'
import { EventCardContainer, EventCardStyled } from './EventCard.styled'
import { filterFutureEvents } from '../../Bets/functions/filterBets'

interface EventsColumnComponentProps {}

const EventsColumnComponent: React.FC<EventsColumnComponentProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const disciplineChosen: SportChosen = useAppSelector(
    state => state.sports.disciplineChosen
  )
  const sportEventData: SportEventData[] = useAppSelector(
    state => state.events.sportEvents
  )
  const availableEvents: AvailableEventSimpleData[] = useAppSelector(
    state => state.events.availableEvents
  )

  const filteredEvents = useMemo(() => {
    return filterFutureEvents(availableEvents)
  }, [availableEvents])

  useEffect(() => {
    switch (disciplineChosen.name) {
      case 'Boxing':
        //dispatch(editSportEvents(eventsBoxing))
        console.log('disabled')
        break
      case 'BJJ':
        //dispatch(editSportEvents(eventsBJJ))
        console.log('disabled')
        break
      case 'Submission grappling':
        //dispatch(editSportEvents(eventsSubmission))
        console.log('disabled')
        break
      case 'Muay Thai':
        dispatch(editSportEvents(eventsMMA))
        break
      case 'MMA':
        // MMA events from different API than the other sports - saving calls
        if (availableEvents.length === 0) dispatch(fetchMMAData())
        break
    }
  }, [disciplineChosen, dispatch, availableEvents.length])

  // todo for presentation purposes
  useEffect(() => {
    if (filteredEvents.length > 0) {
      dispatch(fetchEvent(filteredEvents[0].EventId))
    }
  }, [filteredEvents.length, dispatch, filteredEvents])

  return (
    <EventCardContainer>
      {disciplineChosen.name !== 'MMA' ? (
        sportEventData.length > 0 ? (
          sportEventData.map((event: SportEventData, index: number) => (
            <EventCardStyled key={index}>{event.name}</EventCardStyled>
          ))
        ) : (
          <>No events</>
        )
      ) : (
        filteredEvents.length > 0 &&
        filteredEvents.map(chosenEvent => (
          <EventCard key={chosenEvent.EventId} chosenEvent={chosenEvent} />
        ))
      )}
    </EventCardContainer>
  )
}
export default EventsColumnComponent
