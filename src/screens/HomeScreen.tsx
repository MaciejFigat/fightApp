import React from 'react'
import { useAppSelector } from '../app/reduxHooks'
// import { SportsData } from '../interfaces'

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = () => {
  // const disciplineChosen: SportsData = useAppSelector(
  const disciplineChosen = useAppSelector(
    state => state.sports.disciplineChosen
  )
  return (
    <div>
      {' '}
      <h2>
        Chosen sport is {disciplineChosen.name} with ruleset:{' '}
        {disciplineChosen.rules}
      </h2>
    </div>
  )
}
export default HomeScreen
