import React from 'react'
import {View, Text} from 'react-native'
import AnimatedLoader from 'react-native-animated-loader'
import {tailwind} from '../../style/tailwind'

export default () => {
  return (
    <AnimatedLoader
      visible={true}
      source={require('../../assets/animations/Loading.json')}
      speed={1}
      animationStyle={{
        width: 250,
        height: 250,
      }}></AnimatedLoader>
  )
}
