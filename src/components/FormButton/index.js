import React from 'react'
import {useFormikContext} from 'formik'
//Components
import Button from '../Button'

export default ({styling, title}) => {
  const {handleSubmit} = useFormikContext()
  return <Button onSubmit={handleSubmit} styling={styling} title={title} />
}
