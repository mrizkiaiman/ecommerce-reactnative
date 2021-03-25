import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {useFormikContext} from 'formik'
//Components
import Input from '../Input'
import ErrorMessage from '../ErrorMessage'

export default ({name, errorMessageCustomStyles, ...otherProps}) => {
  const {
    setFieldTouched,
    setFieldValue,
    values,
    errors,
    touched,
  } = useFormikContext()
  return (
    <View style={styles.mainContainer}>
      <Input
        {...otherProps}
        // onBlur={() => setFieldTouched(name)}
        onChangeText={(text) => setFieldValue(name, text)}
        value={values[name]}
      />
      <ErrorMessage
        visible={touched[name]}
        text={errors[name]}
        customStyles={errorMessageCustomStyles}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {},
})
