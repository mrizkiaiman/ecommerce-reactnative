export const updatePhoto = (img) => {
  return (dispatch, getState) => {
    let currentProfile = getState().profile
    currentProfile.img = img
    dispatch({type: 'UPDATE_STATE_ORDERS', payload: currentProfile})
  }
}
