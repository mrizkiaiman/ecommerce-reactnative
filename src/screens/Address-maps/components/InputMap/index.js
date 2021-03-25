import React from 'react'
import PlacesInput from 'react-native-places-input'

function InputMaps({notifyChange, formAddress, navigate}) {
  return (
    <PlacesInput
      googleApiKey={'AIzaSyCy-lGh9E7Q0p-sMWVZfi7DEr7Dx66QsW8'}
      placeHolder={'Search your location'}
      language={'en-US'}
      onSelect={(loc) => notifyChange(loc)}
      queryCountries={['id']}
      stylesContainer={{
        width: 270,
        position: 'absolute',
        marginTop: 8,
        marginBottom: -20,
      }}
    />
  )
}

export default InputMaps
