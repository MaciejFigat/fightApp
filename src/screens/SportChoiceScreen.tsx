import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/reduxHooks'
import { AppDispatch } from '../app/store'
import SportCard from '../components/SportCard'
import { editDisciplineChosen } from '../features/sports/sportsSlice'
import { SportsData } from '../interfaces'

interface SportChoiceScreenProps {}

const SportChoiceScreen: React.FC<SportChoiceScreenProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()
  const sportsData: SportsData[] = useAppSelector(
    state => state.sports.availableDisciplines
  )
  const chooseSportHelper = (item: SportsData) => {
    dispatch(editDisciplineChosen(item))
  }

  return (
    <>
      {sportsData.map((item: SportsData, index: number) => (
        <div key={index} onClick={() => chooseSportHelper(item)}>
          <SportCard data={item} />
        </div>
      ))}
    </>
  )
}

export default SportChoiceScreen
