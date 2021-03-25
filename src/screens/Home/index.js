import React, {useEffect, useContext, useState} from 'react'
import {ScrollView, View, Text, ActivityIndicator} from 'react-native'
import {useDispatch} from 'react-redux'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Components
import {Carousel, PopularCategory, SearchBar} from './components'
import {Category, Product} from '../../components'
import {ScrollViewBounced} from '../../parts'
//Others
import {StaticContext} from '../../contexts'
import {fetchCart_redux} from '../../store/actions/cart'
import {fetchAddress_redux} from '../../store/actions/address'
import {fetchOrders_redux} from '../../store/actions/orders'

export default function Home({navigation}) {
  const dispatch = useDispatch()
  const {bestSeller, popularCategories, allCategories} = useContext(
    StaticContext,
  )
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchHome = () => {
      dispatch(fetchCart_redux())
      dispatch(fetchAddress_redux())
      dispatch(fetchOrders_redux())
      if (bestSeller && popularCategories && allCategories) setIsLoading(false)
    }

    fetchHome()
  }, [])

  const navigateToCategories = () => navigation.navigate('Categories')
  const navigateToProducts = () =>
    navigation.navigate('Products', {keyword: 'Best Seller'})

  if (isLoading)
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator size="large" color="#0389FF" />
      </View>
    )

  return (
    <ScrollView>
      <ScrollViewBounced color="#006266" />
      <View style={styles.mainContainer}>
        <View style={styles.banner}>
          <View style={styles.bannerContentContainer}>
            <Text style={styles.bannerShonenText}>
              Shonen<Text style={styles.bannerPlaysText}>Plays</Text>
            </Text>
            <Text style={styles.welcomeUserText}>Welcome, M. Rizki Aiman</Text>
            <SearchBar />
          </View>
          <View style={styles.carouselContainer}>
            <Carousel />
          </View>
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Popular</Text>
            {/* <Text style={styles.functionalText}>See all</Text> */}
          </View>
          <ScrollView horizontal style={styles.sectionContentContainer}>
            {popularCategories &&
              popularCategories.map((category, index) => (
                <PopularCategory key={category._id} category={category} />
              ))}
          </ScrollView>
        </View>
        <View
          style={{
            ...styles.sectionContainer,
            marginTop: 40,
          }}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Best Seller</Text>
            <Text onPress={navigateToProducts} style={styles.functionalText}>
              See all
            </Text>
          </View>
          <View
            style={{
              ...styles.sectionContentContainer,
              ...tailwind('flex-wrap justify-between items-center'),
            }}>
            {bestSeller &&
              bestSeller.slice(0, 4).map((product, index) => (
                <Product
                  customStyle={{
                    width: width > 410 ? 175 : 155,
                  }}
                  key={product._id}
                  product={product}
                />
              ))}
          </View>
        </View>
        <View
          style={{
            ...styles.sectionContainer,
            ...tailwind('mt-10 mb-7'),
            width,
          }}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Categories</Text>
            <Text onPress={navigateToCategories} style={styles.functionalText}>
              See all
            </Text>
          </View>
          <View
            style={tailwind('flex-row flex-wrap items-center justify-between')}>
            {allCategories &&
              allCategories
                .slice(0, 9)
                .map((category, index) => (
                  <Category key={category._id} category={category} />
                ))}
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

//Voucher Section
{
  /* <View
  style={{
    ...styles.sectionContainer,
    marginTop: 40,
    marginBottom: 30,
  }}>
  <View style={styles.sectionHeaderContainer}>
    <Text style={styles.titleSectionText}>Vouchers</Text>
    <Text style={styles.functionalText}>See all</Text>
  </View>
  <ScrollView horizontal style={styles.sectionContentContainer}>
    <View style={styles.voucherImageContainer}>
      <Image
        source={require('../../assets/Vouchers/voucher-1.png')}
        style={styles.voucherImage}
      />
    </View>
  </ScrollView>
</View> */
}
