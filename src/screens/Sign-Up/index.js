import React, {useState} from 'react'
import {SafeAreaView, View, Text, Image} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import styles from './style'
//Assets
import GoogleIcon from '../../assets/icons/google.svg'
//Components
import {Button, FormField, FormButton, Form} from '../../components'
//Functions
import {addUser} from '../../store/actions/users'
import {Toast, FormValidation} from '../../utils'
import {tailwind} from '../../style/tailwind'

export default function SignUpScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(false)
  const usersFromRedux = useSelector((state) => state.users.data)
  const dispatch = useDispatch()

  const signUpOnSubmit = (email, password, firstName, lastName) => {
    const isVerified = usersFromRedux.some((user) => user.email == email)
    if (isVerified) {
      dispatch(
        addUser({
          firstName,
          lastName,
          email,
          password,
        }),
      )
      Toast({title: 'Success', text: 'Your account is already registered'})
      navigation.navigate('BottomTabs', {screen: 'Home'})
    } else {
      Toast({
        title: 'Failed',
        text: 'Email is already registered',
        type: 'error',
      })
    }
  }

  const googleSignIn = () => {
    Toast({title: 'Success', text: 'Logged in'})
    navigation.navigate('BottomTabs', {screen: 'Home'})
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.mainContainer}>
        <View style={styles.headerTextContainer}>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitleText}>ShonenPlays</Text>
            <Image
              style={styles.spLogo}
              source={require('../../assets/Logo.png')}
            />
          </View>
          <Text style={styles.headerText}>
            Please fill all the required data to sign up
          </Text>
        </View>
        <Form
          initialValues={{email: '', password: '', firstName: '', lastName: ''}}
          onSubmit={(email, password) =>
            signUpOnSubmit(email, password, firstName, lastName)
          }
          validationSchema={FormValidation.SignUp}>
          <View style={styles.inputsContainer}>
            <FormField
              name="firstName"
              placeholder="First name"
              autoCapitalize="none"
              type="box"
              customContainerStyle={tailwind('mb-5')}
              errorMessageCustomStyles={{marginTop: -16, marginBottom: 14}}
            />
            <FormField
              name="lastName"
              placeholder="Last name"
              autoCapitalize="none"
              type="box"
              customContainerStyle={tailwind('mb-5')}
              errorMessageCustomStyles={{marginTop: -16, marginBottom: 14}}
            />
            <FormField
              name="email"
              placeholder="Email"
              autoCapitalize="none"
              type="box"
              customContainerStyle={tailwind('mb-5')}
              errorMessageCustomStyles={{marginTop: -16, marginBottom: 14}}
            />
            <FormField
              name="password"
              placeholder="Password"
              type="box"
              autoCapitalize="none"
              passwordConfig={{showPassword, setShowPassword}}
            />
          </View>
          <FormButton
            styling={{
              buttonStyle: styles.signInButton,
              textStyle: styles.signInButtonText,
            }}
            title="Sign up"
          />
        </Form>
        <Button
          onSubmit={googleSignIn}
          styling={{
            buttonStyle: styles.connectWithGoogleButton,
            textStyle: styles.connectWithGoogleButtonText,
          }}
          title="Connect with Google"
          additionalComponents={{position: 'left', comps: <GoogleIcon />}}
        />
        <Text style={styles.navigateToSignUpText}>
          Already have an account?{' '}
          <Text onPress={navigation.goBack} style={styles.functionalText}>
            Sign in
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}
