const defaultState = {
  data: {},
}

export default function (state = defaultState, action) {
  switch (action.type) {
    case 'UPDATE_STATE_CHECKOUT':
      return {
        ...state,
        data: action.payload,
      }
    default:
      return state
  }
}
