import React from 'react'
//Assets
import EditProfileIcon from '../../../assets/icons/MoreMenu/editProfile.svg'
import ChangePasswordIcon from '../../../assets/icons/MoreMenu/changePassword.svg'
import WishlistIcon from '../../../assets/icons/MoreMenu/wishlist.svg'
import ShippingAddressIcon from '../../../assets/icons/MoreMenu/shippingAddress.svg'
import AboutIcon from '../../../assets/icons/MoreMenu/about.svg'
import HelpIcon from '../../../assets/icons/MoreMenu/help.svg'
import LogoutIcon from '../../../assets/icons/MoreMenu/logout.svg'

export const firstRow = [
  {
    name: 'Edit Profile',
    icon: <EditProfileIcon />,
    screen: 'EditProfile',
  },
  {
    name: 'Change Password',
    icon: <ChangePasswordIcon />,
    screen: 'ChangePassword',
  },
]

export const secondRow = [
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

export const thirdRow = [
  {
    name: 'Help',
    icon: <HelpIcon />,
    screen: 'Help',
  },
  {
    name: 'Logout',
    icon: <LogoutIcon />,
    customOnSubmit: () => console.log('Test'),
  },
]
