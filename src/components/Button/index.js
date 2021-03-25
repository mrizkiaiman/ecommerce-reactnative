import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

export default Button = ({onSubmit, styling, title, additionalComponents}) => {
  return additionalComponents ? (
    additionalComponents.position === 'left' ? (
      <TouchableOpacity style={styling.buttonStyle} onPress={onSubmit}>
        {additionalComponents.comps}
        <Text style={styling.textStyle}>{title}</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styling.buttonStyle} onPress={onSubmit}>
        <Text style={styling.textStyle}>{title}</Text>
        {additionalComponents.comps}
      </TouchableOpacity>
    )
  ) : (
    <TouchableOpacity style={styling.buttonStyle} onPress={onSubmit}>
      <Text style={styling.textStyle}>{title}</Text>
    </TouchableOpacity>
  )
}

// styling = {
//   buttonStyle,
//   textStyle
// }

// additionalComponents = {
//   comps,
//   position
// }
