import { useEffect } from 'react'
import { useAppSelector } from '../app/reduxHooks'
import { UserInfo } from '../interfaces'
import { useNavigate } from 'react-router-dom'

// this is for redirecting to login when user is not logged in
const useRedirectListener = () => {
  let navigate = useNavigate()

  const userInfo: UserInfo = useAppSelector(state => state.user.userInfo)

  useEffect(() => {
    if (Object.keys(userInfo).length === 0) {
      navigate('/login')
    }
  }, [userInfo, navigate])
  return
}
export default useRedirectListener
