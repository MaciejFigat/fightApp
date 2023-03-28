import React from 'react'
import SportCard from '../components/SportCard'
import { SportsData } from '../interface'
import SportsStore from '../store/SportsStore'
import { observer } from 'mobx-react'

interface SportChoiceScreenProps {}

const SportChoiceScreen: React.FC<SportChoiceScreenProps> = observer(() => {
  const mockSportsData: SportsData[] = [
    {
      name: 'BJJ',
      rules: 'gi IBJJF',
      organization: 'IBJJF WorldStar'
    },
    {
      name: 'BJJ',
      rules: 'nogi IBJJF',
      organization: 'IBJJF WorldStar'
    },
    {
      name: 'grappling',
      rules: 'nogi ADCC',
      organization: 'ADCC Poland'
    },
    {
      name: 'grappling',
      rules: 'nogi 10th planet',
      organization: '10th planet'
    },
    {
      name: 'boxing',
      rules: 'WBA pro',
      organization: 'WBA WorldStar'
    }
  ]

  const sportsStore = new SportsStore(mockSportsData)

  const sportClickHelper = (item: SportsData) => {
    sportsStore.chooseSport(item)
    // console.log(item)
  }

  return (
    <>
      {sportsStore.sortedSports.map((item: SportsData, index: number) => (
        <div key={index} onClick={() => sportClickHelper(item)}>
          <SportCard data={item} />
        </div>
      ))}
    </>
  )
})

export default SportChoiceScreen
