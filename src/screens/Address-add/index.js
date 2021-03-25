import React, {useState, useRef, useEffect} from 'react'
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {Provinces} from '../../mockdata'
//Styling
import styles from './style'
import {Size} from '../../style'
const {width, height, responsiveSize} = Size
const {ip7, ipx} = responsiveSize
import {tailwind} from '../../style/tailwind'
//Assets
import PinLocationIcon from '../../assets/icons/map.svg'
import CheckedIcon from '../../assets/icons/circle-check.svg'
//Components
import {Modalize} from 'react-native-modalize'
import {Input, ItemList} from '../../components'
import {FooterButton, ModalHeader} from '../../parts'
//Functions
import {Toast} from '../../utils'
import {updateAddress_redux} from '../../store/actions/address'
import {addAddress_API} from '../../services/address'
import {updateCartAddress_API} from '../../services/cart'
import {updateCart_redux} from '../../store/actions/cart'

export default ({navigation, route: {params}}) => {
  useEffect(() => {
    if (params && params.location) {
      if (params.location.coords) {
        setLatitude(params.location.coords.latitude)
        setLongitude(params.location.coords.longitude)
      } else {
        setLatitude(params.location.latitude)
        setLongitude(params.location.longitude)
      }
    }
  }, [params])

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [name, setName] = useState('')
  const [pic, setPic] = useState()
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [postalCode, setPostalCode] = useState('')

  const [province, setProvince] = useState('')
  const provinces = Object.keys(Provinces)
  const [city, setCity] = useState('')
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

  const saveAddress = async () => {
    if (!address || !province || !city || !postalCode || !name || !phone) {
      Toast({
        title: 'Warning!',
        text: 'Please fill all required input',
        type: 'error',
      })
    } else {
      const addressObj = {
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
      const updatedAddresses = await addAddress_API(addressObj)
      dispatch(updateAddress_redux(updatedAddresses.data))
      Toast({
        title: 'Success',
        text: 'Your address has been saved!',
      })
      if (params && params.from === 'checkout') {
        const {data} = await updateCartAddress_API(
          updatedAddresses.newAddress._id,
        )
        dispatch(updateCart_redux(data))
        navigation.navigate('Checkout', {address: addressObj})
      } else navigation.goBack()
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

  const tempSave = () => console.log('Test')
  const navigateToMaps = () => {
    navigation.navigate('Maps', {from: 'add'})
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
            <View style={tailwind('flex-row items-center')}>
              <PinLocationIcon style={{marginRight: 10}} />
              <Text style={styles.pinLocationText}>Pin location</Text>
            </View>
            {latitude && longitude ? <CheckedIcon /> : null}
          </TouchableOpacity>
          <KeyboardAvoidingView
            keyboardVerticalOffset={height > ip7.height ? 100 : -145}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitleText}>Contact Person</Text>
              {userInfo.map((info, index) => (
                <Input key={info.placeholder} {...info} />
              ))}
            </View>
          </KeyboardAvoidingView>
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
