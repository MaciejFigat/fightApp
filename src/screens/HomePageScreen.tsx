import React from 'react'
import LoginNavigationLinks from '../modules/Login/LoginNavigationLinks/LoginNavigationLinks'
import CoinDisplay from '../modules/misc/CoinDisplay/CoinDisplay'
import DisciplineDropdown from '../modules/misc/Dropdowns/DisciplineDropdown'
import EventsScreen from './EventsScreen'
import FightsAndBets from '../modules/Bets/main/FightsAndBets'
import HomePageLayout from '../layout/HomePageLayout'
import HomePageMobileLayout from '../layout/HomePageMobileLayout'

interface HomePageScreenProps {}

const HomePageScreen: React.FC<HomePageScreenProps> = () => {
  return (
    <>
      <HomePageLayout
        navigationRight={<LoginNavigationLinks />}
        navigationMiddle={<CoinDisplay />}
        navigationLeft={<DisciplineDropdown />}
        leftColumn={<EventsScreen />}
        rightColumn={<FightsAndBets />}
      />
      <HomePageMobileLayout
        navigationRight={<LoginNavigationLinks />}
        navigationMiddle={<CoinDisplay />}
        navigationLeft={<DisciplineDropdown />}
      />
    </>
  )
}
export default HomePageScreen
