import * as React from 'react'

import styled, { css } from 'styled-components'
import { Box, c, Column, m, Row, s } from 'styles/index'

const StyledInput = (props: React.InputHTMLAttributes<any>) => {
  return(
    <Input {...props} />
  )
}

export default StyledInput


type InputProps = { error?: string }

const error = css` border-color:${c.red} !important;`
const Input = styled.input.attrs<InputProps>({})` ${m.input} ${m.t16}
  ${p => p.error != '' ?  '' : error }
`
