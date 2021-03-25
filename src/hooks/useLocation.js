import {useState, useEffect} from 'react'
import * as Location from 'expo-location'

export default () => {
  const [location, setLocation] = useState()

  try {
  } catch (error) {
    console.log({error})
  }

  const getLocation = async () => {
    try {
      const {granted} = await Location.requestPermissionsAsync()
      if (!granted) return
      const {
        coords: {longitude, latitude},
      } = await Location.getLastKnownPositionAsync() //Better performance than current position
      setLocation({longitude, latitude})
    } catch (error) {
      console.log({error})
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return location
}
