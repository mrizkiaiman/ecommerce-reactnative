import React from 'react'
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {Buttons, Colors, Fonts, Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
import RightIcon from '../../assets/icons/rightDirection.svg'
import ShowPasswordIcon from '../../assets/icons/showPassword.svg'
import HidePasswordIcon from '../../assets/icons/hidePassword.svg'

export default function Input({
  value,
  onChangeText,
  placeholder,
  customContainerStyle,
  type,
  passwordConfig,
  autoCapitalize,
  onSubmit,
  onBlur,
}) {
  const {width} = Size
  const styles = StyleSheet.create({
    mainContainer: {
      ...tailwind('border-0.8 border-dgray rounded'),
      width: width * 0.9,
      ...customContainerStyle,
    },
    input: {
      ...tailwind('font-normal p-4'),
      width: width * 0.75,
    },
    passwordToggle: {
      right: 0,
      marginRight: width * 0.04,
    },
    formContainer: {
      ...tailwind(
        'flex-row justify-between items-center border-0.8 border-dgray rounded',
      ),
      paddingVertical: 2.7,
    },
  })

  const displayPassword = () => {
    if (passwordConfig && passwordConfig.setShowPassword)
      passwordConfig.setShowPassword(!passwordConfig.showPassword)
  }

  return type === 'box' ? (
    passwordConfig ? (
      <View
        style={{
          ...styles.mainContainer,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          secureTextEntry={!passwordConfig.showPassword}
          autoCapitalize="none"
          placeholderTextColor={'#777777'}
          onBlur={onBlur ? () => onBlur() : null}
        />
        {passwordConfig.showPassword ? (
          <TouchableOpacity
            onPress={displayPassword}
            style={styles.passwordToggle}>
            <HidePasswordIcon />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={displayPassword}
            style={styles.passwordToggle}>
            <ShowPasswordIcon />
          </TouchableOpacity>
        )}
      </View>
    ) : (
      <View style={styles.mainContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.input}
          placeholderTextColor={'#777777'}
          autoCapitalize={autoCapitalize}
          onBlur={onBlur ? () => onBlur() : null}
        />
      </View>
    )
  ) : (
    type === 'form' && (
      <View style={{...styles.formContainer, ...customContainerStyle}}>
        <Text
          onPress={onSubmit ? onSubmit : null}
          style={
            value
              ? {...styles.input, ...tailwind('text-black')}
              : {...styles.input, ...tailwind('text-dgray')}
          }>
          {value ? value : placeholder}
        </Text>
        <RightIcon style={{marginRight: 10}} />
      </View>
    )
  )
}
