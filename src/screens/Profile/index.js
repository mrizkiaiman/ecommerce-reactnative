import React, {useRef, useState} from 'react'
import {Text, View, ScrollView} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
//Styling
import styles from './style'
import {Size} from '../../style'
const {width, height} = Size
//Assets
import {
  EditProfileIcon,
  ChangePasswordIcon,
  WishlistIcon,
  ShippingAddressIcon,
  HelpIcon,
  LogoutIcon,
} from '../../assets/icons/MoreMenu'
//Components
import {Image} from 'react-native-expo-image-cache'
import {Modalize} from 'react-native-modalize'
import {TabScreenHeader, ModalHeader} from '../../parts'
import {UploadModal} from '../../components'
import {Menu, EditProfileModal, ChangePasswordModal} from './components'
//Functions
import {WhatsAppLink} from '../../utils'
import {updateProfile_API} from '../../services/profile'
import {updatePhoto} from '../../store/actions/profile'
import useAuth from '../../auth/useAuth'

export default ({navigation}) => {
  const profileFromRedux = useSelector((state) => state.profile)
  const {firstName, lastName, mail, img, thumbnailImg} = profileFromRedux
  const dispatch = useDispatch()
  const {user, logOut} = useAuth()

  const [uploadVisible, setUploadVisible] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [profileImage, setProfileImage] = useState(profileFromRedux.img)
  //Modalize
  const editProfileModal = useRef(null)
  const changePasswordModal = useRef(null)
  const modalAction = (action, type) => {
    let modal
    if (type === 'editProfile') {
      modal = editProfileModal.current
    } else if (type === 'changePassword') {
      modal = changePasswordModal.current
    }
    if (modal) {
      if (action === 'open') {
        modal.open()
      } else if (action === 'close') {
        modal.close()
      }
    }
  }

  const saveProfile = async () => {
    setUploadVisible(true)
    const result = await updateProfile_API(profileImage, (progress) =>
      setUploadProgress(progress),
    )
    dispatch(updatePhoto(result.link))
    setUploadVisible(false)
    modalAction('close', 'editProfile')
  }

  const tempSave = () => console.log('Test')

  const menuFirstRow = [
    {
      name: 'Edit Profile',
      icon: <EditProfileIcon />,
      customOnSubmit: () => modalAction('open', 'editProfile'),
    },
    {
      name: 'Change Password',
      icon: <ChangePasswordIcon />,
      customOnSubmit: () => modalAction('open', 'changePassword'),
    },
  ]

  const menuSecondRow = [
    {
      name: 'Wishlist',
      icon: <WishlistIcon />,
      screen: 'Wishlist',
    },
    {
      name: 'Shipping Address',
      icon: <ShippingAddressIcon />,
      screen: 'ShippingAddress',
    },
  ]

  const menuThirdRow = [
    {
      name: 'Help',
      icon: <HelpIcon />,
      customOnSubmit: () => WhatsAppLink(),
    },
    {
      name: 'Logout',
      icon: <LogoutIcon />,
      customOnSubmit: () => {
        logOut()
        navigation.navigate('SignIn')
      },
    },
  ]

  return (
    <>
      <UploadModal progress={uploadProgress} visible={uploadVisible} />
      <ScrollView style={styles.mainContainer}>
        <TabScreenHeader
          text={{
            greenText: 'Pro',
            orangeText: 'file',
          }}
        />
        <View style={styles.profileContainer}>
          <Image
            style={styles.profilePhoto}
            uri={img}
            tint="light"
            preview={{
              uri: thumbnailImg
                ? thumbnailImg
                : 'https://res.cloudinary.com/dqdhg7qnc/image/upload/c_thumb,w_200,g_face/v1615098170/shonenplays/products/Manga_-_Weekly_Shonen_Jumo_Issue_5_q6enza.png',
            }}
          />
          <View style={styles.profileNameContainer}>
            <Text style={styles.nameText}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.emailText}>{mail}</Text>
          </View>
        </View>
        <View style={styles.menuListContainer}>
          {menuFirstRow.map((menu, index) => (
            <Menu key={menu.name} menu={menu} />
          ))}
        </View>
        <View style={styles.menuListContainer}>
          {menuSecondRow.map((menu, index) => (
            <Menu key={menu.name} menu={menu} />
          ))}
        </View>
        <View style={{...styles.menuListContainer, marginBottom: 8}}>
          {menuThirdRow.map((menu, index) => (
            <Menu key={menu.name} menu={menu} />
          ))}
        </View>
      </ScrollView>
      <Modalize
        ref={editProfileModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'editProfile')}
            saveMethod={saveProfile}
            title="Edit Profile"
          />
        }
        modalHeight={height / 1.25}>
        <EditProfileModal
          profileData={profileFromRedux}
          profileImage={profileImage}
          setProfileImage={setProfileImage}
        />
      </Modalize>
      <Modalize
        ref={changePasswordModal}
        HeaderComponent={
          <ModalHeader
            cancelMethod={() => modalAction('close', 'changePassword')}
            title="Change Password"
            saveMethod={tempSave}
          />
        }
        modalHeight={height / 1.25}>
        <ChangePasswordModal />
      </Modalize>
    </>
  )
}
