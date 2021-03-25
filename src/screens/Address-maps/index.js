import React, {useState, useEffect} from 'react'
import {Text, View} from 'react-native'
//Components
import {InputMap, ChooseLocationButton} from './components'
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps'
import * as Location from 'expo-location'
//Functions
import {Toast} from '../../utils'
import {useLocation} from '../../hooks'

export default ({navigation, route}) => {
  const {
    params: {from},
  } = route
  const locationAPI = useLocation()
  const [location, setLocation] = useState(locationAPI ? locationAPI : {})

  const navigateScreen = () => {
    Toast({
      title: 'Success',
      text: 'Location is saved!',
    })
    if (from === 'edit') navigation.navigate('EditShippingAddress', {location})
    else navigation.navigate('AddShippingAddress', {location})
  }

  const changeCurrentLocation = (loc) => {
    setLocation({
      latitude: loc.result.geometry.location.lat,
      longitude: loc.result.geometry.location.lng,
      latitudeDelta: 0.003,
      longitudeDelta: 0.003,
    })
  }

  return (
    <View>
      <InputMap notifyChange={changeCurrentLocation} />
      <MapView
        showsUserLocation
        showsIndoorLevelPicker
        followsUserLocation
        style={{width: '100%', height: '100%'}}
        region={location}
        onRegionChangeComplete={(region) => {
          setLocation({
            ...location,
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: region.latitudeDelta,
            longitudeDelta: region.longitudeDelta,
          })
        }}>
        <Marker
          draggable
          coordinate={location}
          title="Your Location"
          description="Chosen Location"
        />
      </MapView>
      <ChooseLocationButton navigate={navigateScreen} />
    </View>
  )
}
