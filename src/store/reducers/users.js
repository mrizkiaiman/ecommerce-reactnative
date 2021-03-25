const defaultState = {
  data: [
    {
      firstName: 'M. Rizki',
      lastName: 'Aiman',
      email: 'm.rizki.aiman@gmail.com',
      password: '123',
    },
  ],
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_STATE_USER':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}
