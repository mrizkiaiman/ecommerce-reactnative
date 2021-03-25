import React, {useState, useEffect} from 'react'
import {AppLoading} from 'expo'
import {Provider} from 'react-redux'
import * as ScreenOrientation from 'expo-screen-orientation'
import store from './src/store'
//Components
import AppIntroSlider from './app-intro-slider'
import AuthNavigator from './src/navigation/AuthNavigator'
import AppNavigator from './src/navigation/AppNavigator'
import {OfflineNotice} from './src/components'
import Toast from 'react-native-toast-message'
//Fonts
import {
  useFonts,
  Oxanium_200ExtraLight,
  Oxanium_300Light,
  Oxanium_400Regular,
  Oxanium_500Medium,
  Oxanium_600SemiBold,
  Oxanium_700Bold,
  Oxanium_800ExtraBold,
} from '@expo-google-fonts/oxanium'
//Functions
import AuthContext from './src/auth/context'
import authStorage from './src/auth/storage'
import {StaticContext} from './src/contexts'
import {
  getBestSeller_API,
  getPopularCategories_API,
  getCategories_API,
  getPromo_API,
} from './src/services/products'

export default function App() {
  const [openApp, setOpenApp] = useState(false)
  const [user, setUser] = useState(null)
  const [isReady, setIsReady] = useState(false)
  const [staticData, setStaticData] = useState({})

  useEffect(() => {
    fetchStaticData()
    lockOrientation()
  }, [])

  const fetchStaticData = async () => {
    const bestSeller = await getBestSeller_API()
    const promoProducts = await getPromo_API()
    const popularCategories = await getPopularCategories_API()
    const allCategories = await getCategories_API()
    setStaticData({bestSeller, promoProducts, popularCategories, allCategories})
  }

  const lockOrientation = async () => {
    const locked = await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT_UP,
    )
    return locked
  }

  let [fontsLoaded] = useFonts({
    Oxanium_200ExtraLight,
    Oxanium_300Light,
    Oxanium_400Regular,
    Oxanium_500Medium,
    Oxanium_600SemiBold,
    Oxanium_700Bold,
    Oxanium_800ExtraBold,
  })

  const restoreUser = async () => {
    const user = await authStorage.getUser()
    if (user) setUser(user)
  }

  const MainNavigator = () => {
    return (
      <AuthContext.Provider value={{user, setUser}}>
        <StaticContext.Provider
          value={{
            ...staticData,
          }}>
          <Provider store={store}>
            <OfflineNotice />

            {user ? <AppNavigator /> : <AuthNavigator />}

            <Toast ref={(ref) => Toast.setRef(ref)} />
          </Provider>
        </StaticContext.Provider>
      </AuthContext.Provider>
    )
  }

  if (!isReady || !fontsLoaded)
    return (
      <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
    )
  else return <MainNavigator />
}

// const bestSeller = useAPI(getBestSeller_API)
// const promoProducts = useAPI(getPromo_API)
// const popularCategories = useAPI(getPopularCategories_API)
// const allCategories = useAPI(getCategories_API)

// useEffect(() => {
//   lockOrientation()
// }, [])

// if (!isReady || !fontsLoaded)
//   return (
//     <AppLoading startAsync={restoreUser} onFinish={() => setIsReady(true)} />
//   )
// else if (user || openApp) {
//   return <MainNavigator />
// } else {
//   return <AppIntroSlider openApp={() => setOpenApp(true)} />
// }

// if (user) {
//   return (
//     <AuthContext.Provider value={{user, setUser}}>
//       <Provider store={store}>
//         <NavigationContainer>
//           {user ? <MainNavigator /> : <AuthNavigator />}
//         </NavigationContainer>
//         <Toast ref={(ref) => Toast.setRef(ref)} />
//       </Provider>
//     </AuthContext.Provider>
//   )
// } else if (openApp) {
//   return (
//     <AuthContext.Provider value={{user, setUser}}>
//       <Provider store={store}>
//         <NavigationContainer>
//           {user ? <MainNavigator /> : <AuthNavigator />}
//         </NavigationContainer>
//         <Toast ref={(ref) => Toast.setRef(ref)} />
//       </Provider>
//     </AuthContext.Provider>
//   )
// } else {
//   return <AppIntroSlider openApp={() => setOpenApp(true)} />
// }
