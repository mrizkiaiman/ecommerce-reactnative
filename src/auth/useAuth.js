import {useContext} from 'react'
import jwtDecode from 'jwt-decode'
import AuthContext from './context'
import authStorage from './storage'
import {Toast} from '../utils'

export default useAuth = () => {
  const {user, setUser} = useContext(AuthContext)

  const logIn = (authToken) => {
    return new Promise(async (res) => {
      const users = jwtDecode(authToken)
      await authStorage.storeToken(authToken)
      return new Promise((res) => {
        setUser(users)
        Toast({title: 'Success', text: 'Logged in'})
      })
    })
  }

  const logOut = () => {
    setUser(null)
    authStorage.removeToken()
  }

  return {user, logIn, logOut}
}
