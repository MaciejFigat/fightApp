import React from 'react'
import LoginNavigationLinks from '../modules/Login/LoginNavigationLinks/LoginNavigationLinks'
import CoinDisplay from '../modules/misc/CoinDisplay/CoinDisplay'
import DisciplineDropdown from '../modules/misc/Dropdowns/DisciplineDropdown'
import EventsScreen from './EventsScreen'
import DragColumns from '../modules/Bets/main/FightsColumn'
import HomePageLayout from '../layout/HomePageLayout'

interface HomePageScreenProps {}

const HomePageScreen: React.FC<HomePageScreenProps> = () => {
  return (
    <HomePageLayout
      navigationRight={<LoginNavigationLinks />}
      navigationMiddle={<CoinDisplay />}
      navigationLeft={<DisciplineDropdown />}
      leftColumn={<EventsScreen />}
      rightColumn={<DragColumns />}
    />
  )
}
export default HomePageScreen
