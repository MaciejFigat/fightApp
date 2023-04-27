import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import {
  SportEventData,
  SportChosen,
  AvailableEventSimpleData
} from '../interfaces'
import { AppDispatch } from '../app/store'
import {
  editSportEvents,
  fetchMMAData
} from '../features/sportEvents/eventsSlice'
import { eventsBJJ } from '../mockData/mockBJJEvents'
import { eventsMMA } from '../mockData/mockMMAEvents'
import { eventsBoxing } from '../mockData/mockBoxingEvents'
import { eventsSubmission } from '../mockData/mockSubmissionEvents'
import EventCard from '../modules/misc/EventsDisplay/EventCard'
import {
  EventCardContainer,
  EventCardStyled
} from '../modules/misc/EventsDisplay/EventCard.styled'

interface EventsScreenProps {}

const EventsScreen: React.FC<EventsScreenProps> = () => {
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

  useEffect(() => {
    switch (disciplineChosen.name) {
      case 'Boxing':
        dispatch(editSportEvents(eventsBoxing))
        break
      case 'BJJ':
        dispatch(editSportEvents(eventsBJJ))
        break
      case 'Submission grappling':
        dispatch(editSportEvents(eventsSubmission))
        break
      case 'Muay Thai':
        dispatch(editSportEvents(eventsMMA))
        break
      case 'MMA':
        console.log('fetch MMA events and set them as availableEvents')
        // MMA events from different API than the other sports - saving calls
        if (availableEvents.length === 0) dispatch(fetchMMAData())
        break
    }
  }, [disciplineChosen, dispatch, availableEvents.length])

  return (
    <EventCardContainer>
      {' '}
      {disciplineChosen.name !== 'MMA' ? (
        sportEventData.length > 0 ? (
          sportEventData.map((event: SportEventData, index: number) => (
            <EventCardStyled key={index}>{event.name}</EventCardStyled>
          ))
        ) : (
          <>No events</>
        )
      ) : (
        availableEvents.length > 0 &&
        availableEvents.map(chosenEvent => (
          <EventCard key={chosenEvent.EventId} chosenEvent={chosenEvent} />
        ))
      )}
    </EventCardContainer>
  )
}
export default EventsScreen
