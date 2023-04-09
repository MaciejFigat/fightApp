import React, { useState, useEffect, useCallback } from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import { AvailableEventSimpleData, SportChosen } from '../../interfaces'
import { Draggable, Droppable } from 'react-beautiful-dnd'

interface EventColumnProps {
  state: any[]
}

const EventColumn: React.FC<EventColumnProps> = ({ state }) => {
  const disciplineChosen: SportChosen = useAppSelector(
    state => state.sports.disciplineChosen
  )
  const [data, setData] = useState<AvailableEventSimpleData[]>([])

  const fetchMMAData = useCallback(async () => {
    const MMA_API_KEY = process.env.REACT_APP_MMA_API_KEY
    const league = 'UFC'
    const date = new Date()
    const season = date.getFullYear().toString()
    const eventId = 295
    const response = await fetch(
      `https://api.sportsdata.io/v3/mma/scores/json/Event/${eventId}?key=${MMA_API_KEY}`
    )
    // `https://api.sportsdata.io/v3/mma/scores/json/Schedule/${league}/${season}?key=${MMA_API_KEY}`
    const data = await response.json()
    setData(data)
    console.log(data)
  }, [])

  // `https://api.sportsdata.io/v3/mma/scores/json/Event/{eventid}?key=${MMA_API_KEY}`
  // event id https://api.sportsdata.io/v3/mma/scores/json/Event/{eventid}?key=${MMA_API_KEY}

  // todo for now disabled
  // useEffect(() => {
  //   fetchMMAData()
  // }, [fetchMMAData])
  const getItemStyle = (isDragging: any, draggableStyle: any) => ({
    userSelect: 'none',
    borderRadius: '20px',

    background: isDragging
      ? 'var(--background-blur1)'
      : 'var(--background1-main)',

    color: isDragging
      ? 'var(--background-secondary1)'
      : 'var(--background4-main)',
    ...draggableStyle
  })

  const getListStyle = (isDraggingOver: any) => ({
    background: isDraggingOver
      ? 'var(--background-blur1)'
      : 'var(--background1-main)',
    borderRadius: '20px'
  })
  return (
    <div>
      {' '}
      {/* Chosen sport is {disciplineChosen.name} with ruleset:{' '} */}
      {/* {disciplineChosen.rules} */}
      <h3>Fights available</h3>
      {/* {data.map((item: any, index) => (
        <div key={index}>{item.Name}</div>
      ))} */}
      {/* {state[0].map((event: any) => (
        <div key={event.id}>{event.content}</div>
      ))} */}
      <Droppable key={'0'} droppableId={`0`}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
            {...provided.droppableProps}
          >
            {state[0].map((event: any, index: number) => (
              <Draggable key={event.id} draggableId={event.id} index={index}>
                {(provided, snapshot) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <div key={event.id}>{event.content}</div>
                    </div>
                  )
                }}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}
export default EventColumn
