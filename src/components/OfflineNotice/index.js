import React from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Constants from 'expo-constants'
import {useNetInfo} from '@react-native-community/netinfo'
import {tailwind} from '../../style/tailwind'

function OfflineNotice(props) {
  const netInfo = useNetInfo()

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={tailwind('text-white font-semibold text-base')}>
          No Internet Connection
        </Text>
      </View>
    )

  return null
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
    justifyContent: 'center',
    position: 'absolute',
    top: Constants.statusBarHeight,
    width: '100%',
    zIndex: 1,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})

export default OfflineNotice
