import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { SportEventData } from '../interfaces'
import { AppDispatch } from '../app/store'
import { editSportEvents } from '../features/sportEvents/eventsSlice'
import { eventsBJJ } from '../mockData/mockBJJEvents'
import { eventsMMA } from '../mockData/mockMMAEvents'
import { eventsBoxing } from '../mockData/mockBoxingEvents'
import { eventsSubmission } from '../mockData/mockSubmissionEvents'

interface EventsScreenProps {}

const EventsScreen: React.FC<EventsScreenProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const disciplineChosen = useAppSelector(
    state => state.sports.disciplineChosen
  )
  const sportEventData: SportEventData[] = useAppSelector(
    state => state.events.sportEvents
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
      case 'MMA':
        dispatch(editSportEvents(eventsMMA))
        break
      // default:
      // dispatch(editSportEvents([]))
    }
  }, [disciplineChosen, dispatch])

  return (
    <div>
      {' '}
      <h2>
        Events:
        {sportEventData.length > 0 ? (
          sportEventData.map((event: SportEventData, index: number) => (
            <div key={index}>{event.name}</div>
          ))
        ) : (
          <>No events</>
        )}
      </h2>
    </div>
  )
}
export default EventsScreen
