const defaultState = {
  firstName: 'M. Rizki',
  lastName: 'Aiman',
  mail: 'm.rizki.aiman@gmail.com',
  img:
    'https://res.cloudinary.com/dqdhg7qnc/image/upload/v1615534208/shonenplays/user/123_jqkvog.jpg',
  thumbnailImg:
    'https://res.cloudinary.com/dqdhg7qnc/image/upload/c_thumb,w_200,g_face/v1615536749/shonenplays/user/123_tamzvc.jpg',
  userType: 1,
  defaultAddress: {
    name: 'Home',
    address: 'Jalan Soekarno Hatta, komplek BSI, blok C2 No 24, RT 05, RW 05',
    pic: 'Iki',
    phone: '081276111123',
    lat: '123',
    lng: '123',
    city: 'Palembang',
    province: 'South Sumatera',
    postalCode: '123456',
  },
  mobilePhone: '0812345671',
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_STATE_PROFILE':
      return action.payload
    default:
      return state
  }
}
