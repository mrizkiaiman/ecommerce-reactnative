import React from 'react'
import {SafeAreaView, View, Text, Dimensions} from 'react-native'
import styles from './style'
//Assets
import WelcomeBanner from '../../assets/Illustrations/Welcome-game.svg'
//Components
import Button from '../../src/components/Button'

export default Welcome = ({navigation}) => {
  const {width, height} = Dimensions.get('window')
  const navigateToSignIn = () => {
    navigation.navigate('SignIn')
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerTitleText}>Welcome!</Text>
        <Text style={styles.headerText}>
          ShonenPlays provides your hobbies needs
        </Text>
        <Text style={styles.headerText}>
          and it will certainly fulfilled your desires
        </Text>
        <Text style={styles.headerText}>no matter what your hobbies are</Text>
        <Button
          styling={{
            buttonStyle: styles.getStartedButton,
            textStyle: styles.getStartedButtonText,
          }}
          onSubmit={navigateToSignIn}
          title="Get Started"
        />
      </View>
      <View style={{alignSelf: 'flex-end'}}>
        <WelcomeBanner width={width * 0.75} height={height} />
      </View>
    </SafeAreaView>
  )
}
