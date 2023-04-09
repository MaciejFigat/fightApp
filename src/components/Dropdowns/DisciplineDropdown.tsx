import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/reduxHooks'
import { AppDispatch } from '../../app/store'
import { SportChosen } from '../../interfaces'
import {
  DropDownContainer,
  DropDownListContainer,
  ProjectDropDownWrapper
} from './DisciplineDropdown.styled'
import { editDisciplineChosen } from '../../features/sports/sportsSlice'
import SportCard from '../SportCard/SportCard'

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