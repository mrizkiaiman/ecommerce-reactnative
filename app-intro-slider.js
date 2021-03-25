import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import {Size} from './src/style'
import {tailwind} from './src/style/tailwind'
const {width, height} = Size
//Assets
import GamingIllustration from './src/assets/illustrations/Intro-screens/Intro-game.svg'
import DeliveryIllustration from './src/assets/illustrations/Intro-screens/Intro-delivery.svg'
import EasyRegistrationIllustration from './src/assets/illustrations/Intro-screens/Intro-easyRegistration.svg'
import WelcomeIllustration from './src/assets/illustrations/Intro-screens/Intro-welcome.svg'
//Components
import {Ionicons} from '@expo/vector-icons'
import AppIntroSlider from 'react-native-app-intro-slider'

const styles = StyleSheet.create({
  mainContainer: {
    ...tailwind('justify-center items-center'),
    height: height,
  },
  titleText: tailwind('font-H2 my-5 text-dgray text-3xl'),
  explanationText: {
    ...tailwind('font-normal text-dgray mb-1 text-center'),
    width: width * 0.8,
  },
  buttonCircle: {
    ...tailwind('w-10 h-10 justify-center items-center mr-5 rounded-3xl'),
    backgroundColor: 'rgba(0, 0, 0, .2)',
  },
})

export default function IntroSlider({openApp}) {
  const slides = [
    {
      key: 'zero',
      title: 'Easy registration',
      firstLineOfText: 'It takes only less than five minutes ',
      secondLineOfText:
        'to sign up with your email or one touch with your google account',
      image: <EasyRegistrationIllustration width={250} height={250} />,
    },
    {
      key: 'one',
      title: 'Free delivery offers',
      firstLineOfText: 'Free delivery for new customers via',
      secondLineOfText: 'BCA and other payment methods',

      image: <DeliveryIllustration width={250} height={250} />,
    },
    // {
    //   key: 'two',
    //   title: 'All your favorites',
    //   firstLineOfText: 'Easily get what you needs,',
    //   secondLineOfText: 'we already have covered almost everything',
    //   image: <GamingIllustration width={250} height={250} />,
    // },
    {
      key: 'three',
      title: 'Welcome!',
      firstLineOfText: 'ShonenPlays provides your hobbies,',
      secondLineOfText: 'and will make sure to fulfill your desires',
      image: <WelcomeIllustration width={250} height={250} />,
    },
  ]

  const renderScreen = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        {item.image}
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.explanationText}>{item.firstLineOfText}</Text>
        <Text style={styles.explanationText}>{item.secondLineOfText}</Text>
      </View>
    )
  }

  const doneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-checkmark"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    )
  }

  const nextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Ionicons
          name="md-arrow-round-forward"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    )
  }

  return (
    <AppIntroSlider
      activeDotStyle={tailwind('bg-orange')}
      renderItem={renderScreen}
      data={slides}
      onDone={() => openApp()}
      renderDoneButton={doneButton}
      renderNextButton={nextButton}
    />
  )
}
