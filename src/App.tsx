import { Provider } from 'mobx-react'
// import Home from './screens/Home'
import { GlobalStyle } from './GlobalStyles'
import HeroGrid from './layout/HeroGrid'
import Store from './store/SportsStore'

export default function App () {
  return (
    <Provider store={Store}>
      {' '}
      <GlobalStyle />
      {/* <Home /> */}
      <HeroGrid />
    </Provider>
  )
}
