export const addWishlist = (product) => {
  return (dispatch, getState) => {
    let currentWishlist = getState().wishlist.data
    let newWishlist = currentWishlist.slice()
    const sameItem = newWishlist.some((wishlist) => wishlist._id == product._id)
    if (sameItem) return
    else {
      newWishlist.push(product)
      dispatch({type: 'UPDATE_STATE_WISHLIST', payload: newWishlist})
    }
  }
}

export const removeWishlist = (product) => {
  return (dispatch, getState) => {
    let newWishlist = getState().wishlist.data.slice()
    newWishlist.forEach((currentWishlist, index) => {
      if (currentWishlist._id === product._id) {
        newWishlist.splice(index, 1)
      }
    })
    dispatch({type: 'UPDATE_STATE_WISHLIST', payload: newWishlist})
  }
}
