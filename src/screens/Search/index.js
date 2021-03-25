import React, {useState, useContext} from 'react'
import {Text, View, ScrollView} from 'react-native'
import {Categories} from '../../mockdata'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import {Search, Category} from '../../components'
import {PopularCategory} from './components'
//Functions
import {useAPI} from '../../hooks'
import {getPopularCategories_API} from '../../services/products'
import {StaticContext} from '../../contexts'

export default ({navigation}) => {
  const [searchKeyword, setSearchKeyword] = useState('')
  const popularKeywords = ['AJ1 Chicago', 'Shonen JUMP!', 'One Piece']
  const {popularCategories} = useContext(StaticContext)

  const navigateToProducts = () =>
    navigation.navigate('Products', {keyword: searchKeyword})

  return (
    <ScrollView style={tailwind('bg-white')}>
      <View style={styles.mainContainer}>
        <Search
          searchKeyword={searchKeyword}
          setSearchKeyword={setSearchKeyword}
          customStyles={{
            backgroundColor: '#F6F7F8',
          }}
          onSubmit={navigateToProducts}
        />
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Popular search</Text>
            {/* <Text style={styles.functionalText}>Clear</Text> */}
          </View>
          {popularKeywords.map((keyword, index) => (
            <Text
              onPress={() => setSearchKeyword(keyword)}
              style={styles.popularKeywordText}
              key={keyword}>
              {keyword}
            </Text>
          ))}
        </View>
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={styles.titleSectionText}>Top categories</Text>
          </View>
          <ScrollView horizontal style={styles.sectionContentContainer}>
            {popularCategories.map((category, index) => (
              <PopularCategory key={category._id} category={category} />
            ))}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  )
}
