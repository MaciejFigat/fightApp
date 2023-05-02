import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../reduxState/reduxHooks'
import { AppDispatch } from '../../../reduxState/store'
import { SportChosen } from '../../../interfaces'
import {
  DropDownContainer,
  DropDownListContainer,
  ProjectDropDownWrapper
} from './DisciplineDropdown.styled'
import { editDisciplineChosen } from '../../../reduxState/stateSlices/sports/sportsSlice'
import SportCard from '../../../components/SportCard/SportCard'

interface DisciplineDropdownProps {}

const DisciplineDropdown: React.FC<DisciplineDropdownProps> = () => {
  const dispatch: AppDispatch = useAppDispatch()

  const disciplineChosen: SportChosen = useAppSelector(
    state => state.sports.disciplineChosen
  )
  const availableDisciplines: SportChosen[] = useAppSelector(
    state => state.sports.availableDisciplines
  )

  const [isOpen, setIsOpen] = useState(false)

  const toggling = () => {
    setIsOpen(isOpen => !isOpen)
  }

  const chooseSportHelper = (item: SportChosen) => {
    dispatch(editDisciplineChosen(item))
  }

  // todo for presentation purposes
  useEffect(() => {
    if (disciplineChosen !== availableDisciplines[3])
      dispatch(editDisciplineChosen(availableDisciplines[3]))
  }, [disciplineChosen, dispatch, availableDisciplines])

  return (
    <DropDownContainer onClick={toggling}>
      <ProjectDropDownWrapper>
        {disciplineChosen.name !== 'None'
          ? disciplineChosen.name
          : 'Choose Discipline'}
      </ProjectDropDownWrapper>
      {isOpen && (
        <DropDownListContainer>
          {availableDisciplines.map((item: SportChosen, index: number) => (
            <div key={index} onClick={() => chooseSportHelper(item)}>
              <SportCard data={item} />
            </div>
          ))}
        </DropDownListContainer>
      )}
    </DropDownContainer>
  )
}
export default DisciplineDropdown
