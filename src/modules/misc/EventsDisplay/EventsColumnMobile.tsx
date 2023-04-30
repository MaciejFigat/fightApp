import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import {
  SportEventData,
  SportChosen,
  AvailableEventSimpleData
} from '../../../interfaces'
import { AppDispatch } from '../../../reduxState/store'
import {
  editSportEvents,
  fetchMMAData
} from '../../../reduxState/stateSlices/sportEvents/eventsSlice'
import { eventsBJJ } from '../../../mockData/mockBJJEvents'
import { eventsMMA } from '../../../mockData/mockMMAEvents'
import { eventsBoxing } from '../../../mockData/mockBoxingEvents'
import { eventsSubmission } from '../../../mockData/mockSubmissionEvents'
import EventCard from './EventCard'
import { EventCardContainerMobile, EventCardStyled } from './EventCard.styled'
import { ScrollYWrapper } from '../../../styles/misc.styles'

enum OptionsOpen {
  HOME,
  EVENTS,
  SEARCH,
  MY_BETS
}
interface EventsColumnMobileProps {
  setOpen: React.Dispatch<React.SetStateAction<OptionsOpen>>
}

const EventsColumnMobile: React.FC<EventsColumnMobileProps> = ({ setOpen }) => {
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
        if (availableEvents.length === 0) dispatch(fetchMMAData())
        break
    }
  }, [disciplineChosen, dispatch, availableEvents.length])

  return (
    <ScrollYWrapper>
      <EventCardContainerMobile>
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
            <EventCard
              key={chosenEvent.EventId}
              chosenEvent={chosenEvent}
              setOpen={setOpen}
            />
          ))
        )}
      </EventCardContainerMobile>
    </ScrollYWrapper>
  )
}
export default EventsColumnMobile
