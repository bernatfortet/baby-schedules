import * as React from 'react'

import styled from 'styled-components'
import { Box, BoxProps, c, Column, m, Row, s } from 'styles/index'

import FormButton from 'components/global/forms/FormButton'

interface Props extends BoxProps {
  onSubmit: (e?: any) => void,
  isSubmitting: boolean,
  text: string,
  iconName?: string,
  style?: any
}

const SubmitButton = (props: Props) => {
  return <FormButton type='submit' background={c.blue} color={c.white} {...props}/>
}

export default SubmitButton

