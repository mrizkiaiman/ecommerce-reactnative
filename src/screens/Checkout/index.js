import React, {useRef, useEffect, useState, useMemo} from 'react'
import {Text, View, ScrollView} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {Shipping} from '../../mockdata'
//Styling
import styles from './style'
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
import RightIcon from '../../assets/icons/rightDirection-dgreen.svg'
//Components
import {Modalize} from 'react-native-modalize'
import {
  OrderSummary,
  Product,
  AddressModal,
  ShippingMethodModal,
} from './components'
import {Button, Address} from '../../components'
import {FooterButton, EmptyState, ModalHeader} from '../../parts'
//Functions
import {IDRFormat, Toast} from '../../utils'
import {
  updateCartAddress_API,
  updateCartShipping_API,
  submitCart_API,
} from '../../services/cart'
import {updateCart_redux, clearCart_redux} from '../../store/actions/cart'
import {fetchOrders_redux} from '../../store/actions/orders'

export default ({navigation, route: {params}}) => {
  useEffect(() => {
    if (params && params.address) {
      setSelectedAddress(params && params.address ? params.address : null)
    }
  }, [params])

  const dispatch = useDispatch()
  const cartFromRedux = useSelector((state) => state.cart.data)
  const addressFromRedux = useSelector((state) => state.address.data)
  const [selectedAddress, setSelectedAddress] = useState(
    cartFromRedux.shipping_address ? cartFromRedux.shipping_address : null,
  )
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(
    cartFromRedux.shipping_method,
  )
  const setAddress = async (value) => {
    const {data} = await updateCartAddress_API(value._id)
    dispatch(updateCart_redux(data))
    setSelectedAddress(value)
    modalAction('close', 'shippingAddress')
  }

  const setShippingMethod = async (value) => {
    const {data} = await updateCartShipping_API(value)
    dispatch(updateCart_redux(data))
    setSelectedShippingMethod(value)
    modalAction('close', 'shippingMethod')
  }

  const paymentOnSubmit = async () => {
    if (!selectedAddress || !selectedShippingMethod)
      Toast({
        title: 'Warning',
        text: 'You need to fill address and shipping method first',
        type: 'error',
      })
    else {
      await submitCart_API()
      dispatch(fetchOrders_redux())
      dispatch(clearCart_redux())
      Toast({
        title: 'Success',
        text: 'Payment success!',
      })
      navigation.navigate('BottomTabs', {screen: 'Orders'})
    }
  }

  const navigateToAddAddress = () =>
    navigation.navigate('AddShippingAddress', {from: 'checkout'})
  const tempSave = () => console.log('Test')

  //Modalize
  const changeShippingAddressModal = useRef(null)
  const changeShippingMethodModal = useRef(null)
  const modalAction = (action, type) => {
    let modal
    if (type === 'shippingAddress') {
      modal = changeShippingAddressModal.current
    } else {
      if (!selectedAddress)
        Toast({
          title: 'Warning',
          text: 'You need to fill address first',
          type: 'error',
        })
      else modal = changeShippingMethodModal.current
    }
    if (modal) {
      if (action === 'open') {
        modal.open()
      } else if (action === 'close') {
        modal.close()
      }
    }
  }

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        {/* Shipping Address */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Shipping Address</Text>
            {selectedAddress && (
              <Text
                onPress={() => modalAction('open', 'shippingAddress')}
                style={styles.functionalText}>
                {selectedAddress ? 'Change address' : 'Choose address'}
              </Text>
            )}
          </View>
          {selectedAddress ? (
            <Address addressData={selectedAddress} />
          ) : addressFromRedux.length > 0 ? (
            <EmptyState
              onSubmit={() => modalAction('open', 'shippingAddress')}
              screen="Address"
              buttonText="Choose address"
              size="sm"
            />
          ) : (
            <EmptyState
              onSubmit={navigateToAddAddress}
              screen="Address"
              buttonText="Add new address"
              size="sm"
            />
          )}
        </View>
        {/* Products */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Products</Text>
          </View>
          {cartFromRedux &&
            cartFromRedux.products &&
            cartFromRedux.products.map((product, index) => (
              <Product key={product._id} productData={product} />
            ))}
        </View>
        {/* Shipping Method */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Shipping Method</Text>
          </View>
          {selectedShippingMethod && selectedShippingMethod.name ? (
            <Button
              styling={{
                buttonStyle: {
                  ...styles.changeShippingMethodButton,
                  ...tailwind('border-dgreen'),
                },
                textStyle: tailwind('font-normal font-semibold'),
              }}
              title={`${selectedShippingMethod.name}  -  Rp${IDRFormat(
                Number(selectedShippingMethod.cost),
              )}`}
              additionalComponents={{comps: <RightIcon />, position: 'right'}}
              onSubmit={() => modalAction('open', 'shippingMethod')}
            />
          ) : (
            <Button
              styling={{
                buttonStyle: styles.changeShippingMethodButton,
                textStyle: styles.changeShippingMethodButtonText,
              }}
              title="Change shipping method"
              additionalComponents={{comps: <RightIcon />, position: 'right'}}
              onSubmit={() => modalAction('open', 'shippingMethod')}
            />
          )}
        </View>
        {/* Order Summary */}
        <View style={{...styles.sectionContainer, marginBottom: 30}}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Order Summary</Text>
          </View>
          <OrderSummary
            costData={{
              shipping:
                cartFromRedux &&
                cartFromRedux.shipping_method &&
                cartFromRedux.shipping_method.cost
                  ? cartFromRedux.shipping_method.cost
                  : 0,
              total:
                cartFromRedux.total -
                (cartFromRedux &&
                cartFromRedux.shipping_method &&
                cartFromRedux.shipping_method.cost
                  ? cartFromRedux.shipping_method.cost
                  : 0),
              discount: cartFromRedux && cartFromRedux.discount,
            }}
          />
        </View>
      </ScrollView>
      <FooterButton
        styling={{
          buttonStyle: {
            ...Buttons.submitButton,
            width: width * 0.9,
          },
          textStyle: tailwind('font-normal font-semibold text-white'),
        }}
        onSubmit={paymentOnSubmit}
        title="Pay"
      />
      <Modalize
        ref={changeShippingAddressModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'shippingAddress')}
            saveMethod={tempSave}
            title="Change Address"
          />
        }
        modalHeight={height / 1.25}>
        <AddressModal setAddress={setAddress} />
      </Modalize>
      <Modalize
        ref={changeShippingMethodModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'shippingMethod')}
            saveMethod={tempSave}
            title="Change Shipping Method"
          />
        }
        modalHeight={height / 1.5}>
        <ShippingMethodModal setShippingMethod={setShippingMethod} />
      </Modalize>
    </>
  )
}
