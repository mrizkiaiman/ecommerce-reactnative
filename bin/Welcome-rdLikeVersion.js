import React from 'react'
import {SafeAreaView, View, Text, Dimensions, Image} from 'react-native'
import styles from '../src/screens/Welcome/style'
//Assets
import WelcomeBanner from '../../assets/Illustrations/Success.svg'
//Components
import CustomButton from '../src/components/Button'

export default Welcome = () => {
  const {width, height} = Dimensions.get('window')
  const Buttons = [
    {
      styling: {
        buttonStyle: styles.continueWithEmailButton,
        textStyle: styles.continueWithEmailButtonText,
      },
      title: 'Continue with Email',
      onSubmit: () => console.log('Test'),
    },
    {
      styling: {
        buttonStyle: styles.connectWithGoogleButton,
        textStyle: styles.connectWithGoogleButtonText,
      },
      title: 'Connect with Google',
      onSubmit: () => console.log('Test'),
    },
  ]

  return (
    <SafeAreaView style={styles.mainContainer}>
      <WelcomeBanner width={width} height={height * 0.6} />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={styles.spLogo}
          source={require('../../assets/Logo.png')}
        />
      </View>

      {Buttons.map((button, index) => (
        <CustomButton key={index} {...button} />
      ))}
      <Text style={styles.navigateToSignUpText}>
        Don't have an account?{' '}
        <Text style={styles.functionalText}>Sign up</Text> here
      </Text>
    </SafeAreaView>
  )
}
