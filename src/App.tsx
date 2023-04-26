import { GlobalStyle } from './styles/GlobalStyles'
import { Routes, Route, useLocation } from 'react-router-dom'
import HeroGrid from './layout/HeroGrid'

import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ConfirmAccountScreen from './screens/ConfirmAccountScreen'

export default function App () {
  const location = useLocation()
  return (
    <>
      <GlobalStyle />
      <Routes location={location} key={location.key}>
        <Route path='/' element={<HeroGrid />} />
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route
          path='/confirmaccount/:token'
          element={<ConfirmAccountScreen />}
        />
      </Routes>
    </>
  )
}
