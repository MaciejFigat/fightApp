import React from 'react'
import LoginNavigationLinks from '../modules/Login/LoginNavigationLinks/LoginNavigationLinks'
import CoinDisplay from '../modules/misc/CoinDisplay/CoinDisplay'
import DisciplineDropdown from '../modules/misc/Dropdowns/DisciplineDropdown'
import EventsScreen from './EventsScreen'
import FightsAndBets from '../modules/Bets/main/FightsAndBets'
import HomePageLayout from '../layout/HomePageLayout'
import HomePageMobileLayout from '../layout/HomePageMobileLayout'
import UserBetDisplay from '../modules/Bets/main/UserBetDisplay'
import AllBetsDisplay from '../modules/Bets/main/AllRegisteredBets'
import CurrentEvent from '../modules/misc/EventsDisplay/CurrentEvent'

interface HomePageScreenProps {}

const HomePageScreen: React.FC<HomePageScreenProps> = () => {
  return (
    <>
      <HomePageLayout
        navigationRight={<LoginNavigationLinks />}
        navigationMiddle={<CoinDisplay />}
        navigationLeft={<DisciplineDropdown />}
        leftColumn={<EventsScreen />}
        rightColumnOptionOne={<FightsAndBets />}
        rightColumnOptionTwo={<AllBetsDisplay />}
        rightColumnOptionThree={<UserBetDisplay />}
        optionOneName={'New Bets'}
        optionTwoName={'All Bets'}
        optionThreeName={'My Bets'}
        bottomLeft={<CurrentEvent />}
      />
      <HomePageMobileLayout
        navigationRight={<LoginNavigationLinks />}
        navigationMiddle={<CoinDisplay />}
        navigationLeft={<DisciplineDropdown />}
        optionOneContent={<UserBetDisplay />}
        optionTwoContent={<AllBetsDisplay />}
      />
    </>
  )
}
export default HomePageScreen
