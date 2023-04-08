import React, { useState, useEffect, useCallback } from 'react'
import { useAppSelector } from '../app/reduxHooks'
import { AvailableEventSimpleData, SportsData } from '../interfaces'

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const disciplineChosen: SportsData = useAppSelector(
    state => state.sports.disciplineChosen
  )
  const [data, setData] = useState<AvailableEventSimpleData[]>([])

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
      <h2>
        {/* Chosen sport is {disciplineChosen.name} with ruleset:{' '} */}
        {/* {disciplineChosen.rules} */}
        {data.map((item: any) => (
          <div>{item.Name}</div>
        ))}
      </h2>
    </div>
  )
}
export default HomeScreen
