import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View, Modal} from 'react-native'
//Components
import * as Progress from 'react-native-progress'
import AnimatedLoader from 'react-native-animated-loader'

export default ({progress = 0, visible = false, onDone}) => {
  return (
    <Modal visible={visible}>
      <View style={styles.mainContainer}>
        {progress < 1 ? (
          <Progress.Bar color="#006266" progress={progress} width={300} />
        ) : (
          <AnimatedLoader
            visible={true}
            loop={false}
            speed={1}
            animationStyle={{width: 260, height: 260}}
            source={require('../../assets/animations/Done.json')}
            overlayColor="white"
          />
        )}
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
