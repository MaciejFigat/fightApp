import React from 'react'
import { useAppSelector } from '../../../reduxState/reduxHooks'
import { UserInfo } from '../../../interfaces'
import { HighlightText } from '../../../styles/misc.styles'
import { TextColor } from '../../../consts'
interface CoinDisplayProps {}

const CoinDisplay: React.FC<CoinDisplayProps> = () => {
  const userInfo: UserInfo | {} = useAppSelector(state => state.user.userInfo)

  const coinsAvailable = (userInfo as UserInfo).coinsAvailable
  return (
    <HighlightText color={TextColor.GOLD}>
      Coins: {coinsAvailable ?? 0}
    </HighlightText>
  )
}
export default CoinDisplay
