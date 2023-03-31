import React from 'react'
import { useAppSelector } from '../app/reduxHooks'
import { SportsData } from '../interface'

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const disciplineChosen: SportsData = useAppSelector(
    state => state.sports.disciplineChosen
  )
  return (
    <div>
      {' '}
      <h2>Chosen sport is {disciplineChosen.name}</h2>
    </div>
  )
}
export default Home
