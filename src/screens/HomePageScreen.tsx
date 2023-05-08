import React from 'react'
import LoginNavigationLinks from '../modules/Login/LoginNavigationLinks/LoginNavigationLinks'
import CoinDisplay from '../modules/misc/CoinDisplay/CoinDisplay'
import DisciplineDropdown from '../modules/misc/Dropdowns/DisciplineDropdown'
import EventsScreen from './EventsScreen'
import FightsAndBets from '../modules/Bets/main/FightsAndBets'
import HomePageLayout from '../layout/HomePageLayout'
import HomePageMobileLayout from '../layout/HomePageMobileLayout'
import UserCreatedBets from '../modules/Bets/main/UserCreatedBets'
import AllBetsDisplay from '../modules/Bets/main/AllRegisteredBets'
import CurrentEvent from '../modules/misc/EventsDisplay/CurrentEvent'
// import UserAcceptedBets from '../modules/Bets/main/UserAcceptedBets'
import BetsDisplayDesktop from '../modules/Bets/main/BetsDisplayDesktop'

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
        rightColumnOptionThree={<BetsDisplayDesktop />}
        optionOneName={'New Bets'}
        optionTwoName={'All Bets'}
        optionThreeName={'My Bets'}
        bottomLeft={<CurrentEvent />}
      />
      <HomePageMobileLayout
        navigationRight={<LoginNavigationLinks />}
        navigationMiddle={<CoinDisplay />}
        navigationLeft={<DisciplineDropdown />}
        optionOneContent={<UserCreatedBets />}
        optionTwoContent={<AllBetsDisplay />}
      />
    </>
  )
}
export default HomePageScreen
