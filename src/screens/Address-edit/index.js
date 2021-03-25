import React, {useState, useRef} from 'react'
import {Text, View, ScrollView, TouchableOpacity, FlatList} from 'react-native'
import {useDispatch} from 'react-redux'
import {Provinces} from '../../mockdata'
//Styling
import styles from './style'
import {Size} from '../../style'
const {width, height} = Size
import {tailwind} from '../../style/tailwind'
//Assets
import PinLocationIcon from '../../assets/icons/map.svg'
//Components
import {Modalize} from 'react-native-modalize'
import {Input, ItemList} from '../../components'
import {FooterButton, ModalHeader} from '../../parts'
//Functions
import {Toast} from '../../utils'
import {updateAddress_redux} from '../../store/actions/address'
import {editAddress_API} from '../../services/address'

export default ({navigation, route: {params}}) => {
  const [latitude, setLatitude] = useState(
    params && params.location
      ? params.location.latitude
      : params.addressData.latitude,
  )
  const [longitude, setLongitude] = useState(
    params && params.location
      ? params.location.longitude
      : params.addressData.longitude,
  )
  const [name, setName] = useState(params.addressData.name)
  const [pic, setPic] = useState(params.addressData.pic)
  const [phone, setPhone] = useState(params.addressData.phone)
  const [address, setAddress] = useState(params.addressData.address)
  const [postalCode, setPostalCode] = useState(params.addressData.postalCode)

  const [province, setProvince] = useState(params.addressData.province)
  const provinces = Object.keys(Provinces)
  const [city, setCity] = useState(params.addressData.city)
  const [cities, setCities] = useState([])

  const dispatch = useDispatch()
  //Modalize
  const provinceModal = useRef(null)
  const cityModal = useRef(null)
  const modalAction = (action, type) => {
    let modal
    if (type === 'province') {
      modal = provinceModal.current
    } else if (type === 'city') {
      modal = cityModal.current
    }
    if (modal) {
      if (action === 'open') {
        modal.open()
      } else if (action === 'close') {
        modal.close()
      }
    }
  }

  const tempSave = () => console.log('Test')
  const navigateToMaps = () => {
    navigation.navigate('Maps', {from: 'edit'})
  }

  const chooseProvince = () => {
    setProvince(item)
    setCity('')
    setCities(Provinces[item])
    modalAction('close', 'province')
  }

  const chooseCity = () => {
    setCity(item)
    modalAction('close', 'city')
  }

  const saveAddress = async () => {
    if (!address || !province || !city || !postalCode || !name || !phone) {
      Toast({
        title: 'Warning!',
        text: 'Please fill all required input',
        type: 'error',
      })
    } else {
      const addressObj = {
        _id: params.addressData._id,
        name,
        phone,
        address,
        province,
        city,
        postalCode,
        lng: longitude,
        lat: latitude,
        pic,
      }

      const updatedAddresses = await editAddress_API(
        params.addressData._id,
        addressObj,
      )
      dispatch(updateAddress_redux(updatedAddresses))
      Toast({
        title: 'Success',
        text: 'Your address has been saved!',
      })
      navigation.goBack()
    }
  }

  const userInfo = [
    {
      value: pic,
      onChangeText: setPic,
      placeholder: 'Name',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
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

  const addressInfo = [
    {
      value: name,
      onChangeText: setName,
      placeholder: 'Address name',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
    {
      value: address,
      onChangeText: setAddress,
      placeholder: 'Street address',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
    {
      value: province,
      onChangeText: setProvince,
      placeholder: 'Province',
      type: 'form',
      customContainerStyle: {
        marginBottom: 20,
      },
      onSubmit: () => modalAction('open', 'province'),
    },
    {
      value: city,
      onChangeText: setCity,
      placeholder: 'City',
      type: 'form',
      customContainerStyle: {
        marginBottom: 20,
      },
      onSubmit: () => {
        if (cities.length === 0)
          Toast({
            title: 'Warning!',
            text: 'You need to fill province data first',
            type: 'error',
          })
        else modalAction('open', 'city')
      },
    },
    {
      value: postalCode,
      onChangeText: setPostalCode,
      placeholder: 'Postal code',
      type: 'box',
      customContainerStyle: {
        marginBottom: 20,
      },
    },
  ]

  return (
    <>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitleText}>Shipping Address</Text>
            {addressInfo.map((info, index) => (
              <Input key={info.placeholder} {...info} />
            ))}
          </View>
          <TouchableOpacity
            onPress={navigateToMaps}
            style={styles.pinLocationContainer}>
            <PinLocationIcon style={{marginRight: 10}} />
            <Text style={styles.pinLocationText}>Pin location</Text>
          </TouchableOpacity>
          <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitleText}>Contact Person</Text>
            {userInfo.map((info, index) => (
              <Input key={info.placeholder} {...info} />
            ))}
          </View>
        </View>
      </ScrollView>
      <FooterButton
        styling={{
          buttonStyle: styles.saveButton,
          textStyle: styles.saveButtonText,
        }}
        title="Save"
        onSubmit={saveAddress}
      />
      {/* Modals */}
      <Modalize
        ref={provinceModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'province')}
            saveMethod={tempSave}
            title="Province"
          />
        }
        modalHeight={height / 1.25}
        flatListProps={{
          data: provinces,
          keyExtractor: (item, index) => index.toString(),
          renderItem: ({item}) => (
            <ItemList
              value={item}
              checkedValue={province}
              customStyle={styles.provinceCityListContainer}
              onSubmit={chooseProvince}
            />
          ),
        }}></Modalize>
      <Modalize
        ref={cityModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'city')}
            saveMethod={tempSave}
            title="City"
          />
        }
        modalHeight={height / 1.25}
        flatListProps={{
          data: cities,
          keyExtractor: (item, index) => index.toString(),
          renderItem: ({item}) => (
            <ItemList
              value={item}
              checkedValue={city}
              customStyle={styles.provinceCityListContainer}
              onSubmit={chooseCity}
            />
          ),
        }}></Modalize>
    </>
  )
}
