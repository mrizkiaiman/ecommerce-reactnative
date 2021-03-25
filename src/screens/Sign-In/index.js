import React, {useState} from 'react'
import {SafeAreaView, View, Text, Image} from 'react-native'
import * as Google from 'expo-google-app-auth'
import styles from './style'
//Assets
import GoogleIcon from '../../assets/icons/google.svg'
//Components
import {Button, FormField, FormButton, Form} from '../../components'
//Functions
import useAuth from '../../auth/useAuth'
import {signIn_API} from '../../services/auth'
import {Toast, FormValidation} from '../../utils'
import {tailwind} from '../../style/tailwind'

export default function SignInScreen({navigation}) {
  const [showPassword, setShowPassword] = useState(false)
  const auth = useAuth()

  const signInOnSubmit = async (values) => {
    const {email, password} = values
    const result = await signIn_API(email, password)
    if (result.ok) await auth.logIn(result.data.token)
    else if (result.name.includes('Error'))
      Toast({title: 'Failed', text: 'Wrong email/password', type: 'error'})
  }

  const googleSignIn = async () => {
    console.log('Removed temporary for repository safety')
  }

  const navigateToSignUp = () => navigation.navigate('SignUp')

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
            Enter your email and password to sign in
          </Text>
        </View>
        <Form
          initialValues={{email: '', password: ''}}
          onSubmit={async (values, {resetForm, setSubmitting}) => {
            await signInOnSubmit(values)
            setSubmitting(true)
            resetForm()
          }}
          validationSchema={FormValidation.SignIn}>
          <View style={styles.inputsContainer}>
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
            title="Sign in"
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
          Don't have an account?{' '}
          <Text onPress={navigateToSignUp} style={styles.functionalText}>
            Sign up
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  )
}
