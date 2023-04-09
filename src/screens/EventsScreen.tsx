import React, { useCallback, useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import {
  SportEventData,
  SportChosen,
  AvailableEventSimpleData,
  EventAllData
} from '../interfaces'
import { AppDispatch } from '../app/store'
import {
  editAvailableEvents,
  editCurrentEvent,
  editSportEvents
} from '../features/sportEvents/eventsSlice'
import { eventsBJJ } from '../mockData/mockBJJEvents'
import { eventsMMA } from '../mockData/mockMMAEvents'
import { eventsBoxing } from '../mockData/mockBoxingEvents'
import { eventsSubmission } from '../mockData/mockSubmissionEvents'
import EventCard from '../components/EventsDisplay/EventCard'

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
  const eventsPreviouslyChosen: EventAllData[] = useAppSelector(
    state => state.events.eventsPreviouslyChosen
  )
  const fetchMMAData = useCallback(async () => {
    const MMA_API_KEY = process.env.REACT_APP_MMA_API_KEY
    const league = 'UFC'
    const date = new Date()
    const season = date.getFullYear().toString()
    const response = await fetch(
      `https://api.sportsdata.io/v3/mma/scores/json/Schedule/${league}/${season}?key=${MMA_API_KEY}`
    )
    const data = await response.json()
    dispatch(editAvailableEvents(data))
    console.log(data)
  }, [dispatch])

  const chooseEventHandler = useCallback(
    async (eventId: number) => {
      const MMA_API_KEY = process.env.REACT_APP_MMA_API_KEY
      const response = await fetch(
        `https://api.sportsdata.io/v3/mma/scores/json/Event/${eventId}?key=${MMA_API_KEY}`
      )
      const data = await response.json()
      dispatch(editCurrentEvent(data))
      console.log(data)
    },
    [dispatch]
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
        fetchMMAData()
        break
      // default:
    }
  }, [disciplineChosen, dispatch, fetchMMAData])

  return (
    <div>
      {' '}
      {disciplineChosen.name !== 'MMA' ? (
        <h4>
          Events:
          {sportEventData.length > 0 ? (
            sportEventData.map((event: SportEventData, index: number) => (
              <div key={index}>{event.name}</div>
            ))
          ) : (
            <>No events</>
          )}
        </h4>
      ) : (
        availableEvents.length > 0 &&
        availableEvents.map(chosenEvent => (
          <EventCard
            key={chosenEvent.EventId}
            chooseEventHandler={chooseEventHandler}
            chosenEvent={chosenEvent}
          />
        ))
      )}
      <button onClick={() => console.log(eventsPreviouslyChosen)}>
        CLICK TEST{' '}
      </button>
    </div>
  )
}
export default EventsScreen
