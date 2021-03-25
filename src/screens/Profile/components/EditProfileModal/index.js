import React, {useState, useEffect} from 'react'
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import * as ImagePicker from 'expo-image-picker'
//Styling
import {Size} from '../../../../style'
const {width, height} = Size
import {tailwind} from '../../../../style/tailwind'
//Assets
import UploadIcon from '../../../../assets/icons/upload.svg'
//Components
import {Input, Address} from '../../../../components'

export default ({profileData, profileImage, setProfileImage}) => {
  const {firstName, lastName, mail, defaultAddress, mobilePhone} = profileData
  const [name, setName] = useState(`${firstName} ${lastName}`)
  const [email, setEmail] = useState(mail)
  const [phone, setPhone] = useState(mobilePhone)

  const selectImage = async () => {
    const {granted} = await ImagePicker.requestCameraRollPermissionsAsync()
    if (!granted) alert('You need to enable permission access')
    else {
      try {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          quality: 0.5,
        })

        if (!result.cancelled) {
          setProfileImage(result)
        }
      } catch (error) {
        console.log(error)
      }
    }
  }

  const userInfo = [
    {
      value: name,
      onChangeText: setName,
      placeholder: 'Name',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
    {
      value: email,
      onChangeText: setEmail,
      placeholder: 'Email',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
      disabled: true,
    },
    {
      value: phone,
      onChangeText: setPhone,
      placeholder: 'Phone number',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
  ]

  return (
    <View style={styles.mainContainer}>
      <View style={styles.uploadPhotoContainer}>
        {profileImage.uri ? (
          <TouchableOpacity onPress={selectImage}>
            <Image
              source={{uri: profileImage.uri}}
              style={tailwind('rounded-full w-16 h-16')}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={selectImage} style={styles.profilePhoto}>
            <Image
              source={{uri: profileData.img}}
              style={tailwind('rounded-full w-16 h-16')}
            />
          </TouchableOpacity>
        )}
        <Text style={tailwind('font-normal ml-6 text-lg')}>
          Upload profile photo
        </Text>
      </View>
      <View style={styles.informationContainer}>
        <Text style={tailwind('font-normal font-semibold mb-6')}>
          Contact Person
        </Text>
        {userInfo.map((info, index) => (
          <Input key={info.placeholder} {...info} />
        ))}
      </View>
      <View style={styles.informationContainer}>
        <View style={tailwind('flex-row justify-between')}>
          <Text style={tailwind('font-normal font-semibold mb-8')}>
            Default Address
          </Text>
          <Text style={tailwind('font-functional')}>Change Address</Text>
        </View>
        <Address addressData={defaultAddress} />
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
    height: 64,
    width: 64,
    borderRadius: 100,
    backgroundColor: '#F3F3F3',
    ...tailwind('justify-center items-center'),
  },
  informationContainer: {
    ...tailwind('p-4 bg-white mt-2'),
  },
})
