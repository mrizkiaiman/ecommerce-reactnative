import React, {useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size} from '../../../../style'
const {width, height} = Size
import {tailwind} from '../../../../style/tailwind'
//Assets
import UploadIcon from '../../../../assets/icons/upload.svg'
//Components
import {Input, Address} from '../../../../components'
//Functions

export default ({Hardcode}) => {
  const [currentPassword, setCurrentPassword] = useState('')
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [newPassword, setNewPassword] = useState('')
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false)

  const userInfo = [
    {
      value: currentPassword,
      onChangeText: setCurrentPassword,
      placeholder: 'Current Password',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
      passwordConfig: {
        showPassword: showCurrentPassword,
        setShowPassword: setShowCurrentPassword,
      },
    },
    {
      value: newPassword,
      onChangeText: setNewPassword,
      placeholder: 'New Password',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
      disabled: true,
      passwordConfig: {
        showPassword: showNewPassword,
        setShowPassword: setShowNewPassword,
      },
    },
    {
      value: confirmNewPassword,
      onChangeText: setConfirmNewPassword,
      placeholder: 'Confirm New Password',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
      passwordConfig: {
        showPassword: showConfirmNewPassword,
        setShowPassword: setShowConfirmNewPassword,
      },
    },
  ]

  return (
    <View style={styles.mainContainer}>
      <View style={styles.informationContainer}>
        {userInfo.map((info, index) => (
          <Input key={info.placeholder} {...info} />
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F2F4F7',
    height,
  },
  uploadPhotoContainer: tailwind('flex-row items-center p-4 mt-2 bg-white'),
  profilePhoto: {
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: '#F3F3F3',
    ...tailwind('justify-center items-center'),
  },
  informationContainer: {
    ...tailwind('p-4 bg-white mt-2'),
  },
})
