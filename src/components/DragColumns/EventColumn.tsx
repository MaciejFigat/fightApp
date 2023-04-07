import React, { useState, useEffect, useCallback } from 'react'
import { useAppSelector } from '../../app/reduxHooks'
import { MMAEventData, SportsData } from '../../interfaces'

interface EventColumnProps {
  state: any[]
}

const EventColumn: React.FC<EventColumnProps> = ({ state }) => {
  const disciplineChosen: SportsData = useAppSelector(
    state => state.sports.disciplineChosen
  )
  const [data, setData] = useState<MMAEventData[]>([])

  const fetchMMAData = useCallback(async () => {
    const MMA_API_KEY = process.env.REACT_APP_MMA_API_KEY
    const league = 'UFC'
    const date = new Date()
    const season = date.getFullYear().toString()

    const response = await fetch(
      `https://api.sportsdata.io/v3/mma/scores/json/Schedule/${league}/${season}?key=${MMA_API_KEY}`
    )
    const data = await response.json()
    setData(data)
    // console.log(data)
  }, [])

  // todo for now disabled
  // useEffect(() => {
  //   fetchMMAData()
  // }, [fetchMMAData])

  return (
    <div>
      {' '}
      {/* Chosen sport is {disciplineChosen.name} with ruleset:{' '} */}
      {/* {disciplineChosen.rules} */}
      <h3>Event Col</h3>
      {data.map((item: any, index) => (
        <div key={index}>{item.Name}</div>
      ))}
      {state[0].map((event: any) => (
        <div key={event.id}>{event.content}</div>
      ))}
    </div>
  )
}
export default EventColumn
